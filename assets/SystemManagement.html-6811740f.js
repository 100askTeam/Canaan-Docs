import{_ as n,o as a,c as s,e}from"./app-93907a86.js";const t={},o=e(`<h1 id="系统管理" tabindex="-1"><a class="header-anchor" href="#系统管理" aria-hidden="true">#</a> 系统管理</h1><h2 id="apt命令" tabindex="-1"><a class="header-anchor" href="#apt命令" aria-hidden="true">#</a> apt命令</h2><blockquote><p>附加工具 使用 aptitude 图形化的软件包管理器。</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>ubuntu@book:~<span class="token punctuation">]</span>$ <span class="token function">sudo</span> <span class="token function">apt</span> update	//更新软件源包列表为最新状态
<span class="token punctuation">[</span>ubuntu@book:~<span class="token punctuation">]</span>$ <span class="token function">sudo</span> <span class="token function">apt</span> upgrade   //更新所有的包为最新状态
<span class="token punctuation">[</span>ubuntu@book:~<span class="token punctuation">]</span>$ <span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> <span class="token operator">&lt;</span>pkg<span class="token operator">&gt;</span>  //安装一个软件包，也可以是多个。
<span class="token punctuation">[</span>ubuntu@book:~<span class="token punctuation">]</span>$ <span class="token function">sudo</span> <span class="token function">apt</span> reinstall <span class="token operator">&lt;</span>pkg<span class="token operator">&gt;</span>  //重新安装一个软件包。
<span class="token punctuation">[</span>ubuntu@book:~<span class="token punctuation">]</span>$ <span class="token function">sudo</span> <span class="token function">apt</span> remove <span class="token operator">&lt;</span>pkg<span class="token operator">&gt;</span>   //移除一个软件包
<span class="token punctuation">[</span>ubuntu@book:~<span class="token punctuation">]</span>$ <span class="token function">sudo</span> <span class="token function">apt-cache</span> search <span class="token operator">&lt;</span>string<span class="token operator">&gt;</span> //apt源中搜索一个软件包
<span class="token punctuation">[</span>ubuntu@book:~<span class="token punctuation">]</span>$ <span class="token function">sudo</span> <span class="token function">apt</span> list  //列出我们已经安装的软件包
<span class="token punctuation">[</span>ubuntu@book:~<span class="token punctuation">]</span>$ <span class="token function">sudo</span> <span class="token function">apt</span> show <span class="token operator">&lt;</span>pkg<span class="token operator">&gt;</span> //查看某个软件包的详细信息。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>aptitude 图形化包管理界面，具体使用方法可以使用鼠标以及页面提示进行操作。</li></ul><h2 id="dpkg-命令" tabindex="-1"><a class="header-anchor" href="#dpkg-命令" aria-hidden="true">#</a> dpkg 命令</h2><blockquote><p>离线安装deb包的命令。</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>ubuntu@book:~<span class="token punctuation">]</span>$ <span class="token function">sudo</span> dpkg <span class="token parameter variable">-i</span> <span class="token operator">&lt;</span>pkg.deb<span class="token operator">&gt;</span>  //手动安装已经下载好的软件包
<span class="token punctuation">[</span>ubuntu@book:~<span class="token punctuation">]</span>$ <span class="token function">sudo</span> dpkg <span class="token parameter variable">-r</span> <span class="token operator">&lt;</span>pkg<span class="token operator">&gt;</span> 		//手动移除已经下载好的软件包
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="snap命令" tabindex="-1"><a class="header-anchor" href="#snap命令" aria-hidden="true">#</a> snap命令</h2><blockquote><p>在线软件包管理命令</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>ubuntu@book:~<span class="token punctuation">]</span>$ <span class="token function">sudo</span> snap version //查看snap的版本状态
<span class="token punctuation">[</span>ubuntu@book:~<span class="token punctuation">]</span>$ <span class="token function">sudo</span> snap <span class="token function">find</span> <span class="token string">&quot;media player&quot;</span>  //搜索支持 media player的软件包
<span class="token punctuation">[</span>ubuntu@book:~<span class="token punctuation">]</span>$ <span class="token function">sudo</span> snap <span class="token function">install</span> vlc 		   //安装vlc软件
<span class="token punctuation">[</span>ubuntu@book:~<span class="token punctuation">]</span>$ <span class="token function">sudo</span> snap info vlc 			   //查看vlc软件的详细信息。
<span class="token punctuation">[</span>ubuntu@book:~<span class="token punctuation">]</span>$ <span class="token function">sudo</span> snap <span class="token function">install</span> <span class="token parameter variable">--channel</span><span class="token operator">=</span>edeg vlc  //安装测试版的vlc
<span class="token punctuation">[</span>ubuntu@book:~<span class="token punctuation">]</span>$ <span class="token function">sudo</span> snap switch  <span class="token parameter variable">--channel</span><span class="token operator">=</span>stable vlc  //切换vlc软件包为稳定版。
<span class="token punctuation">[</span>ubuntu@book:~<span class="token punctuation">]</span>$ snap list 					//查看已经安装过的软件包状态
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="top命令" tabindex="-1"><a class="header-anchor" href="#top命令" aria-hidden="true">#</a> top命令</h2><blockquote><p>查看系统资源使用情况</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>ubuntu@book:~<span class="token punctuation">]</span>$ <span class="token function">top</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="htop命令" tabindex="-1"><a class="header-anchor" href="#htop命令" aria-hidden="true">#</a> htop命令</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>ubuntu@book:~<span class="token punctuation">]</span>$ <span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> <span class="token function">htop</span>
<span class="token punctuation">[</span>ubuntu@book:~<span class="token punctuation">]</span>$ <span class="token function">htop</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="uname-命令" tabindex="-1"><a class="header-anchor" href="#uname-命令" aria-hidden="true">#</a> uname 命令</h2><blockquote><p>显示系统信息</p></blockquote><h2 id="find命令" tabindex="-1"><a class="header-anchor" href="#find命令" aria-hidden="true">#</a> find命令</h2><blockquote><p>用于查找和搜索文件&amp;目录。</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>ubuntu@book:~<span class="token punctuation">]</span>$ <span class="token function">find</span>  <span class="token parameter variable">-name</span> <span class="token operator">&lt;</span>file<span class="token operator">&gt;</span> 			 //在当前路径下搜索名为 file所有文件。
<span class="token punctuation">[</span>ubuntu@book:~<span class="token punctuation">]</span>$ <span class="token function">find</span> ~/Desktop <span class="token parameter variable">-name</span> test.txt //在Desktop目录下搜索 test.txt文件
<span class="token punctuation">[</span>ubuntu@book:~<span class="token punctuation">]</span>$ <span class="token function">find</span> ~/Desktop <span class="token parameter variable">-name</span> <span class="token string">&quot;*.txt&quot;</span> //在Desktop目录下搜索所有的后缀是 .txt文件.
<span class="token punctuation">[</span>ubuntu@book:~<span class="token punctuation">]</span>$ <span class="token function">find</span> <span class="token builtin class-name">.</span> 					 //显示当前目录下所有的文件及目录。
<span class="token punctuation">[</span>ubuntu@book:~<span class="token punctuation">]</span>$ <span class="token function">find</span>  ~ <span class="token parameter variable">-print</span> <span class="token operator">&gt;</span> home.txt   //将~目录下的所有的文件文件夹列表重定向至 home.txt
<span class="token punctuation">[</span>ubuntu@book:~<span class="token punctuation">]</span>$ <span class="token function">find</span> /usr/bin/ <span class="token parameter variable">-size</span>  +1M 	 //列出/usr/bin/目录下所有大于1M的文件。
<span class="token punctuation">[</span>ubuntu@book:~<span class="token punctuation">]</span>$ <span class="token function">find</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">-type</span> f <span class="token parameter variable">-atime</span> +3    //列出当前路径下3天内被访问过的文件。
<span class="token punctuation">[</span>ubuntu@book:~<span class="token punctuation">]</span>$ <span class="token function">find</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">-type</span> f <span class="token parameter variable">-amin</span> +10    //列出当前路径下超过访问10分钟的文件。
<span class="token punctuation">[</span>ubuntu@book:~<span class="token punctuation">]</span>$ <span class="token function">find</span> ./ <span class="token operator">!</span> <span class="token parameter variable">-name</span> <span class="token string">&quot;*.txt&quot;</span>	 //列出当前路径下非后缀名为.txt的文件及文件夹。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="adduser命令" tabindex="-1"><a class="header-anchor" href="#adduser命令" aria-hidden="true">#</a> adduser命令</h2><blockquote><p>创建一个新的用户</p></blockquote><div class="language-bas line-numbers-mode" data-ext="bas"><pre class="language-bas"><code>[ubuntu@book:~]$ sudo adduer book  //新增一个名为book的用户
[ubuntu@book:~]$ su book			//切换到book用户，此时提示输入密码，需要输入book用户的密码。
[ubuntu@book:~]$ su ubuntu			//切换回ubuntu系统，输入ubuntu用户的密码。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="userdel命令" tabindex="-1"><a class="header-anchor" href="#userdel命令" aria-hidden="true">#</a> userdel命令</h2><blockquote><p>删除一个用户</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>ubuntu@book:~<span class="token punctuation">]</span>$ <span class="token function">sudo</span> <span class="token function">userdel</span> book 	//删除一个名为book的用户。
<span class="token punctuation">[</span>ubuntu@book:~<span class="token punctuation">]</span>$ <span class="token function">sudo</span> <span class="token function">userdel</span> <span class="token parameter variable">-rf</span>  book	//使用-rf删除book用的所有资源。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="passwd" tabindex="-1"><a class="header-anchor" href="#passwd" aria-hidden="true">#</a> passwd</h2><blockquote><p>设置用户密码</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>ubuntu@book:~<span class="token punctuation">]</span>$ <span class="token function">sudo</span> <span class="token function">passwd</span> ubuntu   //重新设置Ubuntu用户密码。
<span class="token punctuation">[</span>ubuntu@book:~<span class="token punctuation">]</span>$ <span class="token function">sudo</span> <span class="token function">passwd</span> 		   //重新设置root用户密码。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="exit命令" tabindex="-1"><a class="header-anchor" href="#exit命令" aria-hidden="true">#</a> exit命令</h2><blockquote><p>退出当前打开的shell</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>ubuntu@book:~<span class="token punctuation">]</span>$ <span class="token builtin class-name">exit</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="reboot" tabindex="-1"><a class="header-anchor" href="#reboot" aria-hidden="true">#</a> reboot</h2><blockquote><p>用于重新启动计算机。</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>ubuntu@book:~<span class="token punctuation">]</span>$ <span class="token function">sudo</span> <span class="token function">reboot</span> 
<span class="token punctuation">[</span>ubuntu@book:~<span class="token punctuation">]</span>$ <span class="token function">sudo</span> <span class="token function">reboot</span> <span class="token parameter variable">-n</span>  //在重启之前不将数据缓存写入硬盘。
<span class="token punctuation">[</span>ubuntu@book:~<span class="token punctuation">]</span>$ <span class="token function">sudo</span> <span class="token function">reboot</span> <span class="token parameter variable">-f</span>	  //强制重启，类似于断电。
<span class="token punctuation">[</span>ubuntu@book:~<span class="token punctuation">]</span>$ <span class="token function">sudo</span> <span class="token function">reboot</span> <span class="token parameter variable">-d</span>   //虽然重启，但是不写入系统log日志中。
<span class="token punctuation">[</span>ubuntu@book:~<span class="token punctuation">]</span>$ <span class="token function">sudo</span> <span class="token function">reboot</span> <span class="token parameter variable">-w</span>   //不重启，但是写入系统重启装操作log日志中。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="poweroff" tabindex="-1"><a class="header-anchor" href="#poweroff" aria-hidden="true">#</a> poweroff</h2><blockquote><p>用于关闭计算机。</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>ubuntu@book:~<span class="token punctuation">]</span>$ <span class="token function">sudo</span> poweroff 
<span class="token punctuation">[</span>ubuntu@book:~<span class="token punctuation">]</span>$ <span class="token function">sudo</span> poweroff <span class="token parameter variable">-n</span>  //在关机之前不将数据缓存写入硬盘。
<span class="token punctuation">[</span>ubuntu@book:~<span class="token punctuation">]</span>$ <span class="token function">sudo</span> poweroff <span class="token parameter variable">-f</span>	  //强制关机，类似于断电。
<span class="token punctuation">[</span>ubuntu@book:~<span class="token punctuation">]</span>$ <span class="token function">sudo</span> poweroff <span class="token parameter variable">-d</span>   //虽然关机，但是不写入系统log日志中。
<span class="token punctuation">[</span>ubuntu@book:~<span class="token punctuation">]</span>$ <span class="token function">sudo</span> poweroff <span class="token parameter variable">-w</span>   //不关机，但是写入系统关机装操作log日志中。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="shutdown" tabindex="-1"><a class="header-anchor" href="#shutdown" aria-hidden="true">#</a> shutdown</h2><blockquote><p>关机操作，在关机之前会将关机信息传递给所有正在执行的程序。</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>ubuntu@book:~<span class="token punctuation">]</span>$ <span class="token function">sudo</span> <span class="token function">shutdown</span> <span class="token parameter variable">-h</span> now //立即关机
<span class="token punctuation">[</span>ubuntu@book:~<span class="token punctuation">]</span>$ <span class="token function">sudo</span> <span class="token function">shutdown</span> <span class="token parameter variable">-t</span> <span class="token number">10</span>  //10秒后关机
<span class="token punctuation">[</span>ubuntu@book:~<span class="token punctuation">]</span>$ <span class="token function">sudo</span> <span class="token function">shutdown</span> <span class="token parameter variable">-r</span> now  //立即重启
<span class="token punctuation">[</span>ubuntu@book:~<span class="token punctuation">]</span>$ <span class="token function">sudo</span> <span class="token function">shutdown</span> <span class="token parameter variable">-h</span> <span class="token number">3</span>  	//3分钟后关机
<span class="token punctuation">[</span>ubuntu@book:~<span class="token punctuation">]</span>$ <span class="token function">sudo</span> <span class="token function">shutdown</span> <span class="token parameter variable">-c</span>   	//中断正在关机的动作
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="which命令" tabindex="-1"><a class="header-anchor" href="#which命令" aria-hidden="true">#</a> which命令</h2><blockquote><p>用于查找系统内文件所在位置</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>ubuntu@book:~<span class="token punctuation">]</span>$ <span class="token function">which</span> gdb  //查找gdb命令所在位置并显示出来。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="ps命令" tabindex="-1"><a class="header-anchor" href="#ps命令" aria-hidden="true">#</a> ps命令</h2><blockquote><p>显示当前系统正在运行进行的状态等信息。</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>ubuntu@book:~<span class="token punctuation">]</span>$ <span class="token function">ps</span> <span class="token parameter variable">-aux</span>  //查看详细的进程状态信息等。
<span class="token punctuation">[</span>ubuntu@book:~<span class="token punctuation">]</span>$ <span class="token function">ps</span> <span class="token parameter variable">-ef</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&quot;ssh&quot;</span> //查看完整的进行路径及PID等，配合着grep查找我们需要的进程信息。
<span class="token punctuation">[</span>ubuntu@book:~<span class="token punctuation">]</span>$ <span class="token function">ps</span> <span class="token parameter variable">-u</span> root  //查看root用户的进程信息。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="clear命令" tabindex="-1"><a class="header-anchor" href="#clear命令" aria-hidden="true">#</a> clear命令</h2><blockquote><p>用于清屏操作，主要清理终端字符串。</p></blockquote><div class="language-b line-numbers-mode" data-ext="b"><pre class="language-b"><code>[ubuntu@book:~]$ clear
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="su命令" tabindex="-1"><a class="header-anchor" href="#su命令" aria-hidden="true">#</a> su命令</h2><blockquote><p>用于切换用户身份，变更当前终端的用户。</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>ubuntu@book:~<span class="token punctuation">]</span>$ <span class="token function">su</span> root //切换到root用户，输入的是root用户名密码。
<span class="token punctuation">[</span>ubuntu@book:~<span class="token punctuation">]</span>$ <span class="token function">su</span> ubuntu //切换到ubuntu用户 输入的是Ubuntu用户密码。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="whoami命令" tabindex="-1"><a class="header-anchor" href="#whoami命令" aria-hidden="true">#</a> whoami命令</h2><blockquote><p>whoami命令用于显示自身用户的名称</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>ubuntu@book:~<span class="token punctuation">]</span>$ <span class="token function">whoami</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="who命令" tabindex="-1"><a class="header-anchor" href="#who命令" aria-hidden="true">#</a> who命令</h2><blockquote><p>用于显示当前系统中有那些登录用户，以及登录用户的详细信息。</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>ubuntu@book:~<span class="token punctuation">]</span>$ <span class="token function">who</span>  		//显示当前登录到该系统的所有用户
<span class="token punctuation">[</span>ubuntu@book:~<span class="token punctuation">]</span>$ <span class="token function">who</span>  <span class="token parameter variable">-H</span> 	//显示标题栏
<span class="token punctuation">[</span>ubuntu@book:~<span class="token punctuation">]</span>$ <span class="token function">who</span> <span class="token parameter variable">-T</span>  <span class="token parameter variable">-H</span> 	//显示登录终端属性
<span class="token punctuation">[</span>ubuntu@book:~<span class="token punctuation">]</span>$ <span class="token function">who</span> <span class="token parameter variable">-q</span>		//以精简模式显示登录的用户状态

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="date-命令" tabindex="-1"><a class="header-anchor" href="#date-命令" aria-hidden="true">#</a> date 命令</h2><blockquote><p>用于显示系统当前时间信息。</p></blockquote><div class="language-b line-numbers-mode" data-ext="b"><pre class="language-b"><code>[ubuntu@book:~]$ date
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="dmesg" tabindex="-1"><a class="header-anchor" href="#dmesg" aria-hidden="true">#</a> dmesg</h2><blockquote><p>用于查看kernel日志信息命令。</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>ubuntu@book:~<span class="token punctuation">]</span>$ <span class="token function">dmesg</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,66),p=[o];function u(c,i){return a(),s("div",null,p)}const d=n(t,[["render",u],["__file","SystemManagement.html.vue"]]);export{d as default};