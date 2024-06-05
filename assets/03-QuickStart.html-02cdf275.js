import{_ as n,r,o as d,c as i,a as o,b as t,d as e,e as a}from"./app-e64799d6.js";const c={},l=a('<h1 id="快速开始使用" tabindex="-1"><a class="header-anchor" href="#快速开始使用" aria-hidden="true">#</a> 快速开始使用</h1><h2 id="上电启动-登录系统" tabindex="-1"><a class="header-anchor" href="#上电启动-登录系统" aria-hidden="true">#</a> 上电启动 登录系统</h2><h3 id="使用串口登录" tabindex="-1"><a class="header-anchor" href="#使用串口登录" aria-hidden="true">#</a> 使用串口登录</h3><h4 id="_1-连接串口线" tabindex="-1"><a class="header-anchor" href="#_1-连接串口线" aria-hidden="true">#</a> 1.连接串口线</h4><p>如下图所示，我们需要先使用配套的12V DC电源适配器连接左侧蓝框内<code>DC供电接口</code>，此时开发板的红色接口位置 拨动开关拨到左侧，可以给开发板用来供电，供电成功后，核心板上的绿色灯会亮起，此时我们使用一根TypeC线连接至下图右下角所示 蓝框 <code>Debug接口</code>将TypeC线一端连接至 板子，另一端连接至电脑 USB2.0接口。</p><p><img src="http://photos.100ask.net/allwinner-docs/t113-s3/basic/image-20230215173821475.png" alt="image-20230215173821475"></p><h4 id="_2-安装串口驱动程序" tabindex="-1"><a class="header-anchor" href="#_2-安装串口驱动程序" aria-hidden="true">#</a> 2.安装串口驱动程序</h4><p>连接成功串口type-c 数据线后，Windows会自动安装驱动(安装可能比较慢，等一分钟左右)。</p><p>此时可以打开电脑的<strong>设备管理器</strong>，在**端口(COM和LPT)**项下，可以看到下图的(<strong>COM13</strong>)端口号。开发板上的USB串口芯片可能是CP210x或CH9102，它们的性能是一样的。你电脑上显示的COM序号可能不一样，记住你电脑显示的数字。</p><p><img src="http://photos.100ask.net/allwinner-docs/t113-s3/basic/image-20230215172832148.png" alt="image-20230215172832148"></p>',10),h={href:"http://www.drivergenius.com",target:"_blank",rel:"noopener noreferrer"},p=a('<h4 id="_3-运行串口工具" tabindex="-1"><a class="header-anchor" href="#_3-运行串口工具" aria-hidden="true">#</a> 3.运行串口工具</h4><p>串口工具有很多种，这里我们推荐使用Putty或者MobaXterm等串口工具来登录开发板。</p><ul><li><p>putty工具可以访问页面 https://www.chiark.greenend.org.uk/~sgtatham/putty/ 来获取。</p></li><li><p>MobaXterm可以通过访问页面 https://mobaxterm.mobatek.net/ 获取 (推荐使用)。</p></li></ul><p><strong>使用putty登录串口</strong></p><p>如下图所示，打开软件主界面参考下图红框序号所示，依次 <strong>点击1</strong> 切换到 Serial(串行设备) 界面，之后点击<strong>红框2</strong>输入上一步骤在电脑设备管理器内获取到的 端口号，在后面的<strong>红框 Speed</strong>波特率速率里面输入 <code>115200</code>,基本配置完成后，需要切换配置一下 流控设置，点击软件 左侧 蓝框内 <strong>Serial</strong>按钮，切换到 串行设备配置界面，切换成功后，参考下图<strong>红框3</strong> 选择<code>Flow control </code>流控项为<code>None</code>，最后点击<strong>红框4</strong> Open即可打开开发板对应的串口设备，此时 可以按下 键盘 enter回车 按键 输入 ls 看到系统的目录信息。</p><p><img src="http://photos.100ask.net/allwinner-docs/t113-s3/basic/image-20230215175047283.png" alt="image-20230215175047283"></p><p><strong>使用Mobaxterm登录串口</strong></p><p>打开MobaXterm，点击左上角的<code>Session</code>，在弹出的界面选中<code>Serial</code>，如下图所示选择端口号（前面设备管理器显示的端口号COM13）、波特率（Speed 115200）、流控（Flow Control: none）,最后点击<code>OK</code>即可。步骤如下图所示。 <strong>注意：流控（Flow Control）一定要选择none，否则你将无法在MobaXterm中向串口输入数据</strong></p>',8),g={href:"https://cdn.staticaly.com/gh/DongshanPI/Docs-Photos@master/DongshanNezhaSTU/Mobaxterm_serial_set_001.png",target:"_blank",rel:"noopener noreferrer"},_=o("img",{src:"https://cdn.staticaly.com/gh/DongshanPI/Docs-Photos@master/DongshanNezhaSTU/Mobaxterm_serial_set_001.png",alt:"Mobaxterm_serial_set_001"},null,-1),m=a('<p>随后显示一个黑色的窗口， 此时打开板子的电源开关，将收到板子串口发过来的数据,如下步骤所示</p><p><img src="http://photos.100ask.net/allwinner-docs/t113-s3/basic/image-20230216105452371.png" alt="image-20230216105452371"></p><h4 id="_4-进入shell" tabindex="-1"><a class="header-anchor" href="#_4-进入shell" aria-hidden="true">#</a> 4.进入shell</h4><p>看到上述图片显示的信息后，按下键盘上的 enter 键 即可进入 T113 开发板Linux系统的Shell交互界面。</p><p><img src="http://photos.100ask.net/allwinner-docs/t113-s3/basic/image-20230216105514693.png" alt="image-20230216105514693"></p><h3 id="使用adb登录" tabindex="-1"><a class="header-anchor" href="#使用adb登录" aria-hidden="true">#</a> 使用adb登录</h3><h4 id="_1-连接otg线" tabindex="-1"><a class="header-anchor" href="#_1-连接otg线" aria-hidden="true">#</a> 1.连接OTG线</h4><p>​ 将开发板配套的两根typec线，一根 直接连接至 开发板 下图红框所示 OTG 位置， 另一头连接至电脑的USB接口，开发板的 拨动开关拨至<strong>右侧</strong> (往OTG口方向),因OTG也可以给整个板子供电，所以此时可以不用接12V DC接口， 系统就会自己启动。</p><p><img src="http://photos.100ask.net/allwinner-docs/t113-s3/basic/image-20230216105837566.png" alt="image-20230216105837566"></p><p>等待10秒左右，此时你的电脑设备管理器会在 <code>Android Phone</code>下多出一项 <code>Android ADB Interface</code>设备，这个设备就是T113开发板通过OTG接口模拟出来的 ADB设备，可以通过它来进行登录系统，传输文件等操作。</p><p><img src="http://photos.100ask.net/allwinner-docs/t113-s3/basic/image-20230216110202316.png" alt="image-20230216110202316"></p><p><strong>注意：如果没有出现可能是电脑默认没有相关驱动，请使用驱动精灵等工具自动安装。</strong></p><h4 id="_2-安装windows板adb" tabindex="-1"><a class="header-anchor" href="#_2-安装windows板adb" aria-hidden="true">#</a> 2.安装windows板ADB</h4><p>既然有了ADB设备，那么我们需要在Windows下安装adb工具才可以和T113-PRo开发板交互，点击链接 https://gitlab.com/dongshanpi/tools/-/raw/main/ADB.7z 下载Windows版ADB工具下载完成后解压，可以看到如下目录。</p>',14),b={href:"https://cdn.staticaly.com/gh/DongshanPI/Docs-Photos@master/d1s/adb-tools-dir.png",target:"_blank",rel:"noopener noreferrer"},u=o("img",{src:"https://cdn.staticaly.com/gh/DongshanPI/Docs-Photos@master/d1s/adb-tools-dir.png",alt:"adb-tools-dir"},null,-1),w=o("p",null,[t("然后 我们单独 拷贝 上一层的 "),o("strong",null,"platform-tools"),t(" 文件夹到任意 目录，拷贝完成后，记住这个 目录位置，我们接下来要把这个 路径添加至 Windows系统环境变量里。")],-1),f={href:"https://cdn.staticaly.com/gh/DongshanPI/Docs-Photos@master/d1s/adb-tools-dir-001.png",target:"_blank",rel:"noopener noreferrer"},D=o("img",{src:"https://cdn.staticaly.com/gh/DongshanPI/Docs-Photos@master/d1s/adb-tools-dir-001.png",alt:"adb-tools-dir"},null,-1),P=o("p",null,[t("我这里是把它单独拷贝到了 D盘，我的目录是 "),o("code",null,"D:\\platform-tools"),t(" 接下来 我需要把它单独添加到Windows系统环境变量里面才可以在任意位置使用adb命令。")],-1),x={href:"https://cdn.staticaly.com/gh/DongshanPI/Docs-Photos@master/d1s/adb-tools-windows_config_001.png",target:"_blank",rel:"noopener noreferrer"},k=o("img",{src:"https://cdn.staticaly.com/gh/DongshanPI/Docs-Photos@master/d1s/adb-tools-windows_config_001.png",alt:"adb-tools-windows_config_001"},null,-1),y={href:"https://cdn.staticaly.com/gh/DongshanPI/Docs-Photos@master/d1s/adb-tools-windows_config_002.png",target:"_blank",rel:"noopener noreferrer"},S=o("img",{src:"https://cdn.staticaly.com/gh/DongshanPI/Docs-Photos@master/d1s/adb-tools-windows_config_002.png",alt:"adb-tools-windows_config_001"},null,-1),I=o("h4",{id:"_3-打开cmd连接开发板",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#_3-打开cmd连接开发板","aria-hidden":"true"},"#"),t(" 3.打开cmd连接开发板")],-1),C=o("p",null,[t("打开CMD Windows 命令提示符方式有两种 方式1：直接在Windows10/11搜索对话框中输入 cmd 在弹出的软件中点击 "),o("code",null,"命令提示符"),t(" 方式2：同时按下 wind + r 键，输入 cmd 命令，按下确认 就可以自动打开 "),o("code",null,"命令提示符")],-1),T={href:"https://cdn.staticaly.com/gh/DongshanPI/Docs-Photos@master/d1s/adb-tools-windows_config_003.png",target:"_blank",rel:"noopener noreferrer"},v=o("img",{src:"https://cdn.staticaly.com/gh/DongshanPI/Docs-Photos@master/d1s/adb-tools-windows_config_003.png",alt:"adb-tools-windows_config_003"},null,-1),B=o("p",null,"打开命令提示符，输出 adb命令可以直接看到我们的adb已经配置成功",-1),M={href:"https://cdn.staticaly.com/gh/DongshanPI/Docs-Photos@master/d1s/adb-tools-windows_config_004.png",target:"_blank",rel:"noopener noreferrer"},O=o("img",{src:"https://cdn.staticaly.com/gh/DongshanPI/Docs-Photos@master/d1s/adb-tools-windows_config_004.png",alt:"adb-tools-windows_config_004"},null,-1),A=a(`<p>连接好开发板的 OTG 并将其连接至电脑上，然后 输入 adb shell就可以自动登录系统</p><h4 id="_4-adb登录" tabindex="-1"><a class="header-anchor" href="#_4-adb登录" aria-hidden="true">#</a> 4.adb登录</h4><p>如下所示，在Windows 终端内输入 adb shell即可自动登录进入开发板系统内。</p><p><img src="http://photos.100ask.net/allwinner-docs/t113-s3/basic/image-20230216111155418.png" alt="image-20230216111155418"></p><p>ADB 也可以作为文件传输使用，例如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>C:\\System&gt; adb push badapple.mp4 /mnt/UDISK   # 将 badapple.mp4 上传到开发板 /mnt/UDISK 目录内
C:\\System&gt; adb pull /mnt/UDISK/badapple.mp4   # 将 /mnt/UDISK/badapple.mp4 下拉到当前目录内
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意： 此方法目前只适用于 使用全志Tina-SDK 构建出来的系统。</strong></p>`,7);function U(W,N){const s=r("ExternalLinkIcon");return d(),i("div",null,[l,o("p",null,[t("如果电脑没有显示出端口号，就需要手动安装驱动，从驱动精灵官网（"),o("a",h,[t("www.drivergenius.com"),e(s)]),t("）下载一个驱动精灵，安装、运行、检测，会自动安装上串口驱动。")]),p,o("p",null,[o("a",g,[_,e(s)])]),m,o("p",null,[o("a",b,[u,e(s)])]),w,o("p",null,[o("a",f,[D,e(s)])]),P,o("p",null,[o("a",x,[k,e(s)])]),o("p",null,[t("添加到 Windows系统环境变量里面 "),o("a",y,[S,e(s)])]),I,C,o("p",null,[o("a",T,[v,e(s)])]),B,o("p",null,[o("a",M,[O,e(s)])]),A])}const K=n(c,[["render",U],["__file","03-QuickStart.html.vue"]]);export{K as default};
