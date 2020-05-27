# 第七周总结

### 1、Toy-browser的渲染（render）选择的是flex排版：

- ##### 分行：根据主轴尺寸，把元素分进行

- ##### 计算主轴方向：找出所有flex元素、吧主轴方向剩余尺寸按比例分配给这些元素、若剩余空间为负数，所有flex为零，等比缩放剩余空间。

- ##### 计算交叉轴方向：根据每一行中最大元素尺寸计算行高、根据行高flex-align和item-align，确定元素具体位置。

### 2、Toy-browser的渲染\绘制（render）：

#### 1、绘制单个元素：

- ##### 绘制需要依赖图形环境（images包）；

- ##### 绘制在一viewport上进行；

#### 2、绘制Dom：

- ##### 递归调用子元素绘制Dom树；

- ##### 忽略不绘制一些节点（eg：文字节点）

- ##### 实际浏览器中还会对一些图层做compositing



### 3、CSS总体结构：

- @charset

- @imoport
- rules
  - @media
  - page
  - rule

### 可分为At-rules和普通rule（一般占平时使用的90%）；

### 1、At-rules：

- ##### @charset ：用于提示 CSS 文件使用的字符编码方式，它如果被使用，必须出现在最前面。这个规则只在给出语法解析阶段前使用，并不影响页面上的展示效果。

- ##### @import ：用于引入一个 CSS 文件，除了 @charset 规则不会被引入，@import 可以引入另一个文件的全部内容。

- ##### @media：就是大名鼎鼎的 media query 使用的规则了，它能够对设备的类型进行一些判断。在 media 的区块内，是普通规则列表。

- #####  @page ：用于分页媒体访问网页时的表现设置，页面是一种特殊的盒模型结构，除了页面本身，还可以设置它周围的盒。

- ##### @counter-style：产生一种数据，用于定义列表项的表现。

- #####  @keyframes ：用于定义动画关键帧。

- ##### @fontface ：用于定义一种字体，icon font 技术就是利用这个特性来实现的。

- ##### @supports ：检查环境的特性，它与 media 比较类似。

- ##### @namespace：用于跟 XML 命名空间配合的一个规则，表示内部的 CSS 选择器全都带上特定命名空间。

- ##### @viewport:用于设置视口的一些特性，不过兼容性目前不是很好，多数时候被 HTML 的 meta 代替。

- ##### @color-profile 是 SVG1.0 引入的 CSS 特性，但是实现状况不怎么好。

- ##### @document 还没讨论清楚，被推迟到了 CSS4 中。

- ##### @font-feature-values ：允许使用通用名称中使用通用名称，用于在OpenType中以不同方式激活功能。

### 2、普通rule：

- #### Selector(选择器)

  - ##### selector_group

  - ##### combimator

  - ##### simple_selector

- #### Deciaraion

  - ##### Key(属性)

    - ##### property

    - ##### variable

  - ##### Value(值)