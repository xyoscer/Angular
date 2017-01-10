# Angular学习笔记
Angular是js的一个框架，以javascript文件形式发布m通过script标签引入到HTML。通过指令扩展了HTML。

MVC  模块  指令 双向数据绑定

#### AngularJs表达式
 {{expression}}
 
#### AngularJs指令

- ng-app 指令定义一个AngularJS应用程序

- ng-model 指令把元素值绑定到应用程序中

- ng-bind  指令把应用程序数据绑定到HTML视图中。

- ng-repeat 重复一个HTML元素

通过.directive函数来添加自定义的指令，使用驼峰法命名一个指令，在使用时，需要-分割

####AngularJS Scope

Scope 是应用在HTML视图和js(控制器)之间的纽带 ，作用域是一个对象，有可用的方法和属性 

####AngularJS 过滤器
可以通过（|）添加到表达式和指令中  过滤器用于转换数据

- curent 格式化数字为货币格式

- filter 从数组中选择一个子集

- lowercase 格式化字符串为小写

- uppercase 格式化字符串为大写

- orderBy  根据某个表达式排列数组

#### AngularJs Service
在AngularJs中 服务是一个函数或是对象。$http 是 AngularJS 中的一个核心服务，用于读取远程服务器的数据
