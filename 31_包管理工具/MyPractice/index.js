/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2022-01-26 16:53:49
 * @LastEditors: ZeT1an
 * @LastEditTime: 2022-08-11 15:23:01
 * @LastEditContent: 
 */
/**
 * npm工具最早用于node，全称Node Package Manager
 */

/**
 * npm管理的包存放在registry上
 */

/**
 * 如何生成npm的配置文件 package.json，2个方法
 * 1.手动使用npm init创建项目
 * 2.通过脚手架创建项目，脚手架会生成package.json，并且里面有相关的配置。
 */

/**
 * 了解package.json文件的2个必填属性，和11个常件的属性含义。
 * 必填：
 * 1.name: 项目名称
 * 2.version：当前版本号
 * 常件：
 * 1.description：描述信息
 * 4.author：作者（发布时用）
 * 5.license：开源协议（发布时用）
 * 6.private：是否私有，true，npm不能发布
 * 7.main：设置程序入口：（与webpack打包入口不冲突）
 * 8.script：配置脚本命令。
 * 		对于常见的start，test，stop，restart可以省略掉run直接通过npm start方式运行
 * 9.dependencies：开发和生产环境都需要的依赖包，通过npm install X安装
 * 10.devDependencies：开发所需依赖包，通过npm install X -D安装
 * 11.peerDependencies：该项目的宿主包。
 */

/**
 * 依赖的版本管理，2点理解
 * 1.尊崇semver（semantic version）规范，X.Y.Z
 * 		X主版本号（major），可能不兼容之前的版本。
 * 		Y次版本号（minor），新功能增加，向下兼容。
 * 		Z修订号（patch），没有新功能，修复了bug。
 * 2.^和~的区别
 * 		^表示X保持不变，Y和Z永远安装最新版本。
 * 		~表示X和Y保持不变，Z永远安装最新版本。
 */

/**
 * 如果要安装依赖的新版本，删除 package-lock.json 文件，再执行 npm install
 */

/**
 * 理解npm install的原理图，分情况说明它的原理
 * 执行npm install会检测是否有package-lock.json文件
 * 没有该文件：
 * 		1.构建依赖关系（分析依赖关系层级，依赖包是否有被多次引用）
 * 		2.从registry仓库下载压缩包。
 * 		3.获取压缩包后进行缓存（npm5之后）。
 * 		4.将压缩包解压到node_module下。
 * 有该文件：
 * 		1.检测package-lock.json中包的版本是否和package.json中描述一致。
 * 			1.不一致，重新构建依赖关系。
 * 			2.一致，查找缓存。
 * 				1.没找到，从registry仓库中下载。
 * 				2.找到，获取压缩文件并解压到node_module中。
 */

/**
 * 了解package-lock.json中，属性的含义。
 * 1.name：项目名称。
 * 2.version：项目版本。
 * 3.lockfileVersion：lock文件的版本。
 * 4.require：跟踪模块的依赖关系。
 * 5.dependencies：项目依赖。
 * 		integrity：用来从缓存中获取索引，再通过索引获取压缩文件。
 */

/**
 * yarn和npm不要同时使用，yarn用来管理依赖的文件是yarn.lock
 */

/**
 * 如何使用项目局部依赖的命令，以webpack举例
 * 1.明确找到node_module下的webpack来执行。
 * 		./node_module/.bin/webpack --version
 * 2.在script定义脚本，来执行webpack
 * 		"script": {
 * 			"webpack": "webpack --version"
 * 		}
 * 3.使用npx
 * 		npx webpack --version
 */

/**
 * 了解在npm发布自己的包，7步流程
 */