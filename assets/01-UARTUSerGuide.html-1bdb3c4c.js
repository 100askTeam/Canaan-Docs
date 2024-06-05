import{_ as l,r as t,o as a,c as r,a as i,b as e,d,e as s}from"./app-e64799d6.js";const c={},v=s(`<h1 id="uart使用指南" tabindex="-1"><a class="header-anchor" href="#uart使用指南" aria-hidden="true">#</a> UART使用指南</h1><p>UART（通用异步收发传输）是一种常见的串行通信协议，用于在计算机和外部设备之间传输数据。它是一种简单且广泛应用的串口通信标准。下面是一些使用UART的指南：</p><ol><li>确定串口设备：首先，确定你要使用的串口设备路径。在Linux系统中，串口设备通常以<code>/dev/ttySx</code>或<code>/dev/ttyUSBx</code>的形式命名，其中<code>x</code>是设备号。</li><li>打开串口设备：使用系统调用（如<code>open()</code>函数）打开串口设备文件。确保以可读写模式打开串口设备，并且没有其他进程正在使用该串口。</li><li>配置串口参数：使用串口配置结构体（如<code>struct termios</code>）来配置串口的参数，包括波特率、数据位、停止位、奇偶校验等。通过调用<code>tcsetattr()</code>函数将配置应用到串口设备。</li><li>读取串口数据：使用系统调用（如<code>read()</code>函数）从串口设备读取数据。可以设置非阻塞模式，以便在没有数据可读时立即返回。</li><li>写入串口数据：使用系统调用（如<code>write()</code>函数）向串口设备写入数据。确保将要发送的数据转换为正确的字节格式。</li><li>关闭串口设备：使用系统调用（如<code>close()</code>函数）关闭串口设备文件。</li></ol><h2 id="_1-uart的基础使用" tabindex="-1"><a class="header-anchor" href="#_1-uart的基础使用" aria-hidden="true">#</a> 1.UART的基础使用</h2><h3 id="_1-1-硬件准备" tabindex="-1"><a class="header-anchor" href="#_1-1-硬件准备" aria-hidden="true">#</a> 1.1 硬件准备</h3><p>由于K510开发板可以通过查看芯片手册的引脚功能，在内核设备树内配置引脚复用功能 。我们在系统中已经默认将IO脚114和115使能为UART1串口功能，可以查看设备树文件可知。</p><p><img src="http://photos.100ask.net/canaan-docs/d5066f6732d8a745d8a1ed1fac86a29b4d33327a.png" alt="image"></p><p>我们可以在硬件原理图中可以看到对应的位置，如下所示：</p><p><img src="http://photos.100ask.net/canaan-docs/image-20240530161559263.png" alt="image-20240530161559263"></p><p>其中IO114为RX,需要连接到串口模块中的TX；其中IO115为TX，需要连接到串口模块中的RX。</p><p>下图为硬件示意图：</p><p><img src="http://photos.100ask.net/canaan-docs/image-20240530163250738.png" alt="image-20240530163250738"></p><p>使用一个PH2.0的6PIN线引出杜邦线连接串口的RX、TX、和GND即可进行通信。</p><p><img src="http://photos.100ask.net/canaan-docs/image-20240530163324623.png" alt="image-20240530163324623"></p><h3 id="_1-2-字符串写入串口示例代码" tabindex="-1"><a class="header-anchor" href="#_1-2-字符串写入串口示例代码" aria-hidden="true">#</a> 1.2 字符串写入串口示例代码</h3><p>使用C++的字符串流（stringstream）将字符串转换为可写入串口的形式。下面是如何将给定的代码片段修改为C++的串口写入形式：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#include &lt;iostream&gt;
#include &lt;string&gt;
#include &lt;sstream&gt;
#include &lt;unistd.h&gt;
#include &lt;fcntl.h&gt;
#include &lt;termios.h&gt;

int main() {
    std::string portname = &quot;/dev/ttyS1&quot;; // 串口设备路径
    std::string text = &quot;YourTextHere&quot;; // 要写入串口的文本

    // 打开串口设备
    int fd = open(portname.c_str(), O_RDWR | O_NOCTTY | O_NDELAY);
    if (fd == -1) {
        perror(&quot;open&quot;);
        return -1;
    }

    // 配置串口
    struct termios options;
    tcgetattr(fd, &amp;options);
    cfsetispeed(&amp;options, B9600); // 输入波特率
    cfsetospeed(&amp;options, B9600); // 输出波特率
    options.c_cflag |= (CLOCAL | CREAD);
    options.c_cflag &amp;= ~PARENB; // 无奇偶校验
    options.c_cflag &amp;= ~CSTOPB; // 1位停止位
    options.c_cflag &amp;= ~CSIZE;
    options.c_cflag |= CS8; // 8位数据位
    tcsetattr(fd, TCSANOW, &amp;options);

    // 写入内容到串口
    if (write(fd, text.c_str(), text.length()) == -1) {
        perror(&quot;write&quot;);
        close(fd);
        return -1;
    }

    // 关闭串口
    close(fd);

    return 0;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-3-将程序的输出内容发送到ttys1串口" tabindex="-1"><a class="header-anchor" href="#_1-3-将程序的输出内容发送到ttys1串口" aria-hidden="true">#</a> 1.3 将程序的输出内容发送到ttyS1串口</h3><p>使用用串口通信库（如<code>termios.h</code>）来打开串口并写入数据。下面是一个示例代码，演示了如何将程序的输出内容发送到ttyS1串口：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#include &lt;iostream&gt;
#include &lt;fstream&gt;
#include &lt;string&gt;
#include &lt;unistd.h&gt;
#include &lt;fcntl.h&gt;
#include &lt;termios.h&gt;

int main() {
    std::string portname = &quot;/dev/ttyS1&quot;; // ttyS1串口设备路径
    
    // 打开串口设备
    int fd = open(portname.c_str(), O_RDWR | O_NOCTTY);
    if (fd == -1) {
        perror(&quot;open&quot;);
        return -1;
    }

    // 配置串口
    struct termios options;
    tcgetattr(fd, &amp;options);
    cfsetispeed(&amp;options, B9600); // 输入波特率
    cfsetospeed(&amp;options, B9600); // 输出波特率
    options.c_cflag |= (CLOCAL | CREAD);
    options.c_cflag &amp;= ~PARENB; // 无奇偶校验
    options.c_cflag &amp;= ~CSTOPB; // 1位停止位
    options.c_cflag &amp;= ~CSIZE;
    options.c_cflag |= CS8; // 8位数据位
    tcsetattr(fd, TCSANOW, &amp;options);

    // 重定向标准输出到串口
    dup2(fd, STDOUT_FILENO);

    // 在标准输出中写入内容，将会发送到串口
    std::cout &lt;&lt; &quot;Hello, serial port!&quot; &lt;&lt; std::endl;

    // 关闭串口
    close(fd);

    return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-4-编译代码运行" tabindex="-1"><a class="header-anchor" href="#_1-4-编译代码运行" aria-hidden="true">#</a> 1.4 编译代码运行</h3>`,21),o={href:"https://canaan-docs.100ask.net/Application/AIApplicationDevelopment-Canaan/03-AIApplicationCompilation.html",target:"_blank",rel:"noopener noreferrer"},u=i("code",null,"object_detect",-1),m={href:"https://forums.100ask.net/t/topic/6758",target:"_blank",rel:"noopener noreferrer"},p=s(`<p>下面我们就主要展示新增项目的步骤：</p><p>1.参考<code>object_detect</code>项目，在code目录下新建串口示例文件夹，例如serial_demo文件夹：</p><p><img src="http://photos.100ask.net/canaan-docs/image-20240530171831840.png" alt="image-20240530171831840"></p><ol start="2"><li><p>修改code目录下的CMakeLists.txt文件，在文件末尾新增一句：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>add_subdirectory(serial_demo)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这意味会向当前Cmake项目添加一个子目录。</p></li><li><p>参考参考<code>object_detect</code>项目，编写对应的CmakeList.txt，如下所示：</p><p><img src="http://photos.100ask.net/canaan-docs/image-20240530173601852.png" alt="image-20240530173601852"></p><p>文件内容为：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>set(SRC main.cc  ../common/k510_drm.c ../common/v4l2.c ../common/buf_mgt.cc)
set(bin serial_demo)
set(input ../imx219_0.conf ../imx219_1.conf ../video_object_detect_320.conf ../video_object_detect_640.conf)


add_definitions(-DFULL_SCREEN)

include_directories (&quot;../common&quot;)
include_directories(\${DEMO_ROOT}/riscv64/include)
include_directories(\${DEMO_ROOT}/riscv64/opencv_4.5.1/include/opencv4)
include_directories(\${DEMO_ROOT}/riscv64/video_zt)


link_directories(\${DEMO_ROOT}/riscv64/lib/)
link_directories(\${DEMO_ROOT}/riscv64/opencv_4.5.1/lib)
link_directories(\${DEMO_ROOT}/riscv64/video_zt)

add_executable(\${bin} \${SRC})
target_link_libraries(\${bin} mediactl drm pthread)
target_link_libraries(\${bin} nncase.runtime nncase.rt_modules.k510)
target_link_libraries(\${bin} opencv_core opencv_imgcodecs opencv_imgproc opencv_videoio)

install(TARGETS \${bin} DESTINATION exe)
install(PROGRAMS \${input} DESTINATION exe)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>该文件中指定有编译的程序、编译出来的可执行文件以及依赖信息等。</p></li><li><p>新增对应的程序main.cc，如下图所示：</p><p><img src="http://photos.100ask.net/canaan-docs/image-20240530173803007.png" alt="image-20240530173803007"></p><p>程序内容为1.2小节或1.3小节中的代码。</p></li><li><p>编译步骤，在code目录激活环境并编译程序，如下所示：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ubuntu@ubuntu2004:~/100ask_base-aiApplication-demo/code$ source build.sh
ubuntu@ubuntu2004:~/100ask_base-aiApplication-demo/code$ make
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>编译完成后即可在serial_demo文件夹下看到serial_demo可执行程序。</p></li><li><p>运行结果，<strong>使用串口模块连接开发板的TTYS1至电脑端</strong>，启动开发板，将可执行程序传输到开发板端，在开发板上执行程序，可以在另一个串口中看到传输过来的数据。</p><p><img src="http://photos.100ask.net/canaan-docs/image-20240530175036352.png" alt="image-20240530175036352"></p><blockquote><p>注意：另一个串口需要使用波特率为9600，这个波特率可以在程序中自行设置！！！</p></blockquote></li></ol><h2 id="_2-uart的进阶使用" tabindex="-1"><a class="header-anchor" href="#_2-uart的进阶使用" aria-hidden="true">#</a> 2.UART的进阶使用</h2>`,5),b={href:"https://forums.100ask.net/t/topic/6759",target:"_blank",rel:"noopener noreferrer"},_=s(`<p>该项目会将程序的输出，输出至TTYS1；您可以使用将串口模块连接到开发板的TTYS1接口，参考1.1硬件准备连接；连接后即可在串口模块中看到对应检测结果，检测结果输出格式如下所示：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>72:refrigerator:0.59:4:102:634:1914
72:refrigerator:0.67:9:588:544:1908
72:refrigerator:0.54:4:600:544:1920
72:refrigerator:0.61:0:540:558:1920
72:refrigerator:0.50:4:570:589:1908
0:person:0.64:4:24:567:1908
64:mouse:0.62:630:1392:1071:1896
64:mouse:0.51:769:1014:1071:1440
64:mouse:0.61:463:1188:1066:1710
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出数据内容解释可以参考项目程序中main.cc中265行中的代码，如下所示：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>std::cout &lt;&lt; r.label &lt;&lt; &quot;:&quot; &lt;&lt; text &lt;&lt; &quot;:&quot; &lt;&lt; frame.line_x_start &lt;&lt; &quot;:&quot; &lt;&lt; frame.line_x_start &lt;&lt; &quot;:&quot; &lt;&lt; frame.line_x_end &lt;&lt; &quot;:&quot; &lt;&lt; frame.line_y_end &lt;&lt; std::endl;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>可以看到输出格式为：类别数:标签:x坐标起始:y坐标起始:x坐标结束:y坐标结束。</p><blockquote><p>这里的XY坐标表示检测框的位置信息！！</p></blockquote><p>下面展示一下代码片段，主要在主函数中将程序输出修改至TTYS1输出：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/****fixed operation for mediactl init****/
    if(mediactl_init(video_cfg_file, &amp;dev_info[0]))
        return -1;

    std::string portname = &quot;/dev/ttyS1&quot;; // ttyS1串口设备路径
    
    // 打开串口设备
    int fd = open(portname.c_str(), O_RDWR | O_NOCTTY);
    if (fd == -1) {
        perror(&quot;open&quot;);
        return -1;
    }

    // 配置串口
    struct termios options;
    tcgetattr(fd, &amp;options);
    cfsetispeed(&amp;options, B9600); // 输入波特率
    cfsetospeed(&amp;options, B9600); // 输出波特率
    options.c_cflag |= (CLOCAL | CREAD);
    options.c_cflag &amp;= ~PARENB; // 无奇偶校验
    options.c_cflag &amp;= ~CSTOPB; // 1位停止位
    options.c_cflag &amp;= ~CSIZE;
    options.c_cflag |= CS8; // 8位数据位
    tcsetattr(fd, TCSANOW, &amp;options);

    // 重定向标准输出到串口
    dup2(fd, STDOUT_FILENO);

    // 在标准输出中写入内容，将会发送到串口
    std::cout &lt;&lt; &quot;Hello, serial port!&quot; &lt;&lt; std::endl;


    // create thread for display
    std::thread thread_ds0(display_worker, enable_profile);
    // create thread for ai worker
    std::thread thread_ds2(ai_worker, ai_args);

    thread_ds0.join();
    thread_ds2.join();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8);function g(h,f){const n=t("ExternalLinkIcon");return a(),r("div",null,[v,i("p",null,[e("编译代码需要依靠Ubuntu环境，请确保您已经完成"),i("a",o,[e("《AI应用程序编译》"),d(n)]),e("，完成后，我们需要参考"),u,e("项目，新增串口示例项目，项目示例程序下载："),i("a",m,[e("UART使用指南-串口示例程序"),d(n)]),e("，您可以参考下载链接的使用说明进行操作。")]),p,i("p",null,[e("项目示例程序下载："),i("a",b,[e("UART使用指南-进阶程序"),d(n)])]),_])}const T=l(c,[["render",g],["__file","01-UARTUSerGuide.html.vue"]]);export{T as default};
