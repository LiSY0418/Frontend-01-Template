# 第三周总结

### 类型转换

- 基础类型

  • Undefined

  • Boolean

  • String

  • Number

  • Null

  • Symbol

  • BigInt

  • Object

### 装箱拆箱

• 装箱：基础类型 => 包装类型 Boolean String Boolean ...

• 拆箱：包装类型(Object) => 基础类型, 会优先调用valueOf toString toPrimitive进行转换

### 类型的判断

• typeof
•  Obejct.prototype.toString.call
• instanceof

### 隐式转换发生的场景

 • Left Handside & Right Handside

   左右取值，转换为原始值，如果转换后的值存在string, 则进行toString后拼接。否则按toNumber处理 Left • i• •Handside (赋值操作的目标) Reference 引用

•  Right Handside (赋值操作的来源)

• Left Handside

### Grammar 

• 简单语句 

• 组合语句 

• 声明

### Runtime

• Completion Record

○[[type]]: normal, break, continue, return, throw
○[[value]]: Types
○[[target]]: label

• Lexical Environment

### 

### RuntimeCompletion Record

• [[type]]: normal, break, continue, return, or throw

• [[value]]: Types

• [[target]]: label

#### 简单语句 

• ExpressionStatement  表达式语句

​    ○  a = 1 + 2;

• EmptyStatement  空语句

​     ○； 

• DebuggerStatement

​     ○ debugger

• ThrowStatement

​     ○ throw a;

• ContinueStatement

   ○  continue label1;

• BreakStatement

​    ○  break label1;

• ReturnStatement

​    ○  return; / return 1;

#### 复合语句

• BlockStatement

多条语句合并成一条语句

为const let 提供作用域

block内产生了非normal的结果时，后面的语句将不再执行。

```
{ a:1
    }
```

 [[type]]:normal
 [[value]]:--
 [[target]]:--

• IfStatement

```
while()
        do while()
        for(;;)
        for(in)
        for(of)
    LabelledStatement
```

• SwitchStatement

• IterationStatement

```
while()
do while()
for( ; ; )
for( in )
for( of )
for await(of)
```

• WithStatement

• LabelledStatement

• TryStatementblock

```
try {

} catch () {

} finally {

}
```

• BlockStatement

### 标签、循环、break、continue

• LabelledStatement

• IterationStatement

• ContinueStatement

• BreakStatement

• SwitchStatement

### label声明

• FunctionDeclaration

```
function foo() {} //函数声明 
var o = function foo() {} // 函数表达式
```

• GeneratorDeclaration

```
function* foo() {
	yield 1;
}
let g = foo();
g.next().value;
```

• AsyncFunctionDeclaration

• AsyncGeneratorDeclaration

• VariableStatement

• ClassDeclaration

• LexicalDeclaration

```
var x = 0;
    function foo() {
      var o = {x: 1};
      x = 2;
      with(o) {
        var x = 3;
      }
      console.log(x);
    }

    foo();
    console.log(x);
```

注意：var写在function范围内，至少写在变量第一次出现的地方，不要写在子结构里！！



### Object in JavaScript

· 在JavaScript运行时，原生对象的描述方式非常简单，我们只需要关心原型和属性两个部分。

○JavaScript用属性来统一抽象对象状态和行为。

○一般来说，数据属性用于描述状态，访问器属性则用于描述行为。

○数据属性中如果存储函数，也可以用于描述行为。

#### 原型链

当我们访问属性时，如果当前对象没有，则会沿着原型找原型对象是否有此名称的属性，而原型对象还可能有原型，因此，会有“原型链” 这一说法。这一算法保证了，每个对象只需要描述自己和原型的区别即可。

#### ·Object API / Grammar（推荐使用前3）

- 基础API ：{} . [] Objecy.defineProperty  
- 原型API：Object.create Object.setPropertyOf Object.getPropertyOf
- 基于类的面向对象API：new class extends
- 基于原型的面向对象API：new function prototype



### 作业： JavaScript 标准里有哪些对象是我们无法实现出来的，这些对象都有哪些特性？

  可以把对象分成几类。

**1·宿主对象（host Objects）**：由 JavaScript 宿主环境提供的对象，它们的行为完全由宿主环境决定。

宿主对象也分为固有的和用户可创建的两种，比如 document.createElement 就可以创建一些 DOM 对象。宿主也会提供一些构造器（比如我们可以使用 new Image 来创建 img 元素）

**2·** **内置对象**（Built-in Objects）：由 JavaScript 语言提供的对象。

**○ 固有对象（Intrinsic Objects ）**：由标准规定，随着 JavaScript 运行时创建而自动创建的对象实例。

​    固有对象是由标准规定，随着 JavaScript 运行时创建而自动创建的对象实例。固有对象在任何 JavaScript 代码执行前就已经被创建出来了，它们通常扮演者类似基础库的角色。我们前面提到的“类”其实就是固有对象的一种。ECMA 标准为我们提供了一份固有对象表，里面含有 150+ 个固有对象。

**○原生对象（Native Objects）**：可以由用户通过 Array、RegExp 等内置构造器或者特殊语法创建的对象。

​     把 JavaScript 中，能够通过语言本身的构造器创建的对象称作原生对象。在 JavaScript 标准中，提供了 30 多个构造器，通过这些构造器，我们可以用 new 运算创建新的对象，所以我们把这些对象称作原生对象。            

  这些构造器创建的对象多数使用了私有字段, 例如：

Error: [[ErrorData]]     (错误对象是一种特殊的基本对象。它们拥有基本的 Error 类型，同时也有多种具体的错误类型。通过Error的构造器可以创建一个错误对象。当运行时错误产生时，Error的实例对象会被抛出。Error对象也可用于用户自定义的异常的基础对象。)   

•Boolean: [[BooleanData]]                                                                                

•Number: [[NumberData]]                                                                                                                                                •Date: [[DateValue]]  (用来表示数字、日期和执行数学计算的对象。JavaScript中提供了时间相关的操作，时间操作中分为两种时间：

- 时间统一时间
- 本地时间（东8区）

)                                                                     •Math                                                                                                                         

•RegExp: [[RegExpMatcher]]    （JavaScript中通过RegExp支持正则表达式，使用以下语法可以创建一个正则表达式）                                                                                                                                                                                   •Symbol: [[SymbolData]]                                                                                                                                                   •Map: [[MapData]]

  这些字段使得原型继承方法无法正常工作，所以，我们可以认为，所有这些原生对象都是为了特定能力或者性能，而设计出来的“特权对象”。用对象来模拟函数与构造器：函数对象与构造

**○普通对象（Ordinary Objects）**：由{}语法、Object 构造器或者 class 关键字定义类创建的对象，它能够被原型继承。

**○特殊行为对象：

除了上面介绍的对象之外，在固有对象和原生对象中，有一些对象的行为跟正常对象有很大区别。它们常见的下标运算（就是使用中括号或者点来做属性访问）或者设置原型跟普通对象不同，这里我简单总结一下。

•Array：Array 的 length 属性根据最大的下标自动发生变化。                                                                     •Object.prototype：作为所有正常对象的默认原型，不能再给它设置原型了。                                                            •String：为了支持下标运算，String 的正整数属性访问会去字符串里查找。                                                          •Arguments：arguments 的非负整数型下标属性跟对应的变量联动。                                                                        ••模块的 namespace 对象：特殊的地方非常多，跟一般对象完全不一样，尽量只用于 import 吧。                                          •类型数组和数组缓冲区：跟内存块相关联，下标运算比较特殊。                                                                                                            •bind 后的 function：跟原来的函数相关联。                                                                                                                    •Proxy：每个Proxy都有一个[[ProxyHandler]]和一个[[ProxyTarget]]，他们的值是一个object或者null



##### 