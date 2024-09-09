import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r,o,c as l,b as a,d as n,f as t,a as p,w as c}from"./app-Dq4O6mxq.js";const d="/assets/uri-gP3W1XTY.png",u={},h={class:"hint-container info"};function m(R,e){const i=r("RouteLink");return o(),l("div",null,[e[3]||(e[3]=a('<h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介"><span>简介</span></a></h2><p><strong>统一资源标识符</strong>(英语: Uniform Resource Identifier，缩写: URI)在电脑术语中是一个用于标识某一互联网资源名称的字符串。</p><p>该种标识允许用户对网络中(一般指万维网)的资源通过特定的协议进行交互操作。URI 的最常见的形式是统一资源定位符(URL)，经常指定为非正式的网址。更罕见的用法是统一资源名称(URN)，其目的是通过提供一种途径。用于在特定的名字空间资源的标识，以补充网址。</p><h2 id="与-url-和-urn-的关系" tabindex="-1"><a class="header-anchor" href="#与-url-和-urn-的关系"><span>与 URL 和 URN 的关系</span></a></h2><h3 id="urn" tabindex="-1"><a class="header-anchor" href="#urn"><span>URN</span></a></h3><p><strong>统一资源名称</strong>(英语: Uniform Resource Name，缩写: URN)是统一资源标识(URI)的历史名字，它使用 <code>urn:</code> 作为 URI scheme。</p><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>更多详情请见 <a href="https://zh.wikipedia.org/wiki/%E7%BB%9F%E4%B8%80%E8%B5%84%E6%BA%90%E5%90%8D" target="_blank" rel="noopener noreferrer">维基百科</a></p></div><h3 id="url" tabindex="-1"><a class="header-anchor" href="#url"><span>URL</span></a></h3><p><strong>统一资源定位符</strong>(英语: Uniform Resource Locator，缩写: URL；或称统一资源定位器、定位地址、URL 地址，俗称网页地址或简称网址)是因特网上标准的资源的地址(Address)，如同在网络上的门牌。</p>',9)),n("div",h,[e[2]||(e[2]=n("p",{class:"hint-container-title"},"相关信息",-1)),n("p",null,[e[1]||(e[1]=t("更多详情请见 ")),p(i,{to:"/code/website/definition/url.html"},{default:c(()=>e[0]||(e[0]=[t("URL")])),_:1})])]),e[4]||(e[4]=a('<h3 id="关系" tabindex="-1"><a class="header-anchor" href="#关系"><span>关系</span></a></h3><figure><img src="'+d+`" alt="URL方案分类图" tabindex="0" loading="lazy"><figcaption>URL方案分类图</figcaption></figure><p>URL(定位符)和 URN(名称)方案属于 URI 的子类，URI 可以为 URL 或 URN 两者之一或同时是 URI 和 URN。技术上讲，URL 和 URN 属于资源 ID；但是，人们往往无法将某种方案归类于两者中的某一个: 所有的 URI 都可被作为名称看待，而某些方案同时体现了两者中的不同部分。 URI 可被视为定位符(URL)，名称(URN)或两者兼备。统一资源名(URN)如同一个人的名称，而统一资源定位符(URL)代表一个人的住址。换言之，URN 定义某事物的身份，而 URL 提供查找该事物的方法。</p><div class="hint-container tip"><p class="hint-container-title">例子</p><p>用于标识唯一书目的 ISBN 系统是一个典型的 URN 使用范例。例如，ISBN <code>0-486-27557-4</code> 无二义性地标识出莎士比亚的戏剧《罗密欧与朱丽叶》的某一特定版本。为获得该资源并阅读该书，人们需要它的位置，也就是一个 URL 地址。在类 Unix 操作系统中，一个典型的 URL 地址可能是一个文件目录，例如 <code>file:///home/username/RomeoAndJuliet.pdf</code>。该 URL 标识出存储于本地硬盘中的电子书文件。因此，URL 和 URN 有着互补的作用。</p></div><h3 id="技术观点" tabindex="-1"><a class="header-anchor" href="#技术观点"><span>技术观点</span></a></h3><p>URL 是一种 URI，它标识一个互联网资源，并指定对其进行操作或获取该资源的方法。可能通过对主要访问手段的描述，也可能通过网络“位置”进行标识。例如，<a href="http://www.wikipedia.org/" target="_blank" rel="noopener noreferrer">http://www.wikipedia.org/</a> 这个 URL，标识一个特定资源(首页)并表示该资源的某种形式(例如以编码字符表示的，首页的 HTML 代码)是可以通过 HTTP 协议从 <code>www.wikipedia.org</code> 这个网络主机获得的。URN 是基于某名字空间通过名称指定资源的 URI。人们可以通过 URN 来指出某个资源，而无需指出其位置和获得方式。资源无需是基于互联网的。例如，URN <code>urn:ISBN 0-395-36341-1</code> 指定标识系统(即国际标准书号 ISBN)和某资源在该系统中的唯一表示的 URI。它可以允许人们在不指出其位置和获得方式的情况下谈论这本书。</p><p>技术刊物，特别是 IETF 和 W3C 发布的标准中，通常不再使用“URL”这一术语，因为很少需要区别 URL 和 URI。但是，在非技术文献和万维网软件中，URL 这一术语仍被广泛使用。此外，术语“网址”(没有正式定义)在非技术文献中时常作为 URL 或 URI 的同义词出现，虽然往往其指代的只是“http”和“https”协议。</p><h2 id="文法格式" tabindex="-1"><a class="header-anchor" href="#文法格式"><span>文法格式</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="shiki" data-ext="text" data-title="text" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span>                    hierarchical part</span></span>
<span class="line"><span>        ┌───────────────────┴─────────────────────┐</span></span>
<span class="line"><span>                    authority               path</span></span>
<span class="line"><span>        ┌───────────────┴───────────────┐┌───┴────┐</span></span>
<span class="line"><span>  abc://username:password@example.com:123/path/data?key=value&amp;key2=value2#fragid1</span></span>
<span class="line"><span>  └┬┘   └───────┬───────┘ └────┬────┘ └┬┘           └─────────┬─────────┘ └──┬──┘</span></span>
<span class="line"><span>scheme  user information     host     port                  query         fragment</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  urn:example:mammal:monotreme:echidna</span></span>
<span class="line"><span>  └┬┘ └──────────────┬───────────────┘</span></span>
<span class="line"><span>scheme              path</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9))])}const g=s(u,[["render",m],["__file","uri.html.vue"]]),v=JSON.parse('{"path":"/code/website/definition/uri.html","title":"URI","lang":"zh-CN","frontmatter":{"title":"URI","icon":"info","date":"2023-09-02T00:00:00.000Z","category":"HTML","description":"简介 统一资源标识符(英语: Uniform Resource Identifier，缩写: URI)在电脑术语中是一个用于标识某一互联网资源名称的字符串。 该种标识允许用户对网络中(一般指万维网)的资源通过特定的协议进行交互操作。URI 的最常见的形式是统一资源定位符(URL)，经常指定为非正式的网址。更罕见的用法是统一资源名称(URN)，其目的是通...","head":[["meta",{"property":"og:url","content":"https://oceanusc.com/code/website/definition/uri.html"}],["meta",{"property":"og:site_name","content":"oceanusc"}],["meta",{"property":"og:title","content":"URI"}],["meta",{"property":"og:description","content":"简介 统一资源标识符(英语: Uniform Resource Identifier，缩写: URI)在电脑术语中是一个用于标识某一互联网资源名称的字符串。 该种标识允许用户对网络中(一般指万维网)的资源通过特定的协议进行交互操作。URI 的最常见的形式是统一资源定位符(URL)，经常指定为非正式的网址。更罕见的用法是统一资源名称(URN)，其目的是通..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-08T05:09:45.000Z"}],["meta",{"property":"article:author","content":"oceanusc"}],["meta",{"property":"article:published_time","content":"2023-09-02T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-08T05:09:45.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"URI\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-09-02T00:00:00.000Z\\",\\"dateModified\\":\\"2024-09-08T05:09:45.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"oceanusc\\",\\"url\\":\\"https://oceanusc.com\\"}]}"]]},"headers":[{"level":2,"title":"简介","slug":"简介","link":"#简介","children":[]},{"level":2,"title":"与 URL 和 URN 的关系","slug":"与-url-和-urn-的关系","link":"#与-url-和-urn-的关系","children":[{"level":3,"title":"URN","slug":"urn","link":"#urn","children":[]},{"level":3,"title":"URL","slug":"url","link":"#url","children":[]},{"level":3,"title":"关系","slug":"关系","link":"#关系","children":[]},{"level":3,"title":"技术观点","slug":"技术观点","link":"#技术观点","children":[]}]},{"level":2,"title":"文法格式","slug":"文法格式","link":"#文法格式","children":[]}],"git":{"createdTime":1725772185000,"updatedTime":1725772185000,"contributors":[{"name":"Ocean","email":"Chen9yan67@outlook.com","commits":1}]},"readingTime":{"minutes":3.44,"words":1031},"filePathRelative":"code/website/definition/uri.md","localizedDate":"2023年9月2日","excerpt":"","autoDesc":true}');export{g as comp,v as data};
