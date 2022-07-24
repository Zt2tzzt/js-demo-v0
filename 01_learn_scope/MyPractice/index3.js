/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2022-01-09 21:38:13
 * @LastEditors: ZeT1an
 * @LastEditTime: 2022-01-09 22:14:54
 * @LastEditContent: 
 */

/**
 * 高级语言分为编译型语言和解释型语言
 * 编译型：C, C++, Java，将代码编译成可执行文件，再执行。
 * 解释性：Javascript，Python，边读源码边做解释，再执行
 */

/**
 * 访问网站过程：域名 -> dns解析 -> ip地址
 */

/**
 * 浏览器的4大内核，以及基本介绍
 * 1.Gecko：最早用于NetScape公司的Mozilla，FireFox浏览器
 * 2.Trident：微软开发，用于IE4-IE11。Edge已转用Blink。
 * 3.WebKit，苹果基于KHTML开发，开源的，用于Safari，Chrome早期也在使用。
 * 4.Blink：Webkit的一个分支，由Google开发，用于Chrome，Edge，Opera浏览器
 * 4个别称：
 * 排版引擎（layout engine），浏览器引擎（Browser engine），页面渲染引擎（Rendering engine），样板引擎
 */

/**
 * 理解浏览器的渲染过程图
 * 													DOM
 * HTML -> HTMLParser -> DOM Tree									Layout布局
 * 															Attachement -> Render Tree -> Painting -> Display
 * style sheets -> CSSParser -> Styles Rules
 */

/**
 * 为什么需要Javascript引擎呢，4点
 * 1.高级编程语言，都是需要转成机器指令来执行的。
 * 2.JS不能直接交给浏览器或者Node来执行，最终还是需要被CPU来执行的
 * 3.但是CPU只认识自己的指令集，实际上是机器语言，才能被CPU来执行
 * 4.所有我们需要JS引擎将JS翻译成CPU指令来执行
 */

/**
 * 常见的Javascript引擎，4个，并介绍
 * SpiderMonkey，第一款JS引擎，由brendan Eich开发。
 * Chakra：由微软开发，用于IE浏览器
 * JavascriptCore：WebKit中的JS引擎，apple公司开发
 * V8：Google开发的强大的Javascript引擎，也帮助Chrome浏览器从众多浏览器中脱颖而出。
 */

/**
 * 浏览器内核与JS引擎的关系：以WebKit举例，2点
 * WebKit由2部分组成
 * 	WebCore，用来解析HTML，处理布局，渲染等工作。
 * 	JavascriptCore：用来解析执行JS代码。
 */

/**
 * 理解V8引擎的原理图
 */

/**
 * V8执行的细节，4点
 * 1.Blink将JS代码交给V8引擎，Stream将代码进行编码转换。
 * 2.Scanner对代码进行词法分析，词法分析将代码转换成tokens。
 * 3.Parser将Tokens转成AST结构
 */
