import{_ as e,o,c as d,e as _}from"./app-e64799d6.js";const t={},u=_('<h2 id="_6-基本调试方法介绍" tabindex="-1"><a class="header-anchor" href="#_6-基本调试方法介绍" aria-hidden="true">#</a> 6 基本调试方法介绍</h2><p>debug 调试信息介绍如下：</p><ol><li><p>debug_mode</p><p>debug_mode 可以控制 Boot0 的打印等级，打开文件{LICHEE_BOARD_CONFIG_DIR}/sys_config.fex，在主键 [platform] 下添加子键&quot;debug_mode = 8&quot;即表示开启所有打印，debug_mode=0 表示关闭启动时 Boot0 的打印 log,未显式配置 debug_mode 时，按 debug_mode=8 处理。目前常用的打印等级有 0（关闭所有打印）、1（只显示关键节点打印）、4（打印错误信息）、8（打印所有 log 信息）。</p><p>debug_mode 可以控制 U-Boot 的打印等级，打开文件{LICHEE_BOARD_CONFIG_DIR}/b3/uboot-board.dts，在 platform 节点下添加子键&quot;debug_mode = 8&quot;即表示开启所有打印，debug_mode=0 表示关闭启动时 U-Boot 的打印log, 未显式配置 debug_mode 时，按 debug_mode=8 处理。目前常用的打印等级有 0（关闭所有打印）、1（只显示关键节点打印）、4（打印错误信息）、8（打印所有 log 信息）。</p></li><li><p>usb_debug 在烧录或启动过程中，若遇到烧录失败或启动失败大致挂死在 usb 相关模块，但又不确定具体位置，这时可以打开usb_debug进行调试，开启usb_debug后有关 usb 相关的运行信息会被较详细打印出来。打开usb_debug的方式：打开usb_base.h文件，将其中的#defineSUNXI_USB_DEBUG宏定义打开，打开后重新编译 U-Boot 并打包烧录即可。</p></li></ol><h2 id="_7-进入烧写的方法" tabindex="-1"><a class="header-anchor" href="#_7-进入烧写的方法" aria-hidden="true">#</a> 7 进入烧写的方法</h2><ol><li><p>开机时按住 fel 键</p></li><li><p>开机时打开串口按住键盘数字’2’</p></li><li><p>进入 U-Boot 控制台输入efex</p></li><li><p>进入 Android 控制台输入 reboot efex</p></li></ol>',5),l=[u];function i(a,b){return o(),d("div",null,l)}const r=e(t,[["render",i],["__file","Linux_U-boot_DevelopmentGuide-05.html.vue"]]);export{r as default};