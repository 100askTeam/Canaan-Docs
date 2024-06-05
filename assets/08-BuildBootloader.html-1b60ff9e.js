import{_ as a,o as e,c as o,e as d}from"./app-e64799d6.js";const t={},r=d(`<h1 id="使用buildroot-sdk编译构建bootloader" tabindex="-1"><a class="header-anchor" href="#使用buildroot-sdk编译构建bootloader" aria-hidden="true">#</a> 使用buildroot-SDK编译构建Bootloader</h1><ul><li>东山哪吒STU开发板，Bootloader由4部分组成， 第一部分是 boot0 阶段，用于初始化CPU DDR UART 时钟等一些必要外设和引脚分配，之后进入第二部分，第二部分是 uboot board.dtb 这三部分组成，为一个 boot_package.fex 文件。</li><li>所以Bootloader的整体的启动流程是，boot0--&gt;u-boot--&gt;board.dtb</li></ul><h2 id="单独编译打包第一部分" tabindex="-1"><a class="header-anchor" href="#单独编译打包第一部分" aria-hidden="true">#</a> 单独编译打包第一部分</h2><h2 id="单独编译打包第二部分" tabindex="-1"><a class="header-anchor" href="#单独编译打包第二部分" aria-hidden="true">#</a> 单独编译打包第二部分</h2><h3 id="单独编译-uboot" tabindex="-1"><a class="header-anchor" href="#单独编译-uboot" aria-hidden="true">#</a> 单独编译 uboot</h3><ul><li>单独编译 uboot阶段</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>book@virtual-machine:~/Neza-D1/buildroot-2021$  <span class="token function">make</span> uboot-rebuild <span class="token assign-left variable">V</span><span class="token operator">=</span><span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="单独编译-board-dtb" tabindex="-1"><a class="header-anchor" href="#单独编译-board-dtb" aria-hidden="true">#</a> 单独编译 board.dtb</h3>`,8),i=[r];function s(n,l){return e(),o("div",null,i)}const c=a(t,[["render",s],["__file","08-BuildBootloader.html.vue"]]);export{c as default};
