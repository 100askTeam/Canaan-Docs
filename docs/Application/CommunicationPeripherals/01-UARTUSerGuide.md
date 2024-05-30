# UART使用指南

UART（通用异步收发传输）是一种常见的串行通信协议，用于在计算机和外部设备之间传输数据。它是一种简单且广泛应用的串口通信标准。下面是一些使用UART的指南：

1. 确定串口设备：首先，确定你要使用的串口设备路径。在Linux系统中，串口设备通常以`/dev/ttySx`或`/dev/ttyUSBx`的形式命名，其中`x`是设备号。
2. 打开串口设备：使用系统调用（如`open()`函数）打开串口设备文件。确保以可读写模式打开串口设备，并且没有其他进程正在使用该串口。
3. 配置串口参数：使用串口配置结构体（如`struct termios`）来配置串口的参数，包括波特率、数据位、停止位、奇偶校验等。通过调用`tcsetattr()`函数将配置应用到串口设备。

## 1.UART的基础使用

### 1.1 硬件准备

由于K510开发板可以通过查看芯片手册的引脚功能，在内核设备树内配置引脚复用功能 。我们在系统中已经默认将IO脚114和115使能为UART1串口功能，可以查看设备树文件可知。

![image](http://photos.100ask.net/canaan-docs/d5066f6732d8a745d8a1ed1fac86a29b4d33327a.png)

我们可以在硬件原理图中可以看到对应的位置，如下所示：

![image-20240530161559263](http://photos.100ask.net/canaan-docs/image-20240530161559263.png)

其中IO114为RX,需要连接到串口模块中的TX；其中IO115为TX，需要连接到串口模块中的RX。



下图为硬件示意图：

![image-20240530163250738](http://photos.100ask.net/canaan-docs/image-20240530163250738.png)

使用一个PH2.0的6PIN线引出杜邦线连接串口的RX、TX、和GND即可进行通信。

![image-20240530163324623](http://photos.100ask.net/canaan-docs/image-20240530163324623.png)

### 1.2 字符串写入串口示例代码

使用C++的字符串流（stringstream）将字符串转换为可写入串口的形式。下面是如何将给定的代码片段修改为C++的串口写入形式：

```
#include <iostream>
#include <string>
#include <sstream>
#include <unistd.h>
#include <fcntl.h>
#include <termios.h>

int main() {
    std::string portname = "/dev/ttyS1"; // 串口设备路径
    std::string text = "YourTextHere"; // 要写入串口的文本

    // 打开串口设备
    int fd = open(portname.c_str(), O_RDWR | O_NOCTTY | O_NDELAY);
    if (fd == -1) {
        perror("open");
        return -1;
    }

    // 配置串口
    struct termios options;
    tcgetattr(fd, &options);
    cfsetispeed(&options, B9600); // 输入波特率
    cfsetospeed(&options, B9600); // 输出波特率
    options.c_cflag |= (CLOCAL | CREAD);
    options.c_cflag &= ~PARENB; // 无奇偶校验
    options.c_cflag &= ~CSTOPB; // 1位停止位
    options.c_cflag &= ~CSIZE;
    options.c_cflag |= CS8; // 8位数据位
    tcsetattr(fd, TCSANOW, &options);

    // 写入内容到串口
    if (write(fd, text.c_str(), text.length()) == -1) {
        perror("write");
        close(fd);
        return -1;
    }

    // 关闭串口
    close(fd);

    return 0;
}

```



### 1.3  将程序的输出内容发送到ttyS1串口

使用用串口通信库（如`termios.h`）来打开串口并写入数据。下面是一个示例代码，演示了如何将程序的输出内容发送到ttyS1串口：

```
#include <iostream>
#include <fstream>
#include <string>
#include <unistd.h>
#include <fcntl.h>
#include <termios.h>

int main() {
    std::string portname = "/dev/ttyS1"; // ttyS1串口设备路径
    
    // 打开串口设备
    int fd = open(portname.c_str(), O_RDWR | O_NOCTTY);
    if (fd == -1) {
        perror("open");
        return -1;
    }

    // 配置串口
    struct termios options;
    tcgetattr(fd, &options);
    cfsetispeed(&options, B9600); // 输入波特率
    cfsetospeed(&options, B9600); // 输出波特率
    options.c_cflag |= (CLOCAL | CREAD);
    options.c_cflag &= ~PARENB; // 无奇偶校验
    options.c_cflag &= ~CSTOPB; // 1位停止位
    options.c_cflag &= ~CSIZE;
    options.c_cflag |= CS8; // 8位数据位
    tcsetattr(fd, TCSANOW, &options);

    // 重定向标准输出到串口
    dup2(fd, STDOUT_FILENO);

    // 在标准输出中写入内容，将会发送到串口
    std::cout << "Hello, serial port!" << std::endl;

    // 关闭串口
    close(fd);

    return 0;
}
```

### 1.4 编译代码运行

编译代码需要依靠Ubuntu环境，请确保您已经完成[《AI应用程序编译》](https://canaan-docs.100ask.net/Application/AIApplicationDevelopment-Canaan/03-AIApplicationCompilation.html)，完成后，我们需要参考`object_detect`项目，新增串口示例项目，项目示例程序下载：[UART使用指南-串口示例程序](https://forums.100ask.net/t/topic/6758)，您可以参考下载链接的使用说明进行操作。

下面我们就主要展示新增项目的步骤：

1.参考`object_detect`项目，在code目录下新建串口示例文件夹，例如serial_demo文件夹：

![image-20240530171831840](http://photos.100ask.net/canaan-docs/image-20240530171831840.png)

2. 修改code目录下的CMakeLists.txt文件，在文件末尾新增一句：

   ```
   add_subdirectory(serial_demo)
   ```

   这意味会向当前Cmake项目添加一个子目录。

3. 参考参考`object_detect`项目，编写对应的CmakeList.txt，如下所示：

   ![image-20240530173601852](http://photos.100ask.net/canaan-docs/image-20240530173601852.png)

   文件内容为：

   ```
   set(SRC main.cc  ../common/k510_drm.c ../common/v4l2.c ../common/buf_mgt.cc)
   set(bin serial_demo)
   set(input ../imx219_0.conf ../imx219_1.conf ../video_object_detect_320.conf ../video_object_detect_640.conf)
   
   
   add_definitions(-DFULL_SCREEN)
   
   include_directories ("../common")
   include_directories(${DEMO_ROOT}/riscv64/include)
   include_directories(${DEMO_ROOT}/riscv64/opencv_4.5.1/include/opencv4)
   include_directories(${DEMO_ROOT}/riscv64/video_zt)
   
   
   link_directories(${DEMO_ROOT}/riscv64/lib/)
   link_directories(${DEMO_ROOT}/riscv64/opencv_4.5.1/lib)
   link_directories(${DEMO_ROOT}/riscv64/video_zt)
   
   add_executable(${bin} ${SRC})
   target_link_libraries(${bin} mediactl drm pthread)
   target_link_libraries(${bin} nncase.runtime nncase.rt_modules.k510)
   target_link_libraries(${bin} opencv_core opencv_imgcodecs opencv_imgproc opencv_videoio)
   
   install(TARGETS ${bin} DESTINATION exe)
   install(PROGRAMS ${input} DESTINATION exe)
   ```

   该文件中指定有编译的程序、编译出来的可执行文件以及依赖信息等。

4. 新增对应的程序main.cc，如下图所示：

   ![image-20240530173803007](http://photos.100ask.net/canaan-docs/image-20240530173803007.png)

   程序内容为1.2小节或1.3小节中的代码。

5. 编译步骤，在code目录激活环境并编译程序，如下所示：

   ```
   ubuntu@ubuntu2004:~/100ask_base-aiApplication-demo/code$ source build.sh
   ubuntu@ubuntu2004:~/100ask_base-aiApplication-demo/code$ make
   ```

   编译完成后即可在serial_demo文件夹下看到serial_demo可执行程序。

6. 运行结果，**使用串口模块连接开发板的TTYS1至电脑端**，启动开发板，将可执行程序传输到开发板端，在开发板上执行程序，可以在另一个串口中看到传输过来的数据。

   ![image-20240530175036352](http://photos.100ask.net/canaan-docs/image-20240530175036352.png)

   > 注意：另一个串口需要使用波特率为9600，这个波特率可以在程序中自行设置！！！



## 2.UART的进阶使用

项目示例程序下载：[UART使用指南-进阶程序](https://forums.100ask.net/t/topic/6759)

该项目会将程序的输出，输出至TTYS1；您可以使用将串口模块连接到开发板的TTYS1接口，参考1.1硬件准备连接；连接后即可在串口模块中看到对应检测结果，检测结果输出格式如下所示：

```
72:refrigerator:0.59:4:102:634:1914
72:refrigerator:0.67:9:588:544:1908
72:refrigerator:0.54:4:600:544:1920
72:refrigerator:0.61:0:540:558:1920
72:refrigerator:0.50:4:570:589:1908
0:person:0.64:4:24:567:1908
64:mouse:0.62:630:1392:1071:1896
64:mouse:0.51:769:1014:1071:1440
64:mouse:0.61:463:1188:1066:1710
```

输出数据内容解释可以参考项目程序中main.cc中265行中的代码，如下所示：

```
std::cout << r.label << ":" << text << ":" << frame.line_x_start << ":" << frame.line_x_start << ":" << frame.line_x_end << ":" << frame.line_y_end << std::endl;
```

可以看到输出格式为：类别数:标签:x坐标起始:y坐标起始:x坐标结束:y坐标结束。

> 这里的XY坐标表示检测框的位置信息！！



下面展示一下代码片段，主要在主函数中将程序输出修改至TTYS1输出：

```
/****fixed operation for mediactl init****/
    if(mediactl_init(video_cfg_file, &dev_info[0]))
        return -1;

    std::string portname = "/dev/ttyS1"; // ttyS1串口设备路径
    
    // 打开串口设备
    int fd = open(portname.c_str(), O_RDWR | O_NOCTTY);
    if (fd == -1) {
        perror("open");
        return -1;
    }

    // 配置串口
    struct termios options;
    tcgetattr(fd, &options);
    cfsetispeed(&options, B9600); // 输入波特率
    cfsetospeed(&options, B9600); // 输出波特率
    options.c_cflag |= (CLOCAL | CREAD);
    options.c_cflag &= ~PARENB; // 无奇偶校验
    options.c_cflag &= ~CSTOPB; // 1位停止位
    options.c_cflag &= ~CSIZE;
    options.c_cflag |= CS8; // 8位数据位
    tcsetattr(fd, TCSANOW, &options);

    // 重定向标准输出到串口
    dup2(fd, STDOUT_FILENO);

    // 在标准输出中写入内容，将会发送到串口
    std::cout << "Hello, serial port!" << std::endl;


    // create thread for display
    std::thread thread_ds0(display_worker, enable_profile);
    // create thread for ai worker
    std::thread thread_ds2(ai_worker, ai_args);

    thread_ds0.join();
    thread_ds2.join();
```
