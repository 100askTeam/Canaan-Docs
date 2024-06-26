# V4L2开发指南

## 1 V4L2 mediactl库

### 1.1 头文件说明

\#include “media_ctl.h”

### 1.2  API 函数说明

#### ◆ mediactl_init

```c
struct video_info {
    unsigned int video_used;
    char *video_name[4];
    unsigned int enable[4];
    unsigned int video_width[4];
    unsigned int video_height[4];
    unsigned int video_out_format[4];
};

int mediactl_init(char *video_cfg_file,struct video_info *dev_info);
```

初始化media。

##### 参数

```text
参数:
[in]    video_cfg_file: video的配置文件，这个文件的内容只需关心下面解释的内容，具体解释如下。
sensor0_name:只在V4L2驱动中设置的sensor驱动名字。
sensor0_cfg_file:sensor对应的isp参数配置文件名字，如imx219_0.conf。
sensor0_total_width:sensor输出的水平方向的总像素，用来产生VSYNC信号，如3476
sensor0_total_height:sensor输出的总行数，用来产生HSYNC信号，如1166
sensor0_active_width:sensor输出的水平方向的有效像素，如1920,
sensor0_active_height:sensor输出的有效行数，如1080
video2_used:1 -- 使能，0 -- 没有使用。
video2_width:video输出的宽度，如1920。
video2_height:video输出的高度，如1080。
video2_out_format:1--指YUV420,NV21。
video3_used:1 -- 使能，0 -- 没有使用。
video3_width:video输出的宽度，如1080。
video3_height:video输出的高度，如720。
video3_out_format:1--指YUV420,NV21。
video4_used:1 -- 使能，0 -- 没有使用。
video4_width:video输出的宽度，如640。
video4_height:video输出的高度，如480。
video4_out_format:1--指YUV420,NV21。
video5_used:1 -- 使能，0 -- 没有使用。
video5_width:video输出的宽度，如320。
video5_height":video存储的高度，如320。
video5_height_r:video输出的高度，如240。
video5_out_format:0--指分离RGB，1--指ARGB。
sensor1_name:只在V4L2驱动中设置的sensor驱动名字。
sensor1_cfg_file:sensor对应的isp参数配置文件名字，如imx219_0.conf。
sensor1_total_width:sensor输出的水平方向的总像素，用来产生VSYNC信号，如3476，
sensor1_total_height:sensor输出的总行数，用来产生HSYNC信号，如1166，
sensor1_active_width:sensor输出的水平方向的有效像素，如1920,
sensor1_active_height:sensor输出的有效行数，如1080
video6_used:1 -- 使能，0 -- 没有使用。
video6_width:video输出的宽度，如1920。
video6_height:video输出的高度，如1080。
video6_out_format:1--指YUV420,NV21。
video7_used:1 -- 使能，0 -- 没有使用。
video7_width:video输出的宽度，如1080。
video7_height:video输出的高度，如720.
video7_out_format:1--指YUV420,NV21。
video8_used:1 -- 使能，0 -- 没有使用。
video8_width:video输出的宽度，如640。
video8_height:video输出的高度，如480。
video8_out_format:1--指YUV420,NV21。
video9_used:1 -- 使能，0 -- 没有使用。
video9_width:video输出的宽度，如320。
video9_height:video存储的宽度，如320。
video9_height_r:video输出的高度，如240。
video9_out_format:0--指分离RGB，1--指ARGB。
[out]   dev_info: mediactl_lib返回从video的配置文件得到的video信息，具体的解释如下。
video_used:这里是指ISP的pipeline，如果使用就会返回1，否则0。K510支持ISP_F2K/ISP_R2K这两个pipeline，每个pipeline最多支持4个video输出。
video_name[4]:返回的video的名字。f2k的四个video是video2/video3/video4/video5;r2k的四个video是 video6/video7/video8/video9
enable[4]:返回的每个video是否使能，1 -- 使能，0 -- 没有使用。
video_width[4]:返回的每个video的宽度。
video_height[4]:返回的每个video的高度。
video_out_format[4]:返回的每个video的输出图像格式，具体见《video的配置文件》的解释。
具体使用方法如下:
char *video_cfg_file = "video_cfg";
struct video_info dev_info[2]
mediactl_init(video_cfg_file,&dev_info)
```

##### 返回值

```text
0 成功,  -1 失败.
```

#### ◆ mediactl_exit

关闭media设备及释放申请的share memory内存。

##### 参数

```text
参数:
无
```

#### ◆ adaptive_enable

```c
enum adaptive_enable_select_e
{
    ADAPTIVE_SELECT_DISABLE,
    ADAPTIVE_SELECT_ENABLE,
};
int adaptive_enable(int scl);
```

配置ISP自适应功能开关

##### 参数

```text
参数
ADAPTIVE_SELECT_DISABLE:关闭libadaptive.so提供的自适应功能计算
ADAPTIVE_SELECT_ENABLE:开启libadaptive.so提供的自适应功能计算（默认）
```

#### ◆ ae_select_init

```c
enum ae_select_e
{
    AE_SELECT_SW_MODE,
    AE_SELECT_HW_MODE,
};
int ae_select_init(int scl);

```

配置软硬AE切换

##### 参数

```text
参数
AE_SELECT_SW_MODE:开启软件AE，使用lib3actl.so提供的软件AE（默认）
AE_SELECT_HW_MODE:开启硬件AE，使用硬件AE
```

#### ◆ anti_flicker_init

```c
enum anti_flicker_scl_e
{
    ANTI_FLICKER_ALL_DSIABLE,
    ANTI_FLICKER_F2K_ENABLE,
    ANTI_FLICKER_R2K_ENABLE,
    ANTI_FLICKER_ALL2K_ENABLE,
};
int anti_flicker_init(int scl);
```

配置antiflicker矫正功能

##### 参数

```text
参数
ANTI_FLICKER_ALL_DSIABLE:关闭antiflicker矫正功能
ANTI_FLICKER_F2K_ENABLE:开启F2K antiflicker50Hz矫正功能
ANTI_FLICKER_R2K_ENABLE:开启R2K antiflicker50Hz矫正功能
ANTI_FLICKER_ALL2K_ENABLE:开启F2K和R2K antiflicker50Hz矫正功能（默认）
```

#### ◆ mediactl_set_ae

```c
enum isp_pipeline_e {
    ISP_F2K_PIPELINE,
    ISP_R2K_PIPELINE,
    ISP_TOF_PIPELINE
};
void mediactl_disable_ae(enum isp_pipeline_e pipeline);
```

关闭ISP的AE。

##### 参数

```text
参数:
ISP_F2K_PIPELINE:关闭f2k pipeline的AE。
ISP_R2K_PIPELINE:关闭r2k pipeline的AE。
```

#### ◆ mediactl_get_isp_modules

```c
enum isp_modules {
    ISP_TPG,
    ISP_BLC,
    ISP_LSC,
    ISP_AE,
    ISP_AWB,
    ISP_AWB_D65,
    ISP_AWB_CCM,
    ISP_WDR,
    ISP_RGB_GAMMA,
    ISP_YUV_GAMMA,
    ISP_ADA,
    ISP_ADA_SBZ,
    ISP_ADA_CCR,
    ISP_RGBIR,
    ISP_RAW_2DNR,
    ISP_YUV_Y_2DNR,
    ISP_YUV_UV_2DNR,
    ISP_3DNR,
    ISP_LTM,
    ISP_SHARP,
    ISP_CC,
    ISP_CTRST,
    ISP_LUMA,
    ISP_SATURATION,
    ISP_LDC,
    ISP_AF,
};

unsigned int mediactl_get_isp_modules(enum isp_pipeline_e pipeline,enum isp_modules module);
```

获取ISP的各模块的使能状态。

##### 参数

```text
参数:
isp_pipeline_e:具体见mediactl_set_ae中的解释。
isp_modules:
  ISP_TPG --  Test Pattern Control模块
  ISP_BLC --  Black Level Correction模块
  ISP_LSC --  Lens Shading Correction模块
  ISP_AE --  AUTO Exposure Gain模块
  ISP_AWB -- AUTO white balance模块
  ISP_AWB_D65 -- AUTO white balance d65模块
  ISP_AWB_CCM -- AUTO white balance ccm模块
  ISP_WDR --  wide dynamic range模块
  ISP_RGB_GAMMA -- rgb gamma模块
  ISP_YUV_GAMMA -- yuv gamma模块
  ISP_ADA --  Adaptive dynamic range adjust模块
  ISP_ADA_SBZ -- Image stabilization模块
  ISP_ADA_CCR -- Color correction模块
  ISP_RGBIR -- rgbir rectify模块
  ISP_RAW_2DNR -- raw域2D降噪模块
  ISP_YUV_Y_2DNR -- yuv域2D Y方向降噪模块
  ISP_YUV_UV_2DNR -- yuv域2D uv方向降噪模块
  ISP_3DNR --  yuv域3D降噪模块
  ISP_LTM --  local tone mapping模块
  ISP_SHARP -- sharpness模块
  ISP_CC --  color correction模块
  ISP_CTRST -- contrast adjust模块
  ISP_LUMA --  luma adjust模块
  ISP_SATURATION -- saturation adjust 模块
  ISP_LDC -- lens Distortion Correction模块
  ISP_AF -- ATUO FOCUS模块
```

##### 返回值

```text
0 -- 模块没有使能  1 -- 模块使能
```

## 2  配置imx385 sensor

### 2.1 修改 设备树

```text
修改k510_crb_lp3_v1_2.dts 文件，将
#include "k510_common/camera-imx219x2.dtsi" 替换成
#include "k510_common/camera-imx385.dtsi"， 如下图所示
```

![image-imx385-dts](http://photos.100ask.net/canaan-docs/image-imx385-dts-1690164749497-2.jpg)

### 2.2 修改内核

```shell
cd k510_buildroot/k510_crb_lp3_v1_2_defconfig
make linux-menuconfig
```

进入配置界面后，进入下边路径：

```text
Device Drivers  --->
Multimedia support  --->
Sensors used on soc_camera driver  --->
```

进入目录后，将Sony IMX385 sensor support 选上，两个219 的不选上，如下如：
![ouput.yuv](http://photos.100ask.net/canaan-docs/image-imx385-kernel-config.jpg)

### 2.3 重新编译镜像

```shell
cd k510_buildroot/k510_crb_lp3_v1_2_defconfig
make linux-rebuild
make riscv-pk-k510-dirclean
make riscv-pk-k510
make
```

### 3  Demo应用

#### 3.1 v4l2_drm

程序放在`/app/mediactl_lib`目录下：

- `v4l2_drm.out`：v4l2和drm联动case，添加了-f 修改输入配置文件的名字。可以使用-h 查看帮助。

运行v4l2_drm.out

- -e：0 关闭所有ae，1打开 f-2k ae，2打开r-2k ae，3打开所有ae。默认情况下可以不指定-e 就是关闭所有ae。
- -x：0 切换至由lib3actl提供的sw ae，1切换至硬件AE。默认情况下可以不指定-x就是sw ae。
- -a：0 关闭antiflicker矫正功能，1 打开f-2k 50Hz矫正功能，2打开r-2k矫正功能，3打开所有antiflicker 50Hz矫正功能。默认情况下可以不指定-a就是开启所有50Hz矫正功能。
- -l：0 关闭libadaptive.so提供的ISP自适应计算功能，1 libadaptive.so提供的ISP自适应计算功能。默认情况下可以不指定-l就是开启libadaptive.so提供的ISP自适应计算功能。
- 该demo 需要video配置文件及对应的sensor配置文件在当前目录下。
- 该demo通过更改配置文件，可以演示单双摄。
- 该demo演示单摄全屏：./v4l2_drm.out -f video_drm_1080x1920.conf
- 该demo演示双摄：./v4l2_drm.out -f video_drm_1920x1080.conf
- 该demo必须保证video_drm_1920x1080.conf，imx219_0.conf及imx219_1.conf三个配置文件存在
- imx385 demo：./v4l2_drm.out -e 1 -f   imx385_video_1920x1080.conf

