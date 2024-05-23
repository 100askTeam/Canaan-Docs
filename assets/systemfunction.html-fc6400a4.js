import{_ as o,r as n,o as c,c as l,a as r,b as e,d as t,w as s,e as i}from"./app-93907a86.js";const d={},h=i('<h1 id="linux组成" tabindex="-1"><a class="header-anchor" href="#linux组成" aria-hidden="true">#</a> Linux组成</h1><h3 id="嵌入式开发流程简述" tabindex="-1"><a class="header-anchor" href="#嵌入式开发流程简述" aria-hidden="true">#</a> 嵌入式开发流程简述</h3><p>在进入嵌入式Linux开发之前，我们需要先了解一下嵌入式系统的开发框架以及流程，如下图所示，左侧为我们常用的PC电脑主机，右侧为嵌入式系统，因为嵌入式芯片的性能内存存储条件等原因 无法直接在嵌入式芯片上进行程序开发，此时我们就需要借助性能强大的PC主机，一般为X86电脑，通过交叉编译的方式生产 嵌入式芯片可以运行的程序，在这里，我们一般叫PC主机为Host端，对于我们的嵌入式开发板，我们一般成为Target端。我们需要在Host端使用针对于Target端芯片架构生成的工具链进行交叉编译，最后将输出的可执行文件存放至Target(目标开发板)内运行。 <img src="https://cdn.staticaly.com/gh/DongshanPI/LinuxCodeLibrary-Photos@master/eLinuxHostAndTarget.jpg" alt="eLinuxHostAndTarget"></p><p>通过上图可以看出，实际的嵌入式开发是通过两部分组成的，那么对于嵌入式Linux设备开发也是如此。通过Host端的交叉编译工具链编译 Target(目标开发板)的程序，然后放在Target开发板上运行。 <img src="https://cdn.staticaly.com/gh/DongshanPI/LinuxCodeLibrary-Photos@master/cross-gcc-sandwich.png" alt="cross-gcc-sandwich"></p><p>既然Target(目标开发板)上运行的程序是通过Host(PC主机)端交叉编译工具链生成，那么交叉编译工具链又是从哪里而来？这里就涉及到了一个BuildSystem(构建系统)的概念，所有的程序都不可能是直接凭空出现，而是通过编程开发，最后再编译得出。下面这张图演示了，交叉编译工具链的生成以及如何使用交叉编译工具链编译生成一个可以在Target(目标开发板)上运行的c++程序。这里主要告诉大家，所有的程序都是从源码编译得出，不管是交叉编译工具链还是 Target上运行的程序。 <img src="https://cdn.staticaly.com/gh/DongshanPI/LinuxCodeLibrary-Photos@master/gcc-cross-compiler.png" alt="gcc-cross-compiler"></p><ul><li>如果看了上述的介绍还是不太理解 嵌入式的开发流程框架可以看我们之前专门录制的一套基于buildroot开发的嵌入式基础知识科普类视频教程。</li></ul>',6),p=r("iframe",{width:"800px",height:"600px",src:"//player.bilibili.com/player.html?aid=897646032&bvid=BV1VN4y137Tf&cid=753046575&page=9",scrolling:"no",border:"0",frameborder:"no",framespacing:"0",allowfullscreen:"true"}," ",-1),u=r("h3",{id:"代码库使用步骤",tabindex:"-1"},[r("a",{class:"header-anchor",href:"#代码库使用步骤","aria-hidden":"true"},"#"),e(" 代码库使用步骤")],-1),m=i(`<div class="language-mermaid line-numbers-mode" data-ext="mermaid"><pre class="language-mermaid"><code><span class="token keyword">graph</span> LR
A<span class="token text string">[0.准备硬件]</span><span class="token arrow operator">--&gt;</span>B<span class="token text string">[1.获取Ubuntu虚拟机系统]</span><span class="token arrow operator">--&gt;</span>2.配置Host开发环境<span class="token arrow operator">--&gt;</span>3.获取Target工程示例<span class="token arrow operator">--&gt;</span>4.Host端编译开发<span class="token arrow operator">--&gt;</span>5.上传至Target开发板运行
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="如何参与编辑" tabindex="-1"><a class="header-anchor" href="#如何参与编辑" aria-hidden="true">#</a> 如何参与编辑？</h2><ul><li>我们所有的文档使用makrdown进行编写，存放在github仓库https://github.com/100askTeam/LinuxCodeLibrary 内，可以直接点击每个页面右上角的 🖊 箭头直接编辑修改。</li><li>对于代码示例等工程，全部都根据不同的使用场景存放在不同的git仓库内。</li></ul><ol><li>Linux基础：https://github.com/100askTeam/Stage1-Applications</li><li>组件：https://github.com/100askTeam/Stage2-Components</li><li>驱动：https://github.com/100askTeam/Stage3-DeviceDriver</li><li>系统：https://github.com/100askTeam/Stage4-System</li></ol><blockquote><p>愿景：我们正在不断地支持更多的硬件模块，代码示例，加入到这个站点内，如果您感兴趣，欢迎加入。</p></blockquote><ul><li>讨论交流：https://forums.100ask.net/c/elinuxdev/23</li></ul><h2 id="您将获得什么" tabindex="-1"><a class="header-anchor" href="#您将获得什么" aria-hidden="true">#</a> 您将获得什么？</h2><p>快速实现您需要实现的功能，我们提供专门的开发板硬件，配套的模块硬件，设备驱动 系统源码SDK工程源码，常用组件开发示例，以及LinuxC基础，让大家可以在最短的时间内实现自己需要的功能。</p><h2 id="关于开源协议" tabindex="-1"><a class="header-anchor" href="#关于开源协议" aria-hidden="true">#</a> 关于开源协议</h2><p>此页面使用了开源的Mkdoc文档框架，文档站点托管在GitHub上，每个页面都会有编辑按钮，大家可以一起参与编辑或者提问改进此文档。</p><ul><li>图片引用: https://preshing.com/20141119/how-to-build-a-gcc-cross-compiler/</li></ul>`,11);function g(x,b){const a=n("RouterLink");return c(),l("div",null,[h,p,u,r("p",null,[e("!!! note 详细的各个部分开发步骤请查看 左侧导航 "),t(a,{to:"/01-LinuxCprogrammers/"},{default:s(()=>[e("LinuxC基础")]),_:1}),e(),t(a,{to:"/02-Components/"},{default:s(()=>[e("Linux组件开发")]),_:1}),e(),t(a,{to:"/03-DeviceDriver/"},{default:s(()=>[e("Linux设备驱动开发")]),_:1}),e(),t(a,{to:"/en/System/04-System/"},{default:s(()=>[e("Linux系统开发")]),_:1}),e(" 页面，在页面内会有详细的各部分开发流程介绍。")]),m])}const f=o(d,[["render",g],["__file","systemfunction.html.vue"]]);export{f as default};
