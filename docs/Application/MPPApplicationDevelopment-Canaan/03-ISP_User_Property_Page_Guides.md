#  ISP用户属性指南

# API

## Property Page

类型说明

```c
enum  isp_pipeline_e //pipeline的索引号，通常以数字或成员名称表示不同的pipeline
{
    ISP_F2K_PIPELINE; //对应int类型0
    ISP_R2K_PIPELINE; //对应int类型1
    ISP_TOF_PIPELINE; //对应int类型2
}；
```

```c
typedef struct _ADAPTIVE_USER_ATTR_ISP_CTL_T //属性页ISP控制功能汇总结构体，修改成员值可以实现控制
{
    int nLscEnable; //控制LSC模块使能，0：关闭，1：开启
    int nLdcEnable; //控制LDC模块使能，0：关闭，1：开启。当前LDC不能打开ISP异常
    int nAeEnable; //控制自动/手动曝光，0：手动模式，1：自动模式。自动切换至手动状态默认使用上一帧曝光参数作为当前的手动值
    int nAeEnhMode; //控制背光补偿/强光抑制，0：关闭，1：背光补偿，2：强光抑制。与WDR功能冲突，仅有一种模式可以开启，当其他模式开启时，当前模式启动无效
    int nWdrEnable; // 0: normal, 1: linner-wdr enable。控制Linner WDR功能，与背光补偿和强光抑制功能冲突，仅有一种模式可以开启，当其他模式开启时，当前模式启动无效
    int nAwbEnable; //控制自动/手动白平衡，0：手动模式，1：自动模式。若模式为手动时可以选配不同光源的CCM及手动设置白平衡Rgain、Ggain、Bgain
    int nFlip; //控制镜像模式，0：正常，1：水平镜像，2：垂直镜像，3：水平垂直镜像
    int nAntiflickerScl; //控制工频闪烁抑制功能，0：关闭，1，2：50Hz自动/强制，3，4：60Hz自动/强制。强制模式时高亮场景将限制最小曝光时间只能达到1/100s(50Hz)或1/120s(60Hz)
    int nDefogEn; //控制去雾功能，0：关闭，1：开启
    int reserved[10]; 
}ADAPTIVE_USER_ATTR_ISP_CTL_T;//通常初始化时用该别名
```

```c
typedef struct _ADAPTIVE_USER_ATTR_LIMIT_T //属性页限制参数范围汇总结构体
{
    int nGainRange[2]; // gain range [0]: min, [1]: max
    int nEtRange[2]; // ET range [0]: min, [1]: max
    int nCtScl; // 选择不同光源下的CCM矩阵设置。0：A，1：U30，2：U35，3：TL84，4：D50，5：D65。AWB处于手动模式时，当前功能有效
}ADAPTIVE_USER_ATTR_LIMIT_T; //通常初始化时用该别名
```

```c
typedef struct _ADAPTIVE_USER_ATTR_WEIGHT_T //属性页调整功能强度汇总结构体
{
    int nSaturationCoeff; //控制饱和度等级，范围0-100，默认50
    int nBrightnessCoeff; //控制亮度等级，范围0-100，默认50
    int nContrastCoeff; //控制对比度等级，范围0-100，默认50
    int nSharpnessCoeff; //控制锐度强度，范围0-100，默认50
    int n2dnrLevelCoeff; //控制2D降噪强度，范围0-10，默认5
    /* ae param */
    int nAeBacklightCoeff; //控制背光补偿模式强度，自动曝光且开启背光补偿模式下，范围1-10，不与强光抑制同时生效
    int nAeStronglightCoeff; //控制强光抑制模式强度，自动曝光且开启强光抑制模式下，范围1-10，不与背光补偿同时生效
    int nWdrCoeff; //Linner WDR功能有效开启时，控制WDR强度，范围0-9，注意设置超过9图像将异常
}ADAPTIVE_USER_ATTR_WEIGHT_T; //通常初始化时用该别名
```

```c
typedef struct _ADAPTIVE_USER_MENU_3A_T //属性页开启手动模式时可以控制的参数
{
    int nCurGain; // current gain: 1~16x, default 2x, over range will use min or max value
    int float nCurExpTime; // current exposure time(us)
    int nCurWbRGain; //手动白平衡下，控制红通道增益，范围0-1023，默认202
    int nCurWbGGain; //手动白平衡下，控制绿通道增益，范围0-1023，默认256不动
    int nCurWbBGain; //手动白平衡下，控制蓝通道增益，范围0-1023，默认356
}ADAPTIVE_USER_MENU_3A_T; //通常初始化时用该别名
```

```c
typedef struct _ADAP_USER_ATTR_PAGE_T //属性页控制汇总结构体
{
    int nWritten; //写入状态，下发时默认置为2，其他值将无法下发
    int nAdaptiveUserAttrEnable; //属性页使能，0：关闭属性页功能，1：开启属性页功能
    int nAdaptiveUserAeMode; // only use to ae auto/handle switch 0: sw, 1: hw
    int nAeSync; // only use for ae sync in dual camera & sw ae
    ADAPTIVE_USER_ATTR_ISP_CTL_T tUserAttrIspCtl; //ISP控制功能，上述结构体
    ADAPTIVE_USER_ATTR_LIMIT_T tUserAttrLimit; //限制参数范围，上述结构体
    ADAPTIVE_USER_ATTR_WEIGHT_T tUserAttrWeight; //调整功能强度，上述结构体
    ADAPTIVE_USER_MENU_3A_T tUserMenu3A; //手动模式下控制参数，上述结构体
}ADAPTIVE_ATTRIBUTE_PAGE_T; // Root Permission for whole adaptive function
```

函数

```c
int attr_page_params_setting(enum isp_pipeline_e pipeline, ADAPTIVE_ATTRIBUTE_PAGE_T * attr_page); //属性页功能设置，传入参数pipeline 0：f2k, 1：r2k，3：tof（不支持），attr_page为上述汇总结构体指针，即可控制
int attr_page_get_written_stat(enum isp_pipeline_e pipeline); //获取可写状态，返回3，可进行配置
```

## Face Ae

类型说明

```c
enum ae_hist_mode_e
{
    AE_HIST_MODE_WHOLE_PICTURE, // 全图统计
    AE_HIST_MODE_CENTRAL_AERA, // 窗口统计
}; // AE统计模式
```

```c
typedef struct __AE_HIST_WINDOW_T
{
    int nHStart;
    int nVStart;
    int nHEnd; 
    int nVEnd;
} AE_HIST_WINDOW_T; //AE统计窗口
```

函数

```c
int ae_hist_mode_scl(enum isp_pipeline_e pipeline, enum ae_hist_mode_e ae_hist_mode, AE_HIST_WINDOW_T * hist_window); // AE统计模式选择

enum isp_pipeline_e pipeline: 选择pipeline, 0: f2k, 1: r2k
enum ae_hist_mode_e ae_hist_mode: 选择AE模式
AE_HIST_WINDOW_T * hist_window: AE统计窗口的结构体指针（通过人脸识别后赋值），仅在窗口统计模式下可用，全图统计模式下默认为NULL即可

```

Demo

```c
#include "media_ctl.h"
int main()
{
    AE_HIST_WINDOW_T * hist_window; // 初始化人脸坐标结构体
    hist_window->nHStart = 100; // 从KPU AIdemo获取主人脸识别坐标
    hist_window->nVStart = 200; // 同上
    hist_window->nHEnd = 300; // 同上
    hist_window->nVEnd = 400; // 同上
    ae_hist_mode_scl(0, AE_HIST_MODE_CENTRAL_AERA, &hist_window); // 调用face ae设置模式将人脸坐标作为统计窗口使用
}
```

## Y Average Get

类型说明

```c
enum  isp_pipeline_e
{
    ISP_F2K_PIPELINE,
    ISP_R2K_PIPELINE,
    ISP_TOF_PIPELINE,
};
```

函数

```c
int ae_y_average_get(enum isp_pipeline_e pipeline, unsigned int *value);
unsigned int *value: 指向unsigned int的指针，传入后将被赋值亮度统计值
```

Demo

```c
#include "media_ctl.h"
int main()
{ 
    int ret = -1; 
    unsigned int value = 0; 
    ret = ae_y_average_get(pipeline, &value); 
    printf("y average after get: %d\n", value); 
    return ret; 
}
```

## Ir Cut

类型说明

```c
enum ir_cut_mode_e
{
    USER_IR_CUT_NIGHT, // 夜片模式
    USER_IR_CUT_DAY, // 日片模式
}; // Ir Cut模式
```

```c
typedef struct __CB_IR_CUT_T
{
    int nIrCutCtl; // 0:day2night, 1: night2day
    int nSensor; // 0: sensor0, 1: sensor1
} CB_IR_CUT_T; // 用户回调函数使用的参数结构体
```

```c
typedef int (* __IspCallBack)(void *); // 回调函数形式定义
```

```c
typedef struct __ISP_CB_T
{
    __IspCallBack pIspfunc; // 用户回调函数指针
    int nSize; // 用户回调函数传入参数的长度
    enum isp_callback_id nIcbId; // 回调函数注册模块ID
} ISP_CB_T; // 用户注册函数用的结构体
```

函数

```c
int isp_module_callback_register(ISP_CB_T * icb);
回调函数注册接口
ISP_CB_T * icb: 注册用的结构体指针，避免使用临时指针
```

```c
int ir_cut_ev_get(enum isp_pipeline_e pipeline, enum ir_cut_mode_e ir_cut_mode);
获取切换日/夜片的曝光量阈值等级
enum isp_pipeline_e pipeline: 选择pipeline, 0: f2k, 1: r2k
enum ir_cut_mode_e ir_cut_mode: 获取切换日片模式的曝光量等级表示当前曝光量小于该等级时切换日片，获取切换夜片模式的曝光量等级表示当曝光量大于该等级时切换夜片
返回值: 曝光量等级1-10
```

```c
int ir_cut_ev_set(enum isp_pipeline_e pipeline, enum ir_cut_mode_e ir_cut_mode, int level);
设置切换日/夜片的曝光量阈值等级
enum isp_pipeline_e pipeline: 选择pipeline, 0: f2k, 1: r2k
enum ir_cut_mode_e ir_cut_mode: 日片模式时设置的曝光量等级表示当前曝光量小于该等级时切换日片，夜片模式时设置的曝光量等级表示当前曝光量大于该等级时切换夜片
返回值: 0为成功，非0为失败
```

```c
float ir_cut_hold_time_get(enum isp_pipeline_e pipeline, enum ir_cut_mode_e ir_cut_mode);
获取Ir Cut切换的稳定时间，表示当曝光量达到某一等级后保持一定的时间，Ir Cut才进行切换，避免亮度突变带来的切换震荡
enum isp_pipeline_e pipeline: 选择pipeline, 0: f2k, 1: r2k
enum ir_cut_mode_e ir_cut_mode: 日/夜片
返回值: 毫秒
```

```c
int ir_cut_hold_time_set(enum isp_pipeline_e pipeline, enum ir_cut_mode_e ir_cut_mode, float hold_time);
设置Ir Cut切换的稳定时间，表示当曝光量达到某一等级后保持一定的时间，Ir Cut才进行切换，避免亮度突变带来的切换震荡
enum isp_pipeline_e pipeline: 选择pipeline, 0: f2k, 1: r2k
enum ir_cut_mode_e ir_cut_mode: 日/夜片
返回值: 0为成功，非0为失败
```

Demo

```c
#include "media_ctl.h"

ISP_CB_T isp_cb = {
    .nIcbId = ISP_CALLBACK_ID_IRCUT, // 指定要注册给哪个模块，默认为IRCUT
    .nSize = sizeof(CB_IR_CUT_T) / sizeof(int), // 指定回调函数需要的传入参数结构体的长度
    .pIspfunc = test_isp_callback_ircut, // 指定回调函数指针
}; // 初始化一个回调结构体
/*
* 用户测试函数
* @param: void * val , 传给用户约定好的数据类型，在函数内部强转即可
*/
int test_isp_callback_ircut(void * val)
{
    CB_IR_CUT_T * ir_cut_val = (CB_IR_CUT_T *)val; // 传入void *强制转换为约定好的数据类型
    printf("ptr : %p\n", val); // 打印数据地址
    printf("ircut callback current ctl mode: %d\n",ir_cut_val->nIrCutCtl); // 打印传入的数据
    printf("ircut callback current sensor: %d\n",ir_cut_val->nSensor); // 打印传入的数据
    return 10012; // 返回
}
 
/*
* 入口
*/
int main()
{
    isp_module_callback_register(&isp_cb);  // 将初始化的结构体注册
    printf("Day2Night Ev Level: %d\n", ir_cut_ev_get(pipeline, 0)); // 获取pipeline0的Day2Night Ev Level
    printf("Night2Day Ev Level: %d\n", ir_cut_ev_get(pipeline, 1)); // 获取pipeline0的Night2Day Ev Level
    printf("Day2Night Ev Level set status: %d\n", ir_cut_ev_set(pipeline, 0, 20)); // 设置pipeline0的Day2Night Ev Level
    printf("Night2Day Ev Level set status: %d\n", ir_cut_ev_set(pipeline, 1, 6)); // 设置pipeline0的Night2Day Ev Level
    printf("Day2Night hold time: %f\n", ir_cut_hold_time_get(pipeline, 0));
    printf("Night2Day hold time: %f\n", ir_cut_hold_time_get(pipeline, 1));
    ir_cut_hold_time_set(pipeline, 0, 1.6);
    ir_cut_hold_time_set(pipeline, 1, 2.5);
}
```

# API_DEMO

mediactl_init初始化以及ISP初始化结束后可进行属性页控制功能调用

```json
1. 初始化默认参数结构体adap_attr_page_r2k
2. 设置written = 2
3. 调用attr_page_get_written_stat确认返回值是否为3，是则继续
4. 调用attr_page_params_setting，将adap_attr_page_r2k地址传入，等待生效
5. 修改其他参数，重复步骤2-4
```

注意：避免多个关联模块参数的修改，可能会导致控制异常。如：AE同步，AE手动/自动，曝光和增益范围等。

```c
static ADAPTIVE_ATTRIBUTE_PAGE_T adap_attr_page_f2k =
{
    .nAdaptiveUserAttrEnable = 1, // 0: disable, 1: enable
    .nAdaptiveUserAeMode = 0, // 0: sw, 1: hw
    .nWritten = 2,
    .nAeSync = 0,
    .tUserAttrIspCtl = {
        .nAeEnable = 1,
        .nAeEnhMode = 0,
        .nAwbEnable = 1,
        .nLdcEnable = 0, // 0: disable, 1: enable
        .nLscEnable = 1, // 0: disable, 1: enable
        .nFlip = 0,      // 0: normal, 1: hflip, 2: vflip, 3: hvflip
        .nAntiflickerScl = 1, // only sw ae use, 0: normal, 1: 50Hz auto, 2: 50Hz force, 3: 60Hz auto, 4: 60Hz force
        .nDefogEn = 0, // 0: disable, 1 & 2: reserved, 3: enable
        .nWdrEnable = 0,
    },
    .tUserAttrLimit = {
        .nCtScl = 0, // 0: A, 1: U30, 2: U35, 3: TL84, 4: D50, 5: D65
        .nEtRange = {1, 30000}, // [0]: min, [1]: max
        .nGainRange = {2, 16}, // [0]: min do not modify, [1]: max
    },
    .tUserAttrWeight = {
        .n2dnrLevelCoeff = 5, // level 0:10, default 5
        .nBrightnessCoeff = 50, // level: 0 - 100, default 50
        .nContrastCoeff = 50, // level: 0 - 100, default 50
        .nSaturationCoeff = 50, // level: 0 - 100, default 50
        .nSharpnessCoeff = 50, // level: 0 - 100, default 50
        .nAeBacklightCoeff = 0,
        .nAeStronglightCoeff = 0,
    },
    .tUserMenu3A = {
        .nCurExpTime = 30000,
        .nCurGain = 2,
        .nCurWbRGain = 202,
        .nCurWbGGain = 256,
        .nCurWbBGain = 356,
    }
};

static ADAPTIVE_ATTRIBUTE_PAGE_T adap_attr_page_r2k =
{
    .nAdaptiveUserAttrEnable = 1, // 0: disable, 1: enable
    .nAdaptiveUserAeMode = 0, // 0: sw, 1: hw
    .nWritten = 2,
    .nAeSync = 0,
    .tUserAttrIspCtl = {
        .nAeEnable = 1,
        .nAeEnhMode = 0,
        .nAwbEnable = 1,
        .nLdcEnable = 0, // 0: disable, 1: enable
        .nLscEnable = 1, // 0: disable, 1: enable
        .nFlip = 0,      // 0: normal, 1: hflip, 2: vflip, 3: hvflip
        .nAntiflickerScl = 1, // only sw ae use, 0: normal, 1: 50Hz auto, 2: 50Hz force, 3: 60Hz auto, 4: 60Hz force
        .nDefogEn = 0, // 0: disable, 1 & 2: reserved, 3: enable
        .nWdrEnable = 0,
    },
    .tUserAttrLimit = {
        .nCtScl = 0, // 0: A, 1: U30, 2: U35, 3: TL84, 4: D50, 5: D65
        .nEtRange = {1, 30000}, // [0]: min, [1]: max
        .nGainRange = {2, 16}, // [0]: min do not modify, [1]: max
    },
    .tUserAttrWeight = {
        .n2dnrLevelCoeff = 5, // level 0:10, default 5
        .nBrightnessCoeff = 50, // level: 0 - 100, default 50
        .nContrastCoeff = 50, // level: 0 - 100, default 50
        .nSaturationCoeff = 50, // level: 0 - 100, default 50
        .nSharpnessCoeff = 50, // level: 0 - 100, default 50
        .nAeBacklightCoeff = 0,
        .nAeStronglightCoeff = 0,
    },
    .tUserMenu3A = {
        .nCurExpTime = 30000,
        .nCurGain = 2,
        .nCurWbRGain = 202,
        .nCurWbGGain = 256,
        .nCurWbBGain = 365,
    }
};

pthread_t attr_page_daemon;

// 此demo数据同步暂时不完善
int modify_attr_param()
{
    while(1)
    {
        if(adap_attr_page_f2k.nAdaptiveUserAttrEnable == 0)
        {
            adap_attr_page_f2k.nAdaptiveUserAttrEnable = 1;
        }
        else
        {
            adap_attr_page_f2k.nAdaptiveUserAttrEnable = 0;
        }
        sleep(1);
    }
}

int attr_page_set(int pipeline)
{
    while(1)
    {
        while(attr_page_get_written_stat(pipeline) != 3)
        {
            usleep(20);
        }
        attr_page_params_setting(pipeline, &adap_attr_page_f2k);
    }
}

int main()
{
    pthread_create(&attr_page_daemon, NULL, modify_attr_param, NULL);
    f2k_pipeline = 0;
    attr_page_set(f2k_pipeline);
}

```
