import{_ as t,o as n,c as e,b as s,a,e as o}from"./app-e64799d6.js";const i={},h=a("h1",{id:"快速开始使用",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#快速开始使用","aria-hidden":"true"},"#"),s(" 快速开始使用")],-1),r=a("ul",null,[a("li",null,"参考操作演示视频教程")],-1),c=a("iframe",{width:"800",height:"600",src:"//player.bilibili.com/player.html?aid=677495111&bvid=BV1Rm4y1X7GZ&cid=462849541&page=1"},`
`,-1),d=o(`<p><strong>注意：如果你买的配置是没有SPI NANDFLASH配置，则请参考下方的烧写固件至TF卡章节，先烧录系统，才可以启动使用。</strong></p><h3 id="_1-连接串口线" tabindex="-1"><a class="header-anchor" href="#_1-连接串口线" aria-hidden="true">#</a> 1. 连接串口线</h3><p>将配套的TypeC线一段连接至开发板的串口/供电接口，另一端连接至电脑USB接口，连接成功后板载的红色电源灯会亮起。 默认情况下系统会自动安装串口设备驱动，如果没有自动安装，可以使用驱动精灵来自动安装。</p><ul><li>对于Windows系统 此时Windows设备管理器 在 端口(COM和LPT) 处会多出一个串口设备，一般是以 <code>USB-Enhanced-SERIAL CH9102</code>开头，您需要留意一下后面的具体COM编号，用于后续连接使用。</li></ul><p><img src="https://cdn.staticaly.com/gh/DongshanPI/Docs-Photos@master/DongshanNezhaSTU/QuickStart-01.png" alt="QuickStart-01"></p><p>如上图，COM号是96，我们接下来连接所使用的串口号就是96。</p><ul><li>对于Linux系统 可以查看是否多出一个/dev/tty&lt;&gt; 设备,一般情况设备节点为 /dev/ttyACM0 。</li></ul><p><img src="https://cdn.staticaly.com/gh/DongshanPI/Docs-Photos@master/DongshanNezhaSTU/QuickStart-02.png" alt="QuickStart-02"></p><h3 id="_2-打开串口控制台" tabindex="-1"><a class="header-anchor" href="#_2-打开串口控制台" aria-hidden="true">#</a> 2. 打开串口控制台</h3><h4 id="获取串口工具" tabindex="-1"><a class="header-anchor" href="#获取串口工具" aria-hidden="true">#</a> 获取串口工具</h4><p>使用Putty或者MobaXterm等串口工具来开发板设备。</p><ul><li>其中putty工具可以访问页面 https://www.chiark.greenend.org.uk/~sgtatham/putty/ 来获取。</li><li>MobaXterm可以通过访问页面 https://mobaxterm.mobatek.net/ 获取 (推荐使用)。</li></ul><h4 id="使用putty登录串口" tabindex="-1"><a class="header-anchor" href="#使用putty登录串口" aria-hidden="true">#</a> 使用putty登录串口</h4><p><img src="https://cdn.staticaly.com/gh/DongshanPI/Docs-Photos@master/DongshanNezhaSTU/QuickStart-04.png" alt="QuickStart-04"></p><h4 id="使用mobaxterm登录串口" tabindex="-1"><a class="header-anchor" href="#使用mobaxterm登录串口" aria-hidden="true">#</a> 使用Mobaxterm登录串口</h4><p>打开MobaXterm，点击左上角的“Session”，在弹出的界面选中“Serial”，如下图所示选择端口号（前面设备管理器显示的端口号COM21）、波特率（Speed 115200）、流控（Flow Control: none）,最后点击“OK”即可。步骤如下图所示。 <strong>注意：流控（Flow Control）一定要选择none，否则你将无法在MobaXterm中向串口输入数据</strong></p><p><img src="https://cdn.staticaly.com/gh/DongshanPI/Docs-Photos@master/DongshanNezhaSTU/Mobaxterm_serial_set_001.png" alt="Mobaxterm_serial_set_001"></p><h3 id="_3-进入系统shell" tabindex="-1"><a class="header-anchor" href="#_3-进入系统shell" aria-hidden="true">#</a> 3. 进入系统shell</h3><p>使用串口工具成功打开串口后，可以直接按下 Enter 键 进入shell，当然您也可以按下板子上的 <code>Reset</code>复位键，来查看完整的系统信息。 <img src="https://cdn.staticaly.com/gh/DongshanPI/Docs-Photos@master/DongshanNezhaSTU/bootlogs_001.png" alt="bootlogs_001"></p><p><strong>系统默认的 登录 用户名 是 root 没有密码。</strong></p><p><strong>系统默认的 登录 用户名 是 root 没有密码。</strong></p><p><strong>系统默认的 登录 用户名 是 root 没有密码。</strong></p><h2 id="烧写固件至spi-nand" tabindex="-1"><a class="header-anchor" href="#烧写固件至spi-nand" aria-hidden="true">#</a> 烧写固件至SPI NAND</h2><p><strong>注意此方式烧录进的文件系统是只读的，如果操作 需要网络文件系统挂载或者使用TF卡，不推荐使用。</strong></p><h3 id="准备工作" tabindex="-1"><a class="header-anchor" href="#准备工作" aria-hidden="true">#</a> 准备工作</h3><ol><li>东山哪吒STU开发板主板 x1</li><li>下载全志线刷工具AllwinnertechPhoeniSuit： https://gitlab.com/dongshanpi/tools/-/raw/main/AllwinnertechPhoeniSuit.zip</li><li>TypeC线 X2</li><li>下载SPI NAND最小系统镜像：https://gitlab.com/dongshanpi/tools/-/raw/main/tina_d1-h-nezha_uart0.zip</li><li>下载全志USB烧录驱动：https://gitlab.com/dongshanpi/tools/-/raw/main/AllwinnerUSBFlashDeviceDriver.zip</li></ol><h3 id="连接开发板" tabindex="-1"><a class="header-anchor" href="#连接开发板" aria-hidden="true">#</a> 连接开发板</h3><p>参考下图所示，将两个TypeC线分别连至 开发板 串口接口 与 OTG烧写接口，另一端 连接至 电脑USB接口，连接成功后，可以将下载好的 烧写工具和 SPI NAND最小系统镜像解压缩 使用。</p><p><img src="https://cdn.staticaly.com/gh/DongshanPI/Docs-Photos@master/DongshanNezhaSTU/DongshanNezhaSTU-SPI-NAND_FLASH_001.jpg" alt="DongshanNezhaSTU-SPI-NAND_FLASH_001"></p><h3 id="安装usb驱动" tabindex="-1"><a class="header-anchor" href="#安装usb驱动" aria-hidden="true">#</a> 安装usb驱动</h3><p>在我们连接好开发板以后，先按住 <strong>FEL</strong> 烧写模式按键，之后按一下 <strong>RESET</strong> 系统复位键，就可以自动进入烧写模式。</p><p>这时我们可以看到设备管理器 <strong>通用串行总线控制器</strong> 弹出一个 未知设备 ，这个时候我们就需要把我们提前下载好的 <strong>全志USB烧录驱动</strong> 进行修改，然后将解压缩过的 <strong>全志USB烧录驱动</strong> 压缩包，解压缩，可以看到里面有这么几个文件。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>InstallUSBDrv.exe
drvinstaller_IA64.exe
drvinstaller_X86.exe
UsbDriver/          
drvinstaller_X64.exe   
install.bat
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于wind7系统的同学，只需要以管理员 打开 <code>install.bat</code> 脚本，等待安装，在弹出的 是否安装驱动的对话框里面，点击安装即可。</p><p>对于wind10/wind11系统的同学，需要在设备管理器里面进行手动安装驱动。</p><p>如下图所示，在第一次插入OTG设备，进入烧写模式设备管理器会弹出一个未知设备。 <img src="https://cdn.staticaly.com/gh/DongshanPI/Docs-Photos@master/DongshanNezhaSTU/Windows_FlashDevice_001.png" alt="Windows_FlashDevice_001"></p><p>接下来鼠标右键点击这个未知设备，在弹出的对话框里， 点击浏览我计算机以查找驱动程序软件。 <img src="https://cdn.staticaly.com/gh/DongshanPI/Docs-Photos@master/DongshanNezhaSTU/Windows_FlashDevice_002.png" alt="Windows_FlashDevice_001"></p><p>之后在弹出新的对话框里，点击浏览找到我们之前下载好的 usb烧录驱动文件夹内，找到 <code>UsbDriver/</code> 这个目录，并进入，之后点击确定即可。 <img src="https://cdn.staticaly.com/gh/DongshanPI/Docs-Photos@master/DongshanNezhaSTU/Windows_FlashDevice_007.png" alt="Windows_FlashDevice_001"></p><p>注意进入到 <code>UsbDriver/</code> 文件夹，然后点击确定，如下图所示。</p><p><img src="https://cdn.staticaly.com/gh/DongshanPI/Docs-Photos@master/DongshanNezhaSTU/Windows_FlashDevice_003.png" alt="Windows_FlashDevice_001"></p><p>此时，我们继续点击 <strong>下一页</strong> 按钮，这时系统就会提示安装一个驱动程序。 在弹出的对话框里，我们点击 始终安装此驱动程序软件 等待安装完成。 <img src="https://cdn.staticaly.com/gh/DongshanPI/Docs-Photos@master/DongshanNezhaSTU/Windows_FlashDevice_004.png" alt="Windows_FlashDevice_001"></p><p>安装完成后，会提示，Windows已成功更新你的驱动程序。 <img src="https://cdn.staticaly.com/gh/DongshanPI/Docs-Photos@master/DongshanNezhaSTU/Windows_FlashDevice_005.png" alt="Windows_FlashDevice_001"></p><p>最后我们可以看到，设备管理器 里面的未知设备 变成了一个 <code>USB Device(VID_1f3a_efe8)</code>的设备，这时就表明设备驱动已经安装成功。 <img src="https://cdn.staticaly.com/gh/DongshanPI/Docs-Photos@master/DongshanNezhaSTU/Windows_FlashDevice_006.png" alt="Windows_FlashDevice_001"></p><h3 id="运行软件烧写" tabindex="-1"><a class="header-anchor" href="#运行软件烧写" aria-hidden="true">#</a> 运行软件烧写</h3><p>将下载下来的全志线刷工具 <strong>AllwinnertechPhoeniSuit</strong> 解压缩，同时将<strong>SPI NAND最小系统镜像</strong>下载下来也进行解压缩。</p><p>解压后，得到一个 <strong>tina_d1-h-nezha_uart0.img</strong> 镜像，是用于烧录到SPI NAND镜像得。另一个是<strong>AllwinnertechPhoeniSuit</strong>文件夹。</p><p>首先我们进入到 <strong>AllwinnertechPhoeniSuit\\AllwinnertechPhoeniSuitRelease20201225</strong> 目录下 找到 <strong>PhoenixSuit.exe</strong> 双击运行。</p><p>打开软件后 软件主界面如下图所示</p><p><img src="https://cdn.staticaly.com/gh/DongshanPI/Docs-Photos@master/DongshanNezhaSTU/PhoenixSuit_001.png" alt="PhoenixSuit_001"></p><p>​ 接下来 我们需要切换到 <strong>一键刷机</strong>窗口，如下图所示，点击红框标号1，在弹出的新窗口内，我们点击 红框2 <strong>浏览</strong> 找到我们刚才解压过的 SPI NAND 最小系统镜像 <strong>tina_d1-h-nezha_uart0.img</strong> ，选中镜像后，点击红框3 <strong>全盘擦除升级</strong> ，最后点击红框4 <strong>立即升级</strong>。</p><p>​ 点击完成后，不需要理会 弹出的信息，这时 我们拿起已经连接好的开发板，先按住 <strong>FEL</strong> 烧写模式按键，之后按一下 <strong>RESET</strong> 系统复位键，就可以自动进入烧写模式并开始烧写。</p><p><img src="https://cdn.staticaly.com/gh/DongshanPI/Docs-Photos@master/DongshanNezhaSTU/PhoenixSuit_002.png" alt="PhoenixSuit_002"></p><p>​ 烧写时会提示烧写进度条，烧写完成后 开发板会自己重启。</p><p><img src="https://cdn.staticaly.com/gh/DongshanPI/Docs-Photos@master/DongshanNezhaSTU/PhoenixSuit_003.png" alt="PhoenixSuit_003"></p><h3 id="启动系统" tabindex="-1"><a class="header-anchor" href="#启动系统" aria-hidden="true">#</a> 启动系统</h3><p>一般情况下，烧写成功后 都会自动重启 启动系统，此时我们进入到 串口终端，可以看到它的启动信息，等所有启动信息加载完成，输入 root 用户名即可登录烧写好的系统内。</p><p><img src="https://cdn.staticaly.com/gh/DongshanPI/Docs-Photos@master/DongshanNezhaSTU/spinand-flashsystem_001.png" alt="spinand-flashsystem_001"></p><h2 id="烧写固件至tf卡" tabindex="-1"><a class="header-anchor" href="#烧写固件至tf卡" aria-hidden="true">#</a> 烧写固件至TF卡</h2><h3 id="准备工作-1" tabindex="-1"><a class="header-anchor" href="#准备工作-1" aria-hidden="true">#</a> 准备工作</h3><ol><li>东山哪吒STU开发板主板 x1</li><li>Type-C线 X1</li><li>TF卡读卡器 x1</li><li>8GB以上的 micro TF卡 x1</li><li>win32diskimage工具 : https://gitlab.com/dongshanpi/tools/-/raw/main/win32diskimager-1.0.0-install.exe</li><li>SDcard专用格式化工具：https://gitlab.com/dongshanpi/tools/-/raw/main/SDCardFormatter5.0.1Setup.exe</li><li>TF卡最小系统镜像：https://gitlab.com/dongshanpi/tools/-/raw/main/dongshannezhastu-sdcard.zip</li></ol><h3 id="运行烧写软件烧写" tabindex="-1"><a class="header-anchor" href="#运行烧写软件烧写" aria-hidden="true">#</a> 运行烧写软件烧写</h3><p>首先需要下载 <strong>win32diskimage SDcard专用格式化</strong> 这两个烧写TF卡的工具，然后获取到TF卡系统镜像文件<strong>dongshannezhastu-sdcard.zip</strong>，获取到以后，先安装 <strong>win32diskimage SDcard专用格式化</strong> 这两个工具，同时可以解压 一下TF卡系统的镜像文件 <strong>dongshannezhastu-sdcard.zip</strong>，可以得到一个 <strong>dongshannezhastu-sdcard.img</strong>文件 这个文件就是我们要烧写的镜像。</p><ul><li>使用SD CatFormat格式化TF卡，注意备份卡内数据。参考下图所示，点击刷新找到TF卡，然后点击 Format 在弹出的 对话框 点击 **是(Yes)**等待格式完成即可。</li></ul><p><img src="https://cdn.staticaly.com/gh/DongshanPI/Docs-Photos@master/DongshanNezhaSTU/SDCardFormat_001.png" alt="SDCardFormat_001"></p><ul><li>格式化完成后，使用<strong>Win32diskimage</strong>工具来烧录镜像，参考下属步骤，找到自己的TF卡盘符，然后点击2 箭头 文件夹的符号 找到 刚才解压的 TF卡镜像文件 <strong>dongshannezhastu-sdcard.img</strong> 最后 点击 写入，等待写入完成即可。</li></ul><p><img src="https://cdn.staticaly.com/gh/DongshanPI/Docs-Photos@master/DongshanNezhaSTU/wind32diskimage_001.png" alt="wind32diskimage_001"></p><p>完成以后，就可以弹出TF卡，并将其插到 东山哪吒STU 最小板背面的TF卡槽位置处，此时连接 串口线 并使用 串口工具打开串口设备，按下开发板的 <strong>RESET</strong>复位按键就可以重启进入TF卡系统内了。</p><h3 id="启动系统-1" tabindex="-1"><a class="header-anchor" href="#启动系统-1" aria-hidden="true">#</a> 启动系统</h3><p><img src="https://cdn.staticaly.com/gh/DongshanPI/Docs-Photos@master/DongshanNezhaSTU/sdcard-flashsystem_001.png" alt="sdcard-flashsystem_001"></p><p><strong>系统的登录用户名 root 密码为空</strong></p><p><strong>系统的登录用户名 root 密码为空</strong></p><p><strong>系统的登录用户名 root 密码为空</strong></p>`,72);function l(g,p){return n(),e("div",null,[h,r,c,s(" ## 上电启动系统 "),d])}const D=t(i,[["render",l],["__file","03-QuickStart.html.vue"]]);export{D as default};
