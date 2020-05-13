# 第5周总结

1、JSContext=>realm(上下文) —> 包括了Object、Date 132多个对象 —> 函数调用（Execution.context 执行栈从左到右调用） 、包含了6样内容：1.code evaluation state(async) 、2.function closure(环境+代码) 、3.script or module、 4.generator 、5.Rrealm（this(2019)、new）、6.LexicalEnvironment

2、浏览器