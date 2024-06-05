import{_ as d,r as t,o as c,c as o,a as e,b as s,d as a,e as i}from"./app-e64799d6.js";const r={},l=i('<h1 id="使用ssh传输文件" tabindex="-1"><a class="header-anchor" href="#使用ssh传输文件" aria-hidden="true">#</a> 使用ssh传输文件</h1><p><strong>PC主机端要求：</strong></p><ul><li>显卡，显存4GB以上（无显卡，纯CPU训练较慢）</li><li>内存4GB以上</li><li>硬盘10GB以上（建议100GB以上）</li><li>系统：Windows10/11系统</li></ul><p><strong>开发板端侧硬件要求：</strong></p><ul><li>DongshanPI-Vision开发板（搭载嘉楠K510芯片）</li><li>Type-C数据线 x2 /电池供电</li></ul><p><strong>软件要求：</strong></p>',6),p={href:"https://mobaxterm.mobatek.net/",target:"_blank",rel:"noopener noreferrer"},h=e("p",null,"开始前请确认以下两点：",-1),u=e("code",null,"/etc/",-1),m=e("code",null,"ssh",-1),v={href:"https://dongshanpi.cowtransfer.com/s/5eebd3648bdd48",target:"_blank",rel:"noopener noreferrer"},g={href:"https://canaan-docs.100ask.net/Basic/DongshanPI-Vision/03-BoardNetwork.html",target:"_blank",rel:"noopener noreferrer"},b=e("h2",{id:"_1-修改ssh配置文件",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-修改ssh配置文件","aria-hidden":"true"},"#"),s(" 1.修改ssh配置文件")],-1),x={href:"https://canaan-docs.100ask.net/Basic/DongshanPI-Vision/02-QuickStart.html",target:"_blank",rel:"noopener noreferrer"},_=i(`<p>​ 使用Mobaxterm终端工具访问开发板的串口控制台，等待系统启动后，进入<code>/etc/ssh</code>目录下</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@canaan ~ ]$ cd /etc/ssh/
[root@canaan /etc/ssh ]$ ls
moduli       ssh_config   sshd_config
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>进入ssh目录可以看到有三个文件，您需要修改<code>sshd_config</code>，使用vi命令进行修改</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@canaan /etc/ssh ]$ vi sshd_config
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>输入后，进入vi编辑器，修改下图中红框处的两项。</p><p><img src="http://photos.100ask.net/canaan-docs/image-20230803091725219.png" alt="image-20230803091725219"></p><p>将红框处两项取消注释，并将参数设置为<code>yes</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>PermitRootLogin yes
PermitEmptyPasswords yes
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>修改完成后如下所示：</p><p><img src="http://photos.100ask.net/canaan-docs/image-20230803092024236.png" alt="image-20230803092024236"></p><p>如果需要增加文件传输功能还需修改<code>SFTP</code>,将原来的</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Subsystem      sftp    /usr/libexec/openssh/sftp-server
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>修改为：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Subsystem       sftp    internal-sftp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>修改完成后，按下<code>esc</code>，输入<code>:wq</code>，保存并退出编辑器。</p><p>​ 在串口终端输入<code>sync</code>,同步文件后重启开发板</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@canaan /etc/ssh ]$ sync
[root@canaan /etc/ssh ]$ reboot
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-启动ssh" tabindex="-1"><a class="header-anchor" href="#_2-启动ssh" aria-hidden="true">#</a> 2.启动ssh</h2><p>​ 当您重启开发板后，需要手动重启ssh，在终端输入<code>/etc/init.d/S50sshd restart</code>。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@canaan ~ ]$ /etc/init.d/S50sshd restart
Stopping sshd: killall: sshd: no process killed
OK
Starting sshd: OK
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输入完成后，ssh会重新启动。</p><h2 id="_3-连接ssh" tabindex="-1"><a class="header-anchor" href="#_3-连接ssh" aria-hidden="true">#</a> 3.连接ssh</h2><blockquote><p>开始前请注意：</p><ul><li>您的PC电脑需要和开发板连接<strong>同一个WIFI</strong>。</li></ul></blockquote><p>​ 在开发板串口终端输入<code>udhcpc -i wlan0</code>，获取您的开发板连接WIFI的IP地址</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@canaan ~ ]$ udhcpc -i wlan0
udhcpc: started, v1.31.1
udhcpc: sending discover
udhcpc: sending select for 192.168.0.154
udhcpc: lease of 192.168.0.154 obtained, lease time 122
deleting routers
adding dns 192.168.0.1
adding dns 192.168.0.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>获取完成后，输入<code>ifconfig wlan0</code> ，查看开发板所连接WIFI的IP地址</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@canaan ~ ]$ ifconfig wlan0
wlan0     Link encap:Ethernet  HWaddr 8C:F7:10:47:9B:6E
          inet addr:192.168.0.154  Bcast:192.168.0.255  Mask:255.255.255.0
          inet6 addr: fe80::8ef7:10ff:fe47:9b6e/64 Scope:Link
          UP BROADCAST RUNNING MULTICAST  MTU:1500  Metric:1
          RX packets:438 errors:0 dropped:2 overruns:0 frame:0
          TX packets:21 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:1000
          RX bytes:34571 (33.7 KiB)  TX bytes:2446 (2.3 KiB)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到wlan0选项中的IP地址为：192.168.0.154</p><p>使用MobaXterm终端工具，点击会话<code>Session</code>，如下图中红框所示</p><p><img src="http://photos.100ask.net/canaan-docs/image-20230803093352909.png" alt="image-20230803093352909"></p><p>点击完成后会弹出以下界面，点击使用<code>SSH</code>，如下图红框所示：</p><p><img src="http://photos.100ask.net/canaan-docs/image-20230803093503585.png" alt="image-20230803093503585"></p><p>进入<code>ssh</code>配置界面后，远程主机<code>Remote host</code>的框输入开发板的IP地址，勾选指定用户名<code>Specify username</code>前的框，在后面填写开发板的用户名<code>root</code>，填写完成后，点击OK即可。如下图所示</p><p><img src="http://photos.100ask.net/canaan-docs/image-20230803100558415.png" alt="image-20230803100558415"></p><p>点击完成后就会打开一个新的终端，如下图所示：</p><p><img src="http://photos.100ask.net/canaan-docs/image-20230803101119979.png" alt="image-20230803101119979"></p><h2 id="_4-传输文件" tabindex="-1"><a class="header-anchor" href="#_4-传输文件" aria-hidden="true">#</a> 4.传输文件</h2><p>您可以看到这里也可以访问开发的串口终端。您可以看到左边选项卡中的开发板对应的文件系统，例如<code>data/emmc</code>，您在选项卡中可以对文件夹中内容进行下载或者上传。如下图所示，这里我进入<code>/root/emmc/p3/app/ai/exe/</code>目录中，选择<code>face_detect</code>文件，单击右键后弹出选项栏，选择Download即可开始下载该文件。</p><p><img src="http://photos.100ask.net/canaan-docs/image-20230803101546390.png" alt="image-20230803101546390"></p><p>如果您想上传文件到当前目录，在左侧选项卡的空白处，点击右键，选择<code>Upload to current folder</code>上传到当前文件夹即可。</p><p><img src="http://photos.100ask.net/canaan-docs/image-20230803101745265.png" alt="image-20230803101745265"></p>`,41);function f(k,S){const n=t("ExternalLinkIcon");return c(),o("div",null,[l,e("ul",null,[e("li",null,[s("MobaXterm终端工具："),e("a",p,[s("https://mobaxterm.mobatek.net/"),a(n)])])]),h,e("ul",null,[e("li",null,[e("p",null,[s("您的开发板中烧写的系统中支持ssh，可以查看"),u,s("目录下是否存在"),m,s("文件夹，如果不存在请重新获取镜像烧写，镜像地址为："),e("a",v,[s("DongshanPI-Vision-emmc-image-v1.0"),a(n)])])]),e("li",null,[e("p",null,[s("您的开发板已经安装"),e("a",g,[s("《开发板配网》"),a(n)]),s("中成功连接互联网。")])])]),b,e("p",null,[s("​ 启动前请先按"),e("a",x,[s("《快速启动》"),a(n)]),s("中将拨码开关拨至EMMC启动，使用两条Type-C数据线连接开发板端和电脑端的USB3.0口后，可看到开发板端正常启动。")]),_])}const B=d(r,[["render",f],["__file","05-SSHTransferFiles.html.vue"]]);export{B as default};