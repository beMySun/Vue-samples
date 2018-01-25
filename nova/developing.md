

#2017-06-23

  * @import '~@/assets/scss/main';
  * 不加 ～ 会出现引入错误
  * https://github.com/vuejs/vue-loader/issues/193

  > vue-html-loader and css-loader translates non-root URLs to relative paths. In order to treat it like a module path, prefix it with ~:

   <img class="logo" src="~assets/logo.png">

#2017-06-24
  * 数据流程需要引入store 统一管理数据状态 ，actions， ...
  * 图标管理

#2017-06-25
  * 引入 vux 组件库
  * 修复了二次弹窗问题  

#2017-06-27
  
  * 替换包管理工具 npm -> yarn
  * 常用的命令：
    -  npm install === yarn —— install 安装是默认行为。
    -  npm install taco --save === yarn add taco   taco 包立即被保存到 package.json 中。
    -  npm install taco@latest --save === yarn add taco
    -  npm uninstall taco --save === yarn remove taco
       在 npm 中，可以使用 npm config set save true 设置 — -save 为默认行为，但这对多数开发者而言并非显而易见的。在 yarn 中，在package.json 中添加（add）和移除（remove）等行为是默认的。
    -  npm install taco --save-dev === yarn add taco --dev
    -  npm update --save === yarn upgrade. 注意： npm update --save 在版本 3.11 中似乎有点问题
    -  npm install taco --global === yarn global add taco —— 一如既往，请谨慎使用 global 标记。

#2017-06-29
  - 添加新成员 
  - second


## LABjs、RequireJS、SeaJS 哪个最好用？为什么？

LABjs 的核心是 LAB（Loading and Blocking）：Loading 指异步并行加载，Blocking 是指同步等待执行。LABjs 通过优雅的语法（script 和 wait）实现了这两大特性，核心价值是性能优化。LABjs 是一个文件加载器。

RequireJS 和 SeaJS 则是模块加载器，倡导的是一种模块化开发理念，核心价值是让 JavaScript 的模块化开发变得更简单自然。

模块加载器一般可降级为文件加载器用，因此使用 RequireJS 和 SeaJS，也可以达成 LABjs 的性能优化目的。

RequireJS 和 SeaJS 都是很不错的模块加载器，两者区别如下：

1. 两者定位有差异。RequireJS 想成为浏览器端的模块加载器，同时也想成为 Rhino / Node 等环境的模块加载器。SeaJS 则专注于 Web 浏览器端，同时通过 Node 扩展的方式可以很方便跑在 Node 服务器端

2. 两者遵循的标准有差异。RequireJS 遵循的是 AMD（异步模块定义）规范，SeaJS 遵循的是 CMD （通用模块定义）规范。规范的不同，导致了两者 API 的不同。SeaJS 更简洁优雅，更贴近 CommonJS Modules/1.1 和 Node Modules 规范。

3. 两者社区理念有差异。RequireJS 在尝试让第三方类库修改自身来支持 RequireJS，目前只有少数社区采纳。SeaJS 不强推，而采用自主封装的方式来“海纳百川”，目前已有较成熟的封装策略。

4. 两者代码质量有差异。RequireJS 是没有明显的 bug，SeaJS 是明显没有 bug。

5. 两者对调试等的支持有差异。SeaJS 通过插件，可以实现 Fiddler 中自动映射的功能，还可以实现自动 combo 等功能，非常方便便捷。RequireJS 无这方面的支持。

6. 两者的插件机制有差异。RequireJS 采取的是在源码中预留接口的形式，源码中留有为插件而写的代码。SeaJS 采取的插件机制则与 Node 的方式一致：开放自身，让插件开发者可直接访问或修改，从而非常灵活，可以实现各种类型的插件。

还有不少细节差异就不多说了。

总之，SeaJS 从 API 到实现，都比 RequireJS 更简洁优雅。如果说 RequireJS 是 Prototype 类库的话，则 SeaJS 是 jQuery 类库。

最后，向 RequireJS 致敬！RequireJS 和 SeaJS 是好兄弟，一起努力推广模块化开发思想，这才是最重要的。