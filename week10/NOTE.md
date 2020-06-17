# 第十周总结

1. ### Range（富文本编辑器）

   ### 	RangeAPI：

   1. ##### range.setStartBefore

   2. ##### range.setEndBefore

   3. ##### range.setStartAfter

   4. ##### range.setEndAfter

   5. ##### range.selectNode

   6. ##### range.selectNodeContents

2. ### 	Cssom: 是 CSS 的对象模型，在 W3C 标准中，它包含两个部分：描述样式表和规则等 CSS 的模型部分（CSSOM），和跟元素视图相关的 View 部分（★CSSOM View）。

   - ##### document.styleSheet:表示文档中的所有样式表( document.styleSheets).

   - ##### 更进一步，我们可以获取样式表中特定的规则（Rules）document.styleSheets[0].cssRules.

   - ##### Rules包括了CSS 的 at-rule，也可能是普通的样式规则。

     - ##### CSSStyleRule：CSSStyleRule 有两个属性：selectorText 和 style，分别表示一个规则的选择器部分和样式部分。

       1. ##### selector 部分是一个字符串。

       2. ##### style 部分是一个样式表，跟元素的 style 属性是一样的类型，所以我们可以像修改内联样式一样，直接改变属性修改规则中的具体 CSS 属性定义，也可以使用 cssText 这样的工具属性。

     - ##### CSSCharsetRule

     - ##### CSSImportRule

     - ##### CSSMediaRule

     - ##### CSSFontFaceRule

     - ##### CSSPageRule

     - ##### CSSNamespaceRule

     - ##### CSSKeyframesRule

     - ##### CSSKeyframeRule

     - ##### CSSSupportsRule

     

3. #### CssStyleSheet继承styleSheet     &&     HTMLElement继承Elenment

4. ### window.getComputedStyle(elt, pseudoElt)：

   - ##### 用来获取一个元素最终经过 CSS 计算得到的属性。

   - ##### 其中第一个参数elt是要获取属性的元素，第二个参数是可选的，用于选择伪元素。

5. #### Cssom View：CSSOM View 这一部分的 API，可以视为 DOM API 的扩展，它在原本的 Element 接口上，添加了显示相关的功能，这些功能，又可以分成三个部分：窗口部分，滚动部分和布局部分。

   1. #### 窗口 API：窗口 API 用于操作浏览器窗口的位置、尺寸等。

      - ##### moveTo(x, y) 窗口移动到屏幕的特定坐标；

      - ##### moveBy(x, y) 窗口移动特定距离；

      - ##### resizeTo(x, y) 改变窗口大小到特定尺寸；

      - ##### resizeBy(x, y) 改变窗口大小特定尺寸。

   2. #### 滚动 API

   3. #### 视口滚动 API

      #####   可视区域（视口）滚动行为由 window 对象上的一组 API 控制

      - ##### scrollX 是视口的属性，表示 X 方向上的当前滚动距离，有别名 pageXOffset；

      - ##### scrollY 是视口的属性，表示 Y 方向上的当前滚动距离，有别名 pageYOffset；

      - ##### scroll(x, y) 使得页面滚动到特定的位置，有别名 scrollTo，支持传入配置型参数 {top, left}；

      - ##### scrollBy(x, y) 使得页面滚动特定的距离，支持传入配置型参数 {top, left}。

   4. #### 元素滚动 API

      ##### 元素滚动 API，在 Element 类（参见 DOM 部分），为了支持滚动，加入了以下 API。

      - ##### scrollTop 元素的属性，表示 Y 方向上的当前滚动距离。

      - ##### scrollLeft 元素的属性，表示 X 方向上的当前滚动距离。

      - ##### scrollWidth 元素的属性，表示元素内部的滚动内容的宽度，一般来说会大于等于元素宽度。

      - ##### scrollHeight 元素的属性，表示元素内部的滚动内容的高度，一般来说会大于等于元素高度。

      - ##### scroll(x, y) 使得元素滚动到特定的位置，有别名 scrollTo，支持传入配置型参数 {top, left}。

      - ##### scrollBy(x, y) 使得元素滚动到特定的位置，支持传入配置型参数 {top, left}。

      - ##### scrollIntoView(arg) 滚动元素所在的父元素，使得元素滚动到可见区域，可以通过 arg 来指定滚到中间、开始或者就近。

   