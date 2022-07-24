/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2022-01-09 17:05:52
 * @LastEditors: ZeT1an
 * @LastEditTime: 2022-01-09 18:24:00
 * @LastEditContent: 
 */

/**
 * 高级语言分为编译型语言和解释性语言
 * 	编译型：C,C++,Java。将代码编译成可执行文件，再执行
 * 	解释性：Javascript，Python。边读源代码别解释，再做执行
 */

/**
 * 访问网站过程：
 * 域名 -> dns解析 -> ip地址
 */

/**
 * 浏览器的4大内核：
 * Gecko，早期NetScape的Mozilla，FireFox浏览器使用
 * Trident：微软公司开发，用于IE4-IE11，edge浏览器已转用Blink
 * WebKit：苹果基于KHTML开发，开源的，用于Safari,Google Chrome早期也在使用
 * Blink：是WebKit的分支，Google开发，用于Chrome，Edge，Opera等浏览器
 * 4个别称：
 * 排版引擎（layout engine），浏览器引擎（Browser engine），页面渲染引擎（rendering engine），样板引擎
 */

/**
 * 为什么需要Javascript引擎呢4点
 * 1.Javascript是高级语言，都是需要转成机器指令来执行的
 * 2.Javascript代码代码也同样没法直接交给浏览器或Node执行，最终要被CPU执行
 * 3.CPU只认识自己的指令集，实际上是机器语言
 * 4.所以需要Javascript引擎将JS代码转换成CPU能识别的指令集
 */

/**
 * 常见的Javascript引擎，4个并介绍
 * 1.SpiderMonkey，最早由Brendan Eich开发
 * 2.Chakra：由微软开发，用于IE4-IE11
 * 3.JavascriptCore，webkit中的JS引擎，由苹果开发
 * 4.V8，由Chrome开发，使得Chrome浏览器在众多浏览器中脱颖而出
 */

/**
 * 浏览器内核与JS引擎的关系，以Webkit举例，2点
 * webkit中包含webCore和JavascriptCore
 * webCore：负责解析HTML，排版，布局，渲染等等相关工作
 * JavascriptCore，负责解析JS代码
 */

/**
 * V8引擎执行的细节，4点
 * 1.Blink会将源码交给V8引擎，Stream对源码进行编码转换
 * 2.Scanner对源码进行词法分析，词法分析后生成tokens
 * 3.Parser模块对Tokens进行语法分析，转成AST树结构
 * 		Parse直接将tokens转成AST树结构
 * 		PreParser称之为预解析，为什么需要预解析
 * 			1.嫔妃所有的JS代码在一开始就会执行，对所有JS代码解析会影响网页加载速度
 * 			2.V8引擎实现了Lazy Parsing（延迟解析）的方案，它的作用是将不必要的函数进行预解析，而对函数的全量解析是在函数被调用时才会进行
 * 4.生成的AST树，会被ignition转成字节码（bytecode），之后的古城解释代码的执行过程。
 */
