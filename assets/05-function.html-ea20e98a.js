import{_ as a,o as n,c as e,e as s}from"./app-93907a86.js";const i={},l=s(`<h1 id="_5-makefile函数" tabindex="-1"><a class="header-anchor" href="#_5-makefile函数" aria-hidden="true">#</a> 5.Makefile函数</h1><p>Makefile 提供了大量的函数，函数调用的格式如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$(function arguments)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这里<code>function’是函数名，</code>arguments’是该函数的参数。参数和函数名之间是用空格或 Tab 隔开，如果有多个参数，它们之间用逗号隔开。这些空格和逗号不是参数值的一部分。 我们经常使用的函数主要有两个(wildcard，patsubst)，先把它们单独拎出来讲讲。创建一个文件夹 src，在里下面创建两个文件，100.c，ask.c。如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">.</span>
├── Makefile
└── src
	├── <span class="token number">100</span>.c
	└── ask.c
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-1常用函数" tabindex="-1"><a class="header-anchor" href="#_5-1常用函数" aria-hidden="true">#</a> 5.1常用函数</h2><blockquote><p><strong>wildcard 函数</strong></p></blockquote><p>用于查找指定目录下指定类型的文件，函数参数：目录+文件类型，如下：</p><div class="language-makefile line-numbers-mode" data-ext="makefile"><pre class="language-makefile"><code><span class="token variable">$</span><span class="token punctuation">(</span><span class="token function">wildcard</span> 指定文件类型<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>其中，指定文件类型，如果不写路径，则默认为当前目录查找，例子如下：</p><div class="language-makefile line-numbers-mode" data-ext="makefile"><pre class="language-makefile"><code>01 SRC <span class="token operator">=</span> <span class="token variable">$</span><span class="token punctuation">(</span><span class="token function">wildcard</span> ./src/*.c<span class="token punctuation">)</span>
02
<span class="token target symbol">03 print</span><span class="token punctuation">:</span>
04 	<span class="token operator">@</span>echo <span class="token variable">$</span><span class="token punctuation">(</span>SRC<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行命令 make，结果如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">make</span>
./src/ask.c ./src/100.c
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>其中，这条规则表示：找到目录./src 下所有后缀为.c 的文件，并赋值给变量SRC。命令执行完，SRC 变量的值：./src/ask.c ./src/100.c</p><blockquote><p><strong>patsubst 函数</strong></p></blockquote><p>用于匹配替换。函数参数：原模式+目标模式+文件列表，如下:</p><div class="language-makefile line-numbers-mode" data-ext="makefile"><pre class="language-makefile"><code><span class="token variable">$</span><span class="token punctuation">(</span> patsubst 原模式, 目标模式, 文件列表<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>其中，从文件列表中查找出符合原模式文件类型的文件，然后一一替换成目标模式。举例：将./src 目录下的.c 结尾的文件，替换成.o 文件，并赋值给 obj。 如下：</p><div class="language-makefile line-numbers-mode" data-ext="makefile"><pre class="language-makefile"><code>SRC <span class="token operator">=</span> <span class="token variable">$</span><span class="token punctuation">(</span><span class="token function">wildcard</span> ./src/*.c<span class="token punctuation">)</span>
OBJ <span class="token operator">=</span> <span class="token variable">$</span><span class="token punctuation">(</span><span class="token function">patsubst</span> %.c, %.o, <span class="token variable">$</span><span class="token punctuation">(</span>SRC<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token target symbol">print</span><span class="token punctuation">:</span>
	<span class="token operator">@</span>echo <span class="token variable">$</span><span class="token punctuation">(</span>OBJ<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行命令 make，结果如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ make
./src/ask.o ./src/100.o
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>其中，这条规则表示：把变量中所有后缀为.c 的文件替换为.o。 命令执行完，OBJ 变量的值：./src/ask.o ./src/100.o</p><h2 id="_5-2-字符串替换和分析函数" tabindex="-1"><a class="header-anchor" href="#_5-2-字符串替换和分析函数" aria-hidden="true">#</a> 5.2 字符串替换和分析函数</h2><blockquote><p><strong>$(subst from,to,text)</strong></p></blockquote><p>在文本<code>text’中使用</code>to’替换每一处\`from’。比如：</p><div class="language-makefile line-numbers-mode" data-ext="makefile"><pre class="language-makefile"><code><span class="token variable">$</span><span class="token punctuation">(</span><span class="token function">subst</span> ee,EE,feet on the street<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>结果为‘fEEt on the strEEt’。</p><blockquote><p><strong>$(patsubst pattern,replacement,text)</strong></p></blockquote><p>寻找<code>text’中符合格式</code>pattern’的字，用<code>replacement’替换它们。 </code>pattern’和\`replacement’中可以使用通配符。比如：</p><div class="language-makefile line-numbers-mode" data-ext="makefile"><pre class="language-makefile"><code><span class="token variable">$</span><span class="token punctuation">(</span><span class="token function">patsubst</span> %.c,%.o,x.c.c bar.c）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>结果为：\`x.c.o bar.o’。</p><p><strong>$(strip string)</strong> 去掉前导和结尾空格，并将中间的多个空格压缩为单个空格。比如：</p><div class="language-makefile line-numbers-mode" data-ext="makefile"><pre class="language-makefile"><code><span class="token variable">$</span><span class="token punctuation">(</span><span class="token function">strip</span> a b c <span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>结果为\`a b c’。</p><blockquote><p><strong>$(findstring find,in)</strong></p></blockquote><p>在字符串<code>in’中搜寻</code>find’，如果找到，则返回值是\`find’，否则返回值为空。比如：</p><div class="language-makefile line-numbers-mode" data-ext="makefile"><pre class="language-makefile"><code><span class="token variable">$</span><span class="token punctuation">(</span><span class="token function">findstring</span> a,a b c<span class="token punctuation">)</span>
<span class="token variable">$</span><span class="token punctuation">(</span><span class="token function">findstring</span> a,b c<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>将分别产生值<code>a’和</code>’(空字符串)。</p><blockquote><p><strong>$(filter pattern...,text)</strong></p></blockquote><p>返回在<code>text’中由空格隔开且匹配格式</code>pattern...’的字，去除不符合格式\`pattern...’的字。比如</p><div class="language-makefile line-numbers-mode" data-ext="makefile"><pre class="language-makefile"><code><span class="token variable">$</span><span class="token punctuation">(</span><span class="token function">filter</span> %.c %.s,foo.c bar.c baz.s ugh.h<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>结果为\`foo.c bar.c baz.s’。</p><blockquote><p><strong>$(filter-out pattern...,text)</strong></p></blockquote><p>返回在<code>text’中由空格隔开且不匹配格式</code>pattern...’的字，去除符合格式\`pattern...’的字。它是函数 filter 的反函数。比如：</p><div class="language-makefile line-numbers-mode" data-ext="makefile"><pre class="language-makefile"><code><span class="token variable">$</span><span class="token punctuation">(</span><span class="token function">filter</span> %.c %.s,foo.c bar.c baz.s ugh.h<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>结果为\`ugh.h’。</p><blockquote><p><strong>$(sort list)</strong></p></blockquote><p>将‘list’中的字按字母顺序排序，并去掉重复的字。输出由单个空格隔开的字的列表。比如：</p><div class="language-makefile line-numbers-mode" data-ext="makefile"><pre class="language-makefile"><code><span class="token variable">$</span><span class="token punctuation">(</span><span class="token function">sort</span> foo bar lose<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>返回值是‘bar foo lose’。</p><hr><h2 id="_5-3-文件名函数" tabindex="-1"><a class="header-anchor" href="#_5-3-文件名函数" aria-hidden="true">#</a> 5.3 文件名函数</h2><blockquote><p><strong>$(dir names...)</strong></p></blockquote><p>抽取‘names...’中每一个文件名的路径部分，文件名的路径部分包括从文件名的首字符到最后一个斜杠(含斜杠)之前的一切字符。比如：</p><div class="language-makefile line-numbers-mode" data-ext="makefile"><pre class="language-makefile"><code><span class="token variable">$</span><span class="token punctuation">(</span><span class="token function">dir</span> src/foo.c hacks<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>结果为‘src/ ./’。</p><blockquote><p><strong>$(notdir names...)</strong></p></blockquote><p>抽取‘names...’中每一个文件名中除路径部分外一切字符（真正的文件名）。比如：</p><div class="language-makefile line-numbers-mode" data-ext="makefile"><pre class="language-makefile"><code><span class="token variable">$</span><span class="token punctuation">(</span><span class="token function">notdir</span> src/foo.c hacks<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>结果为‘foo.c hacks’。</p><blockquote><p><strong>$(suffix names...)</strong></p></blockquote><p>抽取‘names...’中每一个文件名的后缀。比如：</p><div class="language-makefile line-numbers-mode" data-ext="makefile"><pre class="language-makefile"><code><span class="token variable">$</span><span class="token punctuation">(</span><span class="token function">suffix</span> src/foo.c src-1.0/bar.c hacks<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>结果为‘.c .c’。</p><blockquote><p><strong>$(basename names...)</strong></p></blockquote><p>抽取‘names...’中每一个文件名中除后缀外一切字符。比如：</p><div class="language-makefile line-numbers-mode" data-ext="makefile"><pre class="language-makefile"><code><span class="token variable">$</span><span class="token punctuation">(</span><span class="token function">basename</span> src/foo.c src-1.0/bar hacks<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>结果为‘src/foo src-1.0/bar hacks’。</p><blockquote><p><strong>$(addsuffix suffix,names...)</strong></p></blockquote><p>参数‘names...’是一系列的文件名，文件名之间用空格隔开；suffix 是一个后缀名。将 suffix(后缀)的值附加在每一个独立文件名的后面，完成后将文件名串联起来，它们之间用单个空格隔开。比如：</p><div class="language-makefile line-numbers-mode" data-ext="makefile"><pre class="language-makefile"><code><span class="token variable">$</span><span class="token punctuation">(</span><span class="token function">addsuffix</span> .c,foo bar<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>结果为‘foo.c bar.c’。</p><blockquote><p><strong>$(addprefix prefix,names...)</strong></p></blockquote><p>参数‘names’是一系列的文件名，文件名之间用空格隔开；prefix 是一个前缀名。将 preffix(前缀)的值附加在每一个独立文件名的前面，完成后将文件名串联起来，它们之间用单个空格隔开。比如：</p><div class="language-makefile line-numbers-mode" data-ext="makefile"><pre class="language-makefile"><code><span class="token variable">$</span><span class="token punctuation">(</span>addprefix src/,foo bar<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>结果为‘src/foo src/bar’。</p><blockquote><p><strong>$(wildcard pattern)</strong></p></blockquote><p>参数‘pattern’是一个文件名格式，包含有通配符(通配符和 shell 中的用法一样)。函数 wildcard 的结果是一列和格式匹配的且真实存在的文件的名称，文件名之间用一个空格隔开。 比如若当前目录下有文件 1.c、2.c、1.h、2.h，则:</p><div class="language-makefile line-numbers-mode" data-ext="makefile"><pre class="language-makefile"><code>c_src <span class="token operator">:=</span> <span class="token variable">$</span><span class="token punctuation">(</span><span class="token function">wildcard</span> *.c<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>结果为‘1.c 2.c’。</p><h2 id="_5-4-其他函数" tabindex="-1"><a class="header-anchor" href="#_5-4-其他函数" aria-hidden="true">#</a> 5.4 其他函数</h2><blockquote><p><strong>$(foreach var,list,text)</strong></p></blockquote><p>前两个参数，‘var’和‘list’将首先扩展，注意最后一个参数‘text’，此时不扩展；接着，‘list’扩展所得的每个字，都赋给‘var’变量；然后‘text’引用该变量进行扩展，因此‘text’每次扩展都不相同。 函数的结果是由空格隔开的‘text’ 在‘list’中多次扩展后，得到的新‘list’，就是说：‘text’多次扩展的字串联起来，字与字之间由空格隔开，如此就产生了函数 foreach 的返回值。 下面是一个简单的例子，将变量‘files’的值设置为 ‘dirs’中的所有目录下的所有文件的列表：</p><div class="language-makefile line-numbers-mode" data-ext="makefile"><pre class="language-makefile"><code>dirs <span class="token operator">:=</span> a b c d
files <span class="token operator">:=</span> <span class="token variable">$</span><span class="token punctuation">(</span><span class="token function">foreach</span> dir,<span class="token variable">$</span><span class="token punctuation">(</span>dirs<span class="token punctuation">)</span>,<span class="token variable">$</span><span class="token punctuation">(</span><span class="token function">wildcard</span> <span class="token variable">$</span><span class="token punctuation">(</span>dir<span class="token punctuation">)</span>/*<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这里‘text’是‘$(wildcard $(dir)/*)’，它的扩展过程如下：</p><p>a) 第一个赋给变量 dir 的值是<code>a’，扩展结果为‘$(wildcard a/*)’； b) 第二个赋给变量 dir 的值是</code>b’，扩展结果为‘$(wildcard b/<em>)’； c) 第三个赋给变量 dir 的值是\`c’，扩展结果为‘$(wildcard c/</em>)’； d) 如此继续扩展。</p><p>这个例子和下面的例有共同的结果：</p><div class="language-makefile line-numbers-mode" data-ext="makefile"><pre class="language-makefile"><code>files <span class="token operator">:=</span> <span class="token variable">$</span><span class="token punctuation">(</span><span class="token function">wildcard</span> a/* b/* c/* d/*<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p><strong>$(if condition,then-part[,else-part])</strong></p></blockquote><p>首先把第一个参数‘condition’的前导空格、结尾空格去掉，然后扩展。如果扩展为非空字符串，则条件‘condition’为‘真’；如果扩展为空字符串，则条件‘condition’为‘假’。 如果条件‘condition’为‘真’,那么计算第二个参数‘then-part’的值，并将该值作为整个函数 if 的值。 如果条件‘condition’为‘假’,并且第三个参数存在，则计算第三个参数‘else-part’的值，并将该值作为整个函数 if 的值；如果第三个参数不存在，函数 if 将什么也不计算，返回空值。 注意：仅能计算‘then-part’和‘else-part’二者之一，不能同时计算。这样有可能产生副作用（例如函数 shell 的调用）。</p><blockquote><p><strong>$(origin variable)</strong></p></blockquote><p>变量‘variable’是一个查询变量的名称，不是对该变量的引用。所以，不能采用‘$’和圆括号的格式书写该变量，当然，如果需要使用非常量的文件名，可以在文件名中使用变量引用。</p><p>函数 origin 的结果是一个字符串，该字符串变量是这样定义的：</p><ul><li>‘undefined&#39;：如果变量‘variable’从没有定义；</li><li>‘default&#39;：变量‘variable’是缺省定义；</li><li>‘environment&#39;：变量‘variable’作为环境变量定义，选项‘-e’没有打开；</li><li>‘environment override&#39;：变量‘variable’作为环境变量定义，选项‘-e’已打开；</li><li>‘file&#39; ：变量‘variable’在 Makefile 中定义；</li><li>‘command line&#39;：变量‘variable’在命令行中定义；</li><li>‘override&#39;：变量‘variable’在 Makefile 中用 override 指令定义；</li><li>‘automatic&#39; ：变量‘variable’是自动变量</li></ul><blockquote><p><strong>$(shell command arguments)</strong></p></blockquote><p>函数 shell 是 make 与外部环境的通讯工具。函数 shell 的执行结果和在控制台上执 行‘ command arguments ’的 结果相似。 不过如果 ‘ command arguments’的结果含有换行符（和回车符），则在函数 shell 的返回结果中将把它们处理为单个空格，若返回结果最后是换行符（和回车符）则被去掉。 比如当前目录下有文件 1.c、2.c、1.h、2.h，则：</p><div class="language-makefile line-numbers-mode" data-ext="makefile"><pre class="language-makefile"><code>c_src <span class="token operator">:=</span> <span class="token variable">$</span><span class="token punctuation">(</span><span class="token function">shell</span> ls *.c<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>结果为‘1.c 2.c’。</p>`,98),t=[l];function c(o,p){return n(),e("div",null,t)}const d=a(i,[["render",c],["__file","05-function.html.vue"]]);export{d as default};
