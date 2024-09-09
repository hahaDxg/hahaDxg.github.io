import{_ as p}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as c,o as r,c as d,d as o,e as i,f as t,a as s,w as l,b as a}from"./app-Dq4O6mxq.js";const y={},h={class:"hint-container info"},g={class:"hint-container info"};function u(m,e){const n=c("RouteLink");return r(),d("div",null,[e[6]||(e[6]=o("p",null,"在正式编写第一个 Python 程序前，我们先复习一下什么是命令行模式和 Python 交互模式。",-1)),i(" more "),e[7]||(e[7]=o("h2",{id:"命令行模式",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#命令行模式"},[o("span",null,"命令行模式")])],-1)),e[8]||(e[8]=o("p",null,[t("打开“命令提示符”，就进入到命令行模式，它的提示符类似 "),o("code",null,"C:\\>"),t(":")],-1)),o("div",h,[e[2]||(e[2]=o("p",{class:"hint-container-title"},"相关信息",-1)),o("p",null,[e[1]||(e[1]=t("如何打开，请见 ")),s(n,{to:"/code/windows/cmd.html"},{default:l(()=>e[0]||(e[0]=[t("打开命令行")])),_:1})])]),e[9]||(e[9]=a('<h2 id="python-交互模式" tabindex="-1"><a class="header-anchor" href="#python-交互模式"><span>Python 交互模式</span></a></h2><p>在命令行模式下敲命令 <code>python</code>，就进入到 Python 交互模式，它的提示符是 <code>&gt;&gt;&gt;</code>。</p><p>在交互模式的提示符 <code>&gt;&gt;&gt;</code> 下，直接输入代码，按回车，就可以立刻得到代码执行结果。</p><blockquote><p>请敲入 <code>100 + 200</code> 然后按回车，您就会得到 <code>300</code>。</p></blockquote><p>如果要让 Python 打印出指定的文字，可以用 <code>print()</code> 函数，然后把希望打印的文字用单引号或者双引号括起来，但不能混用单引号和双引号。</p><blockquote><p>输入 <code>print(&#39;hello, world&#39;)</code> 后回车。</p></blockquote><p>最后，用 <code>exit()</code> 退出 Python，我们的第一个 Python 程序完成! 唯一的缺憾是没有保存下来，下次运行时还要再输入一遍代码。</p><p>在 Python 的交互式命令行写程序，好处是一下就能得到结果，坏处是没法保存，下次还想运行的时候，还得再敲一遍。</p><p>所以，实际开发的时候，我们总是使用一个文本编辑器来写代码，写完了，保存为一个文件，这样，程序就可以反复运行了。</p><p>现在，我们就把上次的 <code>&#39;hello, world&#39;</code> 程序用文本编辑器写出来，保存下来。</p>',10)),o("div",g,[e[5]||(e[5]=o("p",{class:"hint-container-title"},"文本编辑器",-1)),o("p",null,[e[4]||(e[4]=t("关于文本编辑器，请使用 ")),s(n,{to:"/software/vscode/"},{default:l(()=>e[3]||(e[3]=[t("VS Code")])),_:1})])]),e[10]||(e[10]=a(`<p>安装好文本编辑器后，输入以下代码:</p><div class="language-py" data-highlighter="shiki" data-ext="py" data-title="py" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#88C0D0;">print</span><span style="color:#ECEFF4;">(</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">hello, world</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#ECEFF4;">)</span></span></code></pre></div><p>注意 <code>print</code> 前面不要有任何空格。然后，选择一个目录，例如 <code>C:\\work</code>，把文件保存为 hello.py，就可以打开命令行窗口，把当前目录切换到 hello.py 所在目录，就可以运行这个程序了:</p><div class="language-sh" data-highlighter="shiki" data-ext="sh" data-title="sh" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#88C0D0;">C:/work</span><span style="color:#D8DEE9FF;">&gt; </span><span style="color:#A3BE8C;">python</span><span style="color:#A3BE8C;"> hello.py</span></span>
<span class="line"><span style="color:#88C0D0;">hello,</span><span style="color:#A3BE8C;"> world</span></span></code></pre></div><p>也可以保存为别的名字，比如 first.py，但是必须要以 <code>.py</code> 结尾，其他的都不行。此外，文件名只能是英文字母、数字和下划线的组合。</p><p>如果当前目录下没有 hello.py 这个文件，运行 <code>python hello.py</code> 就会报错:</p><div class="language-sh" data-highlighter="shiki" data-ext="sh" data-title="sh" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#88C0D0;">C:/Users/oceanusc</span><span style="color:#D8DEE9FF;">&gt; </span><span style="color:#A3BE8C;">python</span><span style="color:#A3BE8C;"> hello.py</span></span>
<span class="line"><span style="color:#88C0D0;">python:</span><span style="color:#A3BE8C;"> can</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">t open file </span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">hello.py</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">: [Errno 2] No such file or directory</span></span></code></pre></div><p>报错的意思就是，无法打开 hello.py 这个文件，因为文件不存在。这个时候，就要检查一下当前目录下是否有这个文件了。如果 hello.py 存放在另外一个目录下，要首先用 <code>cd</code> 命令切换当前目录。</p><h2 id="直接运行-py-文件" tabindex="-1"><a class="header-anchor" href="#直接运行-py-文件"><span>直接运行 py 文件</span></a></h2><p>您可能有疑问，能不能像 <code>.exe</code> 文件那样直接运行 <code>.py</code> 文件呢? 在 Windows 上是不行的，但是，在 Mac 和 Linux 上是可以的，方法是在 <code>.py</code> 文件的第一行加上一个特殊的注释:</p><div class="language-py" data-highlighter="shiki" data-ext="py" data-title="py" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#616E88;"># !/usr/bin/env python3</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88C0D0;">print</span><span style="color:#ECEFF4;">(</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">hello, world</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#ECEFF4;">)</span></span></code></pre></div><p>然后，通过命令给 hello.py 以执行权限:</p><div class="language-sh" data-highlighter="shiki" data-ext="sh" data-title="sh" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#88C0D0;">chmod</span><span style="color:#A3BE8C;"> a+x</span><span style="color:#A3BE8C;"> hello.py</span></span></code></pre></div><p>就可以直接运行 hello.py 了，比如在 Mac 下运行:</p><h2 id="小结" tabindex="-1"><a class="header-anchor" href="#小结"><span>小结</span></a></h2><p>用文本编辑器写 Python 程序，然后保存为后缀为 <code>.py</code> 的文件，就可以用 Python 直接运行这个程序了。</p><p>Python 的交互模式和直接运行 <code>.py</code> 文件有什么区别呢?</p><p>直接输入 python 进入交互模式，相当于启动了 Python 解释器，但是等待您一行一行地输入源代码，每输入一行就执行一行。</p><p>直接运行 <code>.py</code> 文件相当于启动了 Python 解释器，然后一次性把 <code>.py</code> 文件的源代码给执行了，您是没有机会以交互的方式输入源代码的。</p><p>用 Python 开发程序，完全可以一边在文本编辑器里写代码，一边开一个交互式命令窗口，在写代码的过程中，把部分代码粘到命令行去验证，事半功倍! 前提是得有个 27’ 的超大显示器!</p>`,20))])}const E=p(y,[["render",u],["__file","write.html.vue"]]),k=JSON.parse('{"path":"/code/language/python/guide/write.html","title":"第一个 Python 程序","lang":"zh-CN","frontmatter":{"title":"第一个 Python 程序","icon":"info","author":"廖雪峰","date":"2020-05-20T00:00:00.000Z","category":"Python","description":"在正式编写第一个 Python 程序前，我们先复习一下什么是命令行模式和 Python 交互模式。","head":[["meta",{"property":"og:url","content":"https://oceanusc.com/code/language/python/guide/write.html"}],["meta",{"property":"og:site_name","content":"oceanusc"}],["meta",{"property":"og:title","content":"第一个 Python 程序"}],["meta",{"property":"og:description","content":"在正式编写第一个 Python 程序前，我们先复习一下什么是命令行模式和 Python 交互模式。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-09T07:43:42.000Z"}],["meta",{"property":"article:author","content":"廖雪峰"}],["meta",{"property":"article:published_time","content":"2020-05-20T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-09T07:43:42.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"第一个 Python 程序\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-05-20T00:00:00.000Z\\",\\"dateModified\\":\\"2024-09-09T07:43:42.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"廖雪峰\\"}]}"]]},"headers":[{"level":2,"title":"命令行模式","slug":"命令行模式","link":"#命令行模式","children":[]},{"level":2,"title":"Python 交互模式","slug":"python-交互模式","link":"#python-交互模式","children":[]},{"level":2,"title":"直接运行 py 文件","slug":"直接运行-py-文件","link":"#直接运行-py-文件","children":[]},{"level":2,"title":"小结","slug":"小结","link":"#小结","children":[]}],"git":{"createdTime":1725772185000,"updatedTime":1725867822000,"contributors":[{"name":"Ocean","email":"Chen9yan67@outlook.com","commits":1},{"name":"cy","email":"che4ac@163.com","commits":1}]},"readingTime":{"minutes":3.35,"words":1004},"filePathRelative":"code/language/python/guide/write.md","localizedDate":"2020年5月20日","excerpt":"<p>在正式编写第一个 Python 程序前，我们先复习一下什么是命令行模式和 Python 交互模式。</p>\\n","autoDesc":true}');export{E as comp,k as data};
