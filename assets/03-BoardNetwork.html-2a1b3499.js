import{_ as e,o as i,c as a,e as n}from"./app-e64799d6.js";const d={},s=n(`<h1 id="开发板配网" tabindex="-1"><a class="header-anchor" href="#开发板配网" aria-hidden="true">#</a> 开发板配网</h1><p>硬件要求：</p><ul><li>DongshanPI-Vision开发板</li><li>天线 x1</li><li>Type-C数据线 x2</li></ul><h2 id="_1-联网" tabindex="-1"><a class="header-anchor" href="#_1-联网" aria-hidden="true">#</a> 1.联网</h2><h3 id="_1-1-结束开启联网脚本" tabindex="-1"><a class="header-anchor" href="#_1-1-结束开启联网脚本" aria-hidden="true">#</a> 1.1 结束开启联网脚本</h3><p>安装启动开发板完成后，打开串口终端进入开发板控制台。由于开发板启动后会启动联网脚本，我们第一次配网时需要手动结束联网脚本。输入<code>ps</code>，查看进程，找到下面所示的两个进程。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>  159 root      0:00 wpa_supplicant -D nl80211 -i wlan0 -c /etc/wpa_supplicant.
  178 root      0:00 udhcpc -R -n -p /var/run/udhcpc.eth0.pid -i eth0 -b
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="http://photos.100ask.net/canaan-docs/image-20230721195320635.png" alt="image-20230721195320635"></p><p>通过上述信息可以发现，我们需要手动结束159和178这两个进程，您的进程号可能和我不一致，按您开发板上世纪的进程操作。输入：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>kill -9 &lt;PID&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>假设我使用的开发板中<code>wpa_supplicant</code>和<code>udhcpc</code>进程号分别为159和178，此时我应该输入以下命令</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>kill -9 159
kill -9 178
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="http://photos.100ask.net/canaan-docs/image-20230721195657654.png" alt="image-20230721195657654"></p><p>手动结束后使用<code>ps</code>查看是否还存在对应进程。</p><h3 id="_1-2-填写wifi信息" tabindex="-1"><a class="header-anchor" href="#_1-2-填写wifi信息" aria-hidden="true">#</a> 1.2 填写WIFI信息</h3><p>修改<code>/etc/wpa_supplicant.conf</code>文件，填写wifi名称和密码，输入</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>vi /etc/wpa_supplicant.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>进入<code>vi</code>编辑器后会显示以下信息</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ctrl_interface=/var/run/wpa_supplicant
update_config=1
ap_scan=1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在文件末尾增加网络信息</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>network={
               ssid=&quot;&lt;wifi名称&gt;&quot;
               psk=&quot;&lt;密码&gt;&quot;
        }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>假设我的WiFi名称为Programmers，密码为123456，则实际添加的网络信息为：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>network={
               ssid=&quot;Programmers&quot;
               psk=&quot;12345678&quot;
        }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>添加完成后保存并退出vi编辑器。</p><h3 id="_1-3-连接wifi" tabindex="-1"><a class="header-anchor" href="#_1-3-连接wifi" aria-hidden="true">#</a> 1.3 连接WiFi</h3><p>连接到 SSID，输入：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>wpa_supplicant -B -iwlan0 -c /etc/wpa_supplicant.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>执行完成后，如下所示</p><p><img src="http://photos.100ask.net/canaan-docs/image-20230721200931193.png" alt="image-20230721200931193"></p><p>获取ip地址，输入：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>udhcpc -i  wlan0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>获取完成后即为成功连接互联网。</p><h3 id="_1-4-开机自动获得wifi-ip地址" tabindex="-1"><a class="header-anchor" href="#_1-4-开机自动获得wifi-ip地址" aria-hidden="true">#</a> 1.4 开机自动获得WiFi IP地址</h3><p>使用vi修改/etc/init.d/rc.sysinit文件，在文件中添加udhcpc -i wlan0一句。这样每次启动开发板都会自动获取WiFi路由器分配的IP地址。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ifconfig wlan0 up
if [ $? -eq 0 ];then
        if [ -f /first_run_flag_file ];then
                echo &quot;ctrl_interface=/var/run/wpa_supplicant&quot; &gt; /etc/wpa_supplicant.conf
                echo &quot;update_config=1&quot; &gt;&gt; /etc/wpa_supplicant.conf
                echo &quot;ap_scan=1&quot; &gt;&gt; /etc/wpa_supplicant.conf
        fi

        wpa_supplicant -D nl80211 -i wlan0 -c /etc/wpa_supplicant.conf -B
        udhcpc -i  wlan0
fi
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-测试网络" tabindex="-1"><a class="header-anchor" href="#_2-测试网络" aria-hidden="true">#</a> 2.测试网络</h2><p>测试WiFi是否可以访问互联网，输入<code>ping www.baidu.com</code>，输入后如下所示：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@canaan ~ ]$ ping www.baidu.com
PING www.baidu.com (14.119.104.189): 56 data bytes
64 bytes from 14.119.104.189: seq=0 ttl=55 time=10.241 ms
64 bytes from 14.119.104.189: seq=1 ttl=55 time=16.292 ms
64 bytes from 14.119.104.189: seq=2 ttl=55 time=15.699 ms
64 bytes from 14.119.104.189: seq=3 ttl=55 time=12.508 ms
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在后续启动开发板中，开发板会自动连接到SSID，您只需要输入<code>udhcpc -i wlan0</code>重新获取ip地址即可访问互联网。</p>`,39),t=[s];function l(c,r){return i(),a("div",null,t)}const p=e(d,[["render",l],["__file","03-BoardNetwork.html.vue"]]);export{p as default};
