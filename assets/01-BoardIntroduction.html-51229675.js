import{_ as t,o as d,c as r,e}from"./app-93907a86.js";const a={},i=e('<h1 id="开发板硬件简述" tabindex="-1"><a class="header-anchor" href="#开发板硬件简述" aria-hidden="true">#</a> 开发板硬件简述</h1><ul><li>此开发板的任何问题都可以在我们的论坛交流讨论 https://forums.100ask.net/c/aw/15</li></ul><h2 id="开发板硬件简述-简单开箱视频" tabindex="-1"><a class="header-anchor" href="#开发板硬件简述-简单开箱视频" aria-hidden="true">#</a> 开发板硬件简述（简单开箱视频）</h2><h3 id="核心板资源介绍" tabindex="-1"><a class="header-anchor" href="#核心板资源介绍" aria-hidden="true">#</a> 核心板资源介绍</h3><p>100ASK-T113_Pro开发板是基于全志T113-S3芯片设计，最大化的复用了引脚IO，并重新适用社区版Buildroot适配了系统，做到高可移植性以及简单轻量化。开发板形态：我们的这款开发板分为核心板与底板组合的形式发布，可以单独购买核心板，主要用于量产，核心板讲所有主芯片未使用到的引脚引出，很方便去扩展底板功能等。</p><p><img src="http://photos.100ask.net/allwinner-docs/t113-s3/basic/T113-Core-1676452405958-2.png" alt="T113-Core"></p><p>如上图所示，核心板内包含T113-S3主芯片,电源电路，以及板载Flash。同时也可以看到下图T113-S3芯片的规格与详细配置，T113-S3 是一款专为汽车和工业控制设计的高级应用处理器市场。 它集成了双核 CortexTM-A7 CPU 和单核 HiFi4 DSP 以提供高效的计算能力。 T113-S3 支持全格式解码，例如 H.265、H.264、MPEG-1/2/4、JPEG、VC1 等。 独立的硬件编码器可以编码为 JPEG 或MJPEG。 集成的多 ADC/DAC 和 I2S/PCM/DMIC/OWA 音频接口可以提供完善的语音交互解决方案。 T113-S3 具有广泛的连接性，以方便产品扩展，如USB、SDIO、EMAC、TWI、UART、SPI、PWM、GPADC、IR TX&amp;RX等。更详细的规格参数可以查看 <code>t113-s3_brief.pdf</code></p><p><img src="http://photos.100ask.net/allwinner-docs/t113-s3/basic/image-20230215171403609.png" alt="image-20230215171403609"></p><h3 id="全功能底板资源介绍" tabindex="-1"><a class="header-anchor" href="#全功能底板资源介绍" aria-hidden="true">#</a> 全功能底板资源介绍</h3><p>配套的全功能底板，也叫做Pro开发板，功能非常丰富，有网口，WiFi蓝牙，TF卡接口，OTG接口，串口，USB接口，DVP摄像头接口，音频录音接口，音频输出接口，USB PCI-E 4G接口，以及RGB888显示等接口使用。我们将芯片所有的IO引脚 全都引出，可以最大程度去评估学习使用这款芯片，不管是用于产品预研评估，还是学习入门嵌入式Linux开发，这款板子都非常适合。</p><p><img src="http://photos.100ask.net/allwinner-docs/t113-s3/basic/image-20230215171656088.png" alt="image-20230215171656088"></p><table><thead><tr><th>序号</th><th>板载资源</th><th>序号</th><th>板载资源</th></tr></thead><tbody><tr><td>1</td><td>RESET复位按键，主要用于复位系统使用。</td><td>17</td><td>LINE接口,用于音频阵列输入</td></tr><tr><td>2</td><td>用户按键，可自定义功能。</td><td>18</td><td>RGB LCD接口，用于驱动显示RGB屏幕。</td></tr><tr><td>3</td><td>TF卡卡槽，用于读取TF卡并支TF卡启动系统。</td><td>19</td><td>E-INK水墨屏接口，用于驱动类SPI水墨屏。</td></tr><tr><td>4</td><td>XR829无线模组配套的ANT天线接受-.</td><td>20</td><td>DVP摄像头电压选择</td></tr><tr><td>5</td><td>Debug接口,用于串口输出，显示系统信息,调试登录等。</td><td>21</td><td>DVP摄像头专用接口.</td></tr><tr><td>6</td><td>OTG接口，主要用于烧写SPI-NAND系统使用,也可用于ADB调试。</td><td>22</td><td>DVP摄像头电压选择</td></tr><tr><td>7</td><td>电源供电切换开关，用于切换供电方式是OTG口还是DC电源口。</td><td>23</td><td>DVP摄像头电压选择</td></tr><tr><td>8</td><td>DC接口，用于接入专用电源适配器给开发板独立供电。</td><td>24</td><td>RJ45网线接口，用于连接有线网络</td></tr><tr><td>9</td><td>eSIM卡接口，手机卡接口，用于4G模块拨号上网使用。</td><td>25</td><td>RESET复位按键，主要用于复位系统使用。</td></tr><tr><td>10</td><td>TYPE-AUSB2.0接口，用于连接常见USB设备。</td><td>26</td><td>网卡与摄像头功能选择排针，根据排针连接方向选择合适的复用方式。</td></tr><tr><td>11</td><td>TYPE-AUSB2.0接口，用于连接常见USB设备。</td><td>27</td><td>RTL8201F网卡PHY芯片，用于有线上网。</td></tr><tr><td>12</td><td>TYPE-AUSB2.0接口，用于连接常见USB设备。</td><td>28</td><td>SPI-NAND FLASH,用于存储系统,系统支持SPI NAND启动。</td></tr><tr><td>13</td><td>TV IN/OUT接口，用于连接老式AV电视机输出。</td><td>29</td><td>XR829模组,用于wiFi Bluetooth无线通信支持。</td></tr><tr><td>14</td><td>多余排针信号引出有一路 2C信号及4路ADC信号。</td><td>30</td><td>USB HUB芯片，用于扩展多路USB接口。</td></tr><tr><td>15</td><td>3.5MM耳机接口，用于播放声音</td><td>31</td><td>USB串口芯片，用于支持TL转USB信号输出。</td></tr><tr><td>16</td><td>MIC咪头，专用于用于录音.</td><td>32</td><td>USB PCI-E接口，专用于4G模组连接使用。</td></tr></tbody></table>',12),o=[i];function h(s,n){return d(),r("div",null,o)}const S=t(a,[["render",h],["__file","01-BoardIntroduction.html.vue"]]);export{S as default};