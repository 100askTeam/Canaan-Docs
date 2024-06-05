import{_ as s,r,o as p,c,a,b as e,d as t,e as n}from"./app-e64799d6.js";const i={},d=n('<h1 id="使用烧写工具更新系统" tabindex="-1"><a class="header-anchor" href="#使用烧写工具更新系统" aria-hidden="true">#</a> 使用烧写工具更新系统</h1><h2 id="_1-更新emmc系统" tabindex="-1"><a class="header-anchor" href="#_1-更新emmc系统" aria-hidden="true">#</a> 1.更新EMMC系统</h2><p>​ <strong>硬件要求：</strong></p><ul><li>DongshanPI-Vision开发板</li><li>Type-c数据线 x2</li></ul><p>​ <strong>软件要求：</strong></p>',5),h={href:"https://dongshanpi.cowtransfer.com/s/5482c150ff6147",target:"_blank",rel:"noopener noreferrer"},l={href:"https://dongshanpi.cowtransfer.com/s/b3709a719d2342",target:"_blank",rel:"noopener noreferrer"},g={href:"https://dongshanpi.cowtransfer.com/s/5482c150ff6147",target:"_blank",rel:"noopener noreferrer"},m=n('<h3 id="_1-1-硬件操作" tabindex="-1"><a class="header-anchor" href="#_1-1-硬件操作" aria-hidden="true">#</a> 1.1 硬件操作</h3><p>​ 将下图中的拨码开关的boot0和boot1都向上拨，使开发板进入下载模式。使用两条Type-C线连接开发板端和电脑端，用于给开发板进行供电和使用串口进行烧录EMMC系统。</p><p><img src="http://photos.100ask.net/canaan-docs/image-20230721110228675.png" alt="image-20230721110228675"></p><h3 id="_1-2-烧录镜像" tabindex="-1"><a class="header-anchor" href="#_1-2-烧录镜像" aria-hidden="true">#</a> 1.2 烧录镜像</h3>',4),_={href:"https://dongshanpi.cowtransfer.com/s/b3709a719d2342",target:"_blank",rel:"noopener noreferrer"},f=a("code",null,"KendryteBurningTool\\bin",-1),u=a("code",null,"BurningTool.exe",-1),b=n('<blockquote><p>注意：在使用KendryteBurningTool 烧录工具时需要关闭串口软件和虚拟机，防止串口被占用。</p></blockquote><p><img src="http://photos.100ask.net/canaan-docs/image-20230721104114404.png" alt="image-20230721104114404"></p><p>打开<code>BurningTool.exe</code>程序后会进入如下界面：</p><p><img src="http://photos.100ask.net/canaan-docs/image-20230721111848594.png" alt="image-20230721111848594"></p><p>点击选择文件，选择下载好的EMMC镜像。选择完成后点击保存，操作步骤如下所示：</p><p><img src="http://photos.100ask.net/canaan-docs/K510-buring-tool-file.gif" alt="K510-buring-tool-file"></p><p>保存后需要在串口选择中选择开发板的串口号，当我们将开发板和PC电脑端通过Type-C连接起来后，可以在BurningTool软件中点击红色箭头处查看我开发板的端口号，选择开发板的串口端口号。（我们也可以在设备管理器中确认开发的端口号）</p><p><img src="http://photos.100ask.net/canaan-docs/image-20230721113200863.png" alt="image-20230721113200863"></p><p>选择完成后，点击开始烧录烧录。如果您不是第一次进行烧录，此时等待成功烧录完成即可。如果您是第一次进行烧录请继续阅读下面的内容。第一次烧录步骤如下所示：</p><p><img src="http://photos.100ask.net/canaan-docs/K510-buring-tool-Select-Serial.gif" alt="K510-buring-tool-Select-Serial"></p><p>当PC电脑首次进行烧录时，第一个进度条结束后，会显示下图中的错误信息。此时需要安装驱动。</p><p><img src="http://photos.100ask.net/canaan-docs/image-20230721115810844.png" alt="image-20230721115810844"></p><h3 id="_1-3-安装烧录驱动" tabindex="-1"><a class="header-anchor" href="#_1-3-安装烧录驱动" aria-hidden="true">#</a> 1.3 安装烧录驱动</h3>',13),k={href:"https://dongshanpi.cowtransfer.com/s/c627c619059548",target:"_blank",rel:"noopener noreferrer"},D=n('<blockquote><p>安装前说明：每台计算机安装一次即可。</p></blockquote><p>打开<code>zadig-2.4</code>软件，进入如下界面</p><p><img src="http://photos.100ask.net/canaan-docs/image-20230721120130024.png" alt="image-20230721120130024"></p><p>点击<code>Option</code>中的选择<code>List All Devices</code>（列出所有设备），具体操作如下所示：</p><p><img src="http://photos.100ask.net/canaan-docs/K510-Zadig-list-devices.gif" alt="K510-Zadig-list-devices"></p><p>上述操作完成后，可以看到在虚线框内出现了设备名，我们需要切换设备为 <code>Mass storage devices</code>,具体操作如下所示：</p><p><img src="http://photos.100ask.net/canaan-docs/K510-Zadig-change-devices.gif" alt="K510-Zadig-change-devices"></p><p>点击<code>Replace Driver</code>替换驱动程序，此时会弹出一个确认窗口，点击<code>是</code>。</p><p><img src="http://photos.100ask.net/canaan-docs/image-20230831091224026.png" alt="image-20230831091224026"></p><p>安装完成后会弹出以下窗口点击<code>close</code></p><p><img src="http://photos.100ask.net/canaan-docs/image-20230721153204888.png" alt="image-20230721153204888"></p><p>到此烧录驱动成功安装。</p><h3 id="_1-4-完整烧录镜像" tabindex="-1"><a class="header-anchor" href="#_1-4-完整烧录镜像" aria-hidden="true">#</a> 1.4 完整烧录镜像</h3><p>​ 安装完成烧录镜像后，再次打开<code>BurningTool.exe</code>烧录工具软件，按照1.3章节中的操作进行烧录即可。完整烧录步骤如下所示：</p><p><img src="http://photos.100ask.net/canaan-docs/K510-BurningTool-Complete.gif" alt="K510-BurningTool-Complete"></p><h3 id="_1-5-启动emmc系统" tabindex="-1"><a class="header-anchor" href="#_1-5-启动emmc系统" aria-hidden="true">#</a> 1.5 启动EMMC系统</h3><p>​ 将下图中的拨码开关的boot0和boot1都向下拨，使开发板进入EMMC启动模式。使用两条Type-C线连接开发板端和电脑端，用于给开发板进行供电和使用串口登录开发板控制台。</p><p><img src="http://photos.100ask.net/canaan-docs/image-20230721174905407.png" alt="image-20230721174905407"></p><p>使用串口软件查看串口控制台，成功启动后会进入开发板控制台。</p><p><img src="http://photos.100ask.net/canaan-docs/image-20230721175557977.png" alt="image-20230721175557977"></p><h2 id="_2-制作sd卡镜像" tabindex="-1"><a class="header-anchor" href="#_2-制作sd卡镜像" aria-hidden="true">#</a> 2.制作SD卡镜像</h2><p>硬件要求：</p><ul><li>DongshanPI-Vision开发板</li><li>microSD卡（建议最小8G）</li><li>Type-c数据线 x2</li></ul><p>软件要求：</p>',24),S={href:"https://dongshanpi.cowtransfer.com/s/bac8fbdce7c046",target:"_blank",rel:"noopener noreferrer"},w={href:"https://www.sdcard.org/downloads/formatter_4/eula_windows/",target:"_blank",rel:"noopener noreferrer"},x={href:"https://www.balena.io/etcher",target:"_blank",rel:"noopener noreferrer"},C={href:"https://dongshanpi.cowtransfer.com/s/bac8fbdce7c046",target:"_blank",rel:"noopener noreferrer"},M=a("h3",{id:"_2-1-格式化microsd卡",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#_2-1-格式化microsd卡","aria-hidden":"true"},"#"),e(" 2.1 格式化microSD卡")],-1),T={href:"https://www.sdcard.org/downloads/formatter_4/eula_windows/",target:"_blank",rel:"noopener noreferrer"},E=n('<p><img src="http://photos.100ask.net/canaan-docs/image-20230721165711205.png" alt="image-20230721165711205"></p><p>点击完成后会弹出下图所示的提示框，该提示警告我们格式化将清空卡中的所有数据，询问我们是否继续，这里点击<code>是</code></p><p><img src="http://photos.100ask.net/canaan-docs/image-20230721165954580.png" alt="image-20230721165954580"></p><p>等待格式化完成后，会弹出以下对话框，提示我们格式化后的文件系统为<code>FAT32</code>以及内存大小可用空间，点击确定即可完成SD卡的格式化。</p><p><img src="http://photos.100ask.net/canaan-docs/image-20230721170207480.png" alt="image-20230721170207480"></p><h3 id="_2-2-使用etcher烧录镜像" tabindex="-1"><a class="header-anchor" href="#_2-2-使用etcher烧录镜像" aria-hidden="true">#</a> 2.2 使用Etcher烧录镜像</h3><p>​ 使用Etcher将DongshanPI-Vision开发板SD卡镜像写入您的microSD卡。</p>',7),y={href:"https://www.balena.io/etcher",target:"_blank",rel:"noopener noreferrer"},B=n('<p><img src="http://photos.100ask.net/canaan-docs/image-20230721170709568.png" alt="image-20230721170709568"></p><p>点击<code>Flash from file</code>，如下图所示，点击下图红框处。</p><p><img src="http://photos.100ask.net/canaan-docs/image-20230721170746679.png" alt="image-20230721170746679"></p><p>此时会弹出文件资源管理器，选择您刚刚下载的DongshanPI-Vision开发板SD卡镜像。</p><p><img src="http://photos.100ask.net/canaan-docs/image-20230721171028315.png" alt="image-20230721171028315"></p><p>选择完成后会，显示下面的界面，点击下图中红框处<code>Select target</code>，选择要写入的目标microSD卡。</p><p><img src="http://photos.100ask.net/canaan-docs/image-20230721172244447.png" alt="image-20230721172244447"></p><p>点击完成后会弹出选择目标，此时选择您通过读卡器插入电脑中的microSD卡。</p><p><img src="http://photos.100ask.net/canaan-docs/image-20230721172220680.png" alt="image-20230721172220680"></p><p>选择完成后，会显示以下界面，点击<code>Flash</code>后即可开始烧写。</p><p><img src="http://photos.100ask.net/canaan-docs/image-20230721172614694.png" alt="image-20230721172614694"></p><p>如下图所示等待烧写完成即可。</p><p><img src="http://photos.100ask.net/canaan-docs/image-20230721172653819.png" alt="image-20230721172653819"></p><p>使用Etcher烧写完成后，Windows可能会不知道如何读取您的microSD卡，会弹出如下图所示警告，点击<code>取消</code>后拔出microSD卡即可。</p><p><img src="http://photos.100ask.net/canaan-docs/image-20230721172939202.png" alt="image-20230721172939202"></p><h3 id="_2-3-启动sd卡系统" tabindex="-1"><a class="header-anchor" href="#_2-3-启动sd卡系统" aria-hidden="true">#</a> 2.3 启动SD卡系统</h3><p>​ 将下图中的拨码开关的boot0向下拨和boot1向上拨，使开发板进入SD卡启动模式。将SD卡插入开发板的卡槽中，步骤如下图所示：</p><p><img src="http://photos.100ask.net/canaan-docs/k510-board-Install-sd-card.png" alt="k510-board-Install-sd-card"></p><p>使用两条Type-C线连接开发板端和电脑端，用于给开发板进行供电和使用串口登录开发板控制台。</p><p><img src="http://photos.100ask.net/canaan-docs/image-20230721184330238.png" alt="image-20230721184330238"></p><p>使用串口软件查看串口控制台，成功启动后会进入开发板控制台。</p><p><img src="http://photos.100ask.net/canaan-docs/image-20230721184905618.png" alt="image-20230721184905618"></p>',22);function K(I,V){const o=r("ExternalLinkIcon");return p(),c("div",null,[d,a("ul",null,[a("li",null,[e("DongshanPI-Vision开发板EMMC镜像："),a("a",h,[e("https://dongshanpi.cowtransfer.com/s/5482c150ff6147"),t(o)])]),a("li",null,[e("KendryteBurningTool 烧录工具："),a("a",l,[e("https://dongshanpi.cowtransfer.com/s/b3709a719d2342"),t(o)])])]),a("p",null,[e("开始前请下载DongshanPI-Vision开发板"),a("a",g,[e("EMMC镜像"),t(o)]),e(" ，并记住它在计算机中保存的位置。")]),m,a("p",null,[e("下载EMMC镜像并记住它在计算机中的位置。打开"),a("a",_,[e("KendryteBurningTool"),t(o)]),e(" 烧录工具，进入"),f,e("目录下，双击打开"),u,e("，如下所示的文件。")]),b,a("ul",null,[a("li",null,[e("zadig-2.4烧录驱动安装文件："),a("a",k,[e("https://dongshanpi.cowtransfer.com/s/c627c619059548"),t(o)])])]),D,a("ul",null,[a("li",null,[e("DongshanPI-Vision开发板SD卡镜像："),a("a",S,[e("https://dongshanpi.cowtransfer.com/s/bac8fbdce7c046"),t(o)])]),a("li",null,[e("SD卡格式化工具:"),a("a",w,[e("SD Memory Card Formatter"),t(o)])]),a("li",null,[e("SD卡刷机工具："),a("a",x,[e("ETCHER"),t(o)])])]),a("p",null,[e("开始前请下载DongshanPI-Vision开发板"),a("a",C,[e("SD卡镜像"),t(o)]),e("，并记住它在计算机中保存的位置。")]),M,a("p",null,[e("将您的SD卡使用读卡器通过USB口插入您的PC电脑，使用SD卡格式化工具"),a("a",T,[e("SD Memory Card Formatter"),t(o)]),e("格式化您的SD卡。点击下图中红框位置，开始格式化内存卡。")]),E,a("p",null,[e("​ 下载"),a("a",y,[e("Etcher"),t(o)]),e("烧写工具并安装它。启动Etcher应用程序，启动后界面如下图所示：")]),B])}const v=s(i,[["render",K],["__file","04-UpdateSystem.html.vue"]]);export{v as default};
