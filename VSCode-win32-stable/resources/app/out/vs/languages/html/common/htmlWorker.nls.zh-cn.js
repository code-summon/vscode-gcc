/*!--------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
define("vs/languages/html/common/htmlWorker.nls.zh-cn",{"vs/languages/html/common/htmlTags":["html 元素表示 HTML 文档的根。","head 元素表示文档的元数据集合。","title 元素表示文档的标题或名称。作者应使用标题以标识其文档，即使它们不在上下文中使用，例如在用户的历史记录或书签或搜索结果中使用。该文档的标题通常不同于其第一个标题，因为第一个标题在移出上下文时未必是孤立的。","base 元素允许作者指定文档基 URL 以便解析相对 URL，以及指定默认浏览上下文的名称以便打开超链接。该元素不表示此信息以外的任何内容。","link 元素允许作者将其文档链接到其他资源。","meta 元素表示不能使用 title、base、link、style 和 script 元素表示的各种元数据。","style 元素允许作者将样式信息嵌入在其文档中。该 style 元素是样式化处理模型的多个输入之一。该元素不表示用户的内容。","body 元素表示文档的内容。","article 元素表示文档、页面、应用程序或站点中的完整或自包含组合，从原则上讲，该元素可独立分发或重复使用，例如以联合形式。此元素可能是论坛帖子、杂志或报纸文章、博客条目、用户提交的评论、交互式小组件或小工具，或其他任何无关的内容项。应标识每篇文章，方法通常是将标题(h1-h6 元素)作为 article 元素的子级包括在内。","section 元素表示文档或应用程序的通用部分。在此上下文中，部分是内容的主题分组。应标识每个部分，方法通常是将标题(h1-h6 元素)作为 section 元素的子级包括在内。","nav 元素表示页面中链接到其他页面或该页面中的部分的某个部分: 包含导航链接的部分。","aside 元素表示页面的某个部分，该部分包含与 aside 元素周围的内容略微相关的内容，以及可能被认为与该内容分隔开的内容。这些部分在打印版式中通常表示为边栏。","h1 元素表示节标题。","h2 元素表示节标题。","h3 元素表示节标题。","h4 元素表示节标题。","h5 元素表示节标题。","h6 元素表示节标题。","header 元素表示最近的上级分区内容或分区根元素的介绍性内容。标题通常包含一组介绍性或导航帮助。当最近的上级分区内容或分区根元素是 body 元素时，该元素适用于整个页面。","footer 元素表示最近的上级分区内容或分区根元素的脚注。脚注通常包含与其所在部分相关的信息，例如编写者、指向相关文档的链接、版权数据等等。","address 元素表示最近的 article 或 body 元素上级的联系信息。如果该元素是 body 元素，则该联系信息全部都适用于文档。","P 元素表示段落。","hr 元素表示段落级别主题间隔，例如故事中的场景变化或向参考书的某个章节中的另一个主题转换。","pre 元素表示预设了格式的文本块，在该块中，结构由排字约定而非元素来表示。","blockquote 元素表示从其他源中引用的内容，可以带有必须位于 footer 或 cite 元素中的引文，也可以带有批注和缩写等行内更改。","ol 元素表示项目列表，其中项目已特意经过排序，以致更改顺序会更改文档的含义。","ul 元素表示项目列表，其中项目的顺序不重要，即在其中更改顺序其实不会更改文档的含义。","li 元素表示项目列表。如果其父元素是 ol、ul 或 menu 元素，则该元素是为那些元素定义的父元素列表的项目。否则，该列表项目与其他任何 li 元素没有已定义的列表相关关系。","dl 元素表示包含零个或多个名称/值组的关联列表(描述列表)。名称/值组包含一个或多个名称(dt 元素)，后跟一个或多个值(dd 元素)，从而忽略 dt 和 dd 元素之外的任何节点。在单个 dl 元素中，每个名称都不能有多个 dt 元素。","dt 元素表示术语或名称，即描述列表(dl 元素)中术语描述组的一部分。","dd 元素表示描述、定义或值，即描述列表(dl 元素)中术语描述组的一部分。","figure 元素表示一些可以带有标题的自包含流内容(例如完整句子)，通常在文档的主要流中引用为单个单元。","figcaption 元素表示 figcaption 元素的父 figure 元素(如果有)的其余内容的标题或图例。","main 元素表示文档或应用程序正文的主要内容。主要内容区域中的内容与文档的中心主题或应用程序的中心功能直接相关，或根据该中心主题或中心功能进行扩展。","div 元素没有任何专门含义。该元素表示其子级。它可与 class、lang 和 title 属性一起用于标记一组连续元素通用的语义。","如果 a 元素具有 href 属性，则该元素表示由其内容标记的超链接(超文本定位)。","em 元素表示对其内容的强调。","strong 元素表示其内容很强的重要性、严重性或紧急性。","small 元素表示边注，例如小号字体。","s 元素表示不再准确或不再相关的内容。","cite 元素表示对创意作品的引用。该元素必须包括作品的标题或作者(个人、一群人或组织)的名称、URL 引用或缩写形式的引用(根据用于添加引文元数据的约定)。","q 元素表示一些从其他源中引用的分段内容。","dfn 元素表示术语的定义实例。作为 dfn 元素最近上级的段落、描述列表组或部分还必须包含由该 dfn 元素提供的术语的定义。","abbr 元素表示缩写(可带有其扩展)。可使用 title 属性提供该缩写的扩展。如果指定，则该属性必须包含该缩写的扩展，而不包含其他任何内容。","ruby 元素允许一个或多个跨度的短语内容使用拼音批注进行标记。ruby 批注是在基本文本旁边呈现的简短文本，主要在版式中用作发音指南，或者用于包括其他批注。在日本，这种版式也称为汉字注音。ruby 文本可显示在基本文本的任何一侧，有时同时显示在两侧，可以使用 CSS 控制其位置。有关 rudy 的更完整介绍，请参阅文档《Ruby 标记的用例和探索方法》以及 CSS Rudy 模块级别 1。[RUBY-UC] [CSSRUBY]","rb 元素标记拼音批注的基本文本组件。当它是 ruby 元素的子级时，它本身不表示任何内容，但它的父级 ruby 元素在确定它所表示的内容时使用它。","rt 元素标记拼音批注的拼音文本组件。当它是 ruby 元素或 rtc 元素(本身是 ruby 元素的子级)的子级时，它本身不表示任何内容，但其上级 ruby 元素在确定它所表示的内容时使用它。","rp 元素用于提供备用文本，这些文本将由不支持拼音批注的用户代理显示。一种广泛使用的惯例是在拼音批注的拼音文本组件周围加上圆括号。","time 元素表示其内容，以及这些内容在 datetime 属性中的计算机可读形式。此类内容限于各种类型的日期、时间、时区偏移量和持续时间，如下所述。","code 元素表示计算机代码的片段。这可以是 XML 元素名称、文件名、计算机程序，或计算机可识别的其他任何字符串。","var 元素表示变量。这可以是数学表达式或程序上下文中的实际变量、表示常量的标识符、标识物理数量的符号、函数参数，或只是在文本中用作占位符的词。","samp 元素表示另一个程序或计算系统的示例输出或带引号的输出。","kbd 元素表示用户输入(通常是键盘输入，尽管该元素可能还用于表示语音命令等其他输入)。","sub 元素表示下标。","sub 元素表示上标。","i 元素表示采用备选语态或语气的一段文本，或以指示不同文本质量的方式表示的与常规文本的偏移量，例如分类指定、技术术语、其他语言的惯用短语、音译、想法或采用西方文本的船舶名称。","b 元素表示一段文本，该文本出于实用目的受到关注，不必传达任何额外的重要性，并且不暗示备选语态或语气，例如文档摘要中的关键字、接受检查的产品名称、交互式的文本驱动软件中的可操作单词或文章导语。","u 元素表示带有未阐明但明确呈现的非文本批注的一段文本，例如使用中文文本(中文的正确名称标记)将文本标记为正确名称，或将文本标记为拼写有误。","mark 元素表示一个文档中的一连串文本，这些文本由于其在另一个上下文中的相关性而进行了标记或突出显示，以实现引用目的。如果在从文本中引用的引文或其他文本块中使用，则该元素指示突出显示，该突出显示原先并不存在，但已添加以将读者的注意力吸引到原作者在最初编写块时可能未被视为重要而现在正在接受以前未预料到的仔细查阅的文本部分。如果在文档的主要文本中使用，该元素指示由于其可能与用户的当前活动相关而已突出显示的文档部分。","bdi 元素表示一段文本，该文本要与其周围内容隔离，以用于双向文本格式化。[BIDI]","bdo 元素表示其子级的显式文本方向性格式化控件。该元素允许作者通过明确指定方向重写来重写 Unicode 双向算法。[BIDI]","span 元素本身不表示任何内容，但与全局属性(例如 class、lang 或 dir)一起使用时可能很有用。该元素表示其子级。","br 元素表示换行符。","wbr 元素表示换行符机会。","ins 元素表示添加到文档中。","del 元素表示从文档中删除。","picture 元素是一个容器，它为其包含的 img 元素提供多个源，从而允许作者以声明方式，基于屏幕像素密度、视区大小、图像格式和其他因素控制要使用的图像资源或为用户代理提供其相关提示。它表示其子级。","img 元素表示图像。","iframe 元素表示嵌套的浏览上下文。","embed 元素为外部(通常是非 HTML)应用程序或交互式内容提供集成点。","object 元素可表示外部资源，根据资源类型，该资源将被视为图像、嵌套的浏览上下文，或要由插件处理的外部资源。","param 元素为 object 元素所调用的插件定义参数。它本身不表示任何内容。","video 元素用于播放视频或电影，以及带字幕的音频文件。","audio 元素表示声音或音频流。","source 元素允许作者为媒体元素指定多个备选媒体资源。该元素本身不表示任何内容。","track 元素允许作者为媒体元素指定明确的外部计时文本轨道。该元素本身不表示任何内容。","map 元素，与 img 元素和任何 area 元素后代一起用于定义图像地图。该元素表示其子级。","area 元素表示图像地图上一个带有某些文本的超链接和相应区域，或图像地图上的死区域。","table 元素以表的形式表示具有多个维度的数据。","caption 元素表示作为其父级的表的标题(如果它有父级，并且该父级是 table 元素)。","colgroup 元素表示作为其父级的表中的一个或多个列组(如果它有父级，并且该父级是 table 元素)。","如果 col 元素有父级，并且该父级是 colgroup 元素且自身有作为 table 元素的父级，则该 col 元素表示由该 colgroup 表示的列组中的一个或多个列。","tbody 元素表示行块，这些行包含父 table 元素的数据正文(如果 tbody 元素有父级，并且该父级是表)。","thead 元素表示行块，这些行包含父 table 元素的列标签(标题)，前提是 thead 元素有父级，并且该父级是表。","tfoot 元素表示行块，这些行包含父 table 元素的列摘要(脚注)，前提是 tfoot 元素有父级，并且该父级是表。","tr 元素表示表中的一行单元格。","td 元素表示表中的数据单元格。","th 元素表示表中的标题单元格。","fform 元素表示与表单关联的元素的集合，其中一些元素可以表示可编辑值，这些值可提交到服务器进行处理。","label 元素表示用户界面中的标题。该标题可与特定表单控件(称为 label 元素的标记控件)关联，方法是使用 for 属性，或将表单控件放在 label 元素自身内。","input 元素表示键入的数据字段，通常带有允许用户编辑数据的表单控件。","button 元素表示由其内容标记的按钮。","select 元素表示用于在一组选项中进行选择的控件。","datalist 元素表示一组 option 元素，这些元素表示其他控件的预定义选项。在呈现时，datalist 元素不表示任何内容，该元素及其子级应被隐藏。","optgroup 元素表示带有常见标签的一组 option 元素。","option 元素表示 select 元素中的选项或构成 datalist 元素中的建议列表的一部分。","textarea 元素表示该元素的原始值的多个纯文本编辑控件。该控件的内容表示该控件的默认值。","output 元素表示应用程序执行的计算的结果或用户操作的结果。","progress 元素表示任务的完成进度。该进度要么不确定，即指示任务正在进行，但不清楚在任务完成前还有多少工作要做(例如因为该任务正在等待远程主机响应)，要么该进度是零到最大值范围内的一个数字，这提供了迄今为止已完成的工作的分数。","meter 元素表示已知范围内的标量度量或分数值；例如磁盘使用量、查询结果的相关性，或已选择特定候选人的投票人的分数。","fieldset 元素表示一组可以按常见名称分组的表单控件。","legend 元素表示该 legend 元素的父 fieldset 元素(如果有)的其余内容的标题。","details 元素表示用户可以从中获取其他信息或控件的公开小组件。","summary 元素表示 summary 元素的父 details 元素(如果有)的其余内容的摘要、标题或图例。","dialog 元素表示用户为了执行任务而与之交互的应用程序的一部分，例如，对话框、检查器或窗口。","scrip 元素允许作者在其文档中包含动态脚本和数据库。该元素不表示用户的内容。","noscript 元素不表示任何内容(如果启用脚本编写)，或表示其子级(如果禁用脚本编写)。该元素用于通过影响文档的分析方式来为支持脚本编写和不支持脚本编写的用户代理提供不同标记。","template 元素用于声明可由脚本克隆并插入文档中的 HTML 片段。","canvas 元素为脚本提供与分辨率有关的位图画布，该画布可用于动态呈现图形、游戏图形、艺术或其他可视图像。","该复选框与 HTML 复选框相比没什么不同，除了它的样式不一样。该复选框的行为类似于任何 AngularJS 复选框。","ionContent 指令提供易于使用的内容区域，该区域可配置为使用 Ionic 的自定义滚动视图，或浏览器的内置溢出滚动。","ionItem 的子级","在某些内容下方添加固定页脚栏。如果使用了”栏-子页脚“，也可以添加子页脚(位置略高)。","在某些内容上方添加固定标题栏。如果使用了”栏-副标题“，也可以添加副标题(位置稍低)。","ionContent 或 ionScrol 的子级。ionInfiniteScroll 指令允许你在用户到达页面的底部或邻近页面底部的任何时候调用函数。",'ionInput 仅供文本类型输入。Ionic 使用组件内的实际 <input type="text"> HTML 元素，换行 Ionic 以更好地处理用户体验和交互性。 ',"ionList 的子级。","该列表几乎在任何移动应用中都是被广泛使用的界面元素，并且内容范围可以涵盖从基本的文本到按钮、切换组件、图标以及缩略图。","Modal 是一个内容窗格，可以临时查看用户的主视图。通常用于做出选择或编辑项。","ionNavBar 的子级。在 ionNavBar 内创建一个返回按钮。在用户在当前导航堆栈能够返回时,将出现该按钮。","如果你有 ionNavView 指令，你也可以创建 <ion-nav-bar>，它将创建随着应用程序状态改变而更新的 topbar。","ionNavView 的子级。使用 ionNavButtons 设置来自 ionView 内部的 ionNavBar 上的按钮。","ionNavView 的子级。ionNavTitle 指令用于将 ionNavBar 标题文本替换为 ionView 模板中的自定义 HTML。","ionNavView 指令用于呈现你的应用程序中的模板。每个模板属于状态的一部分。状态通常映射到 URL，并且使用 angular-ui-router 以编程方式进行定义。","ionItem 的子级。在列表项内创建一个选项按钮，该按钮在用户向左滑动项时可见。","一个适应内容的简单容器，没有副作用。将”窗格“类添加到该元素。","Popover 是浮动在应用内容上方的视图。Popover 为呈现或收集用户信息提供了一个简单的方式。","radio ionRirective 与 HTML radio 输入相比没什么不同，除了它的样式不一样。ionRadio 的行为类似于 AngularJS radio 输入。",'ionContent 或 ionScrol 的子级。允许你将 “下拉以刷新”添加到 "scrollView"。将其放置为你的 ionContent 或 ionScroll 元素的第一个子级。',"ionItem 的子级。","为所有内部内容创建可滚动容器。","ionSideMenus 的子级。用于存放侧菜单的容器，是 ionSideMenuContent 指令的同级。","ionSideMenus 的子级。用于存放主要可见内容的容器，是一个或多个 ionSideMenu 指令的同级。","侧菜单的容器元素和主要内容。允许将主要内容区从一侧拖动到另一侧来切换左侧和/或右侧菜单。","ionSlideBox 的子级。显示幻灯片盒内的幻灯片。","Slide Box (幻灯片盒)是一个多页容器，其中每一页都可相互之间进行滑动或拖动。","ionSpinner 指令提供各种动态微调框。","ionTabs 的子级。包含表的内容。 该内容仅在给定的表已选定时存在。","支持多标签界面，该界面包含标签栏和一组可以通过标签浏览的”页面“。","ion-title 是设置 ionNavbar 的磁贴的组件","切换是将给定的模型绑定到布尔的动画开关。允许拖动开关中心。另外，切换的行为类似于任何 AngularJS 复选框。","ionNavView 的子级。用于存放视图内容以及任何可导航信息和标题栏信息的容器。"]});
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/e6b4afa53e9c0f54edef1673de9001e9f0f547ae/vs\languages\html\common\htmlWorker.nls.zh-cn.js.map
