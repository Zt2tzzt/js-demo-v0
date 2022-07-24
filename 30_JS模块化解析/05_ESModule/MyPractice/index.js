/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2022-01-25 10:17:13
 * @LastEditors: ZeT1an
 * @LastEditTime: 2022-04-26 09:23:34
 * @LastEditContent: 
 */
/**
 * ESModule和CommonJS的不同，2点不同
 * 1.一方面它使用了import和export关键字
 * 2.另一方面它采用了编译器的静态分析，并且也加入了动态引用方式。
 */

/**
 * 采用ESModule将自动采用严格模式
 */

/**
 * export导出的3种方式：
 * 1.在语句声明前面直接加上export关键字。
 * 2.将所有需要导出的标识符，放到export后面的{}中.（{}不是对象的字面量）
 * 3.导出时给标识符起一个别名。
 */

/**
 * import导入的3种方式：
 * 1.import {标识符列表} from '模块'（{}不是对象字面量，里面只是存放标识符列表内容）
 * 2.导入时给标识符取别名。
 * 3.通过*将模块功能放到一个模块功能对象上
 */

/**
 * export和import结合使用，可以指定统一规范，方便阅读。
 */
export { sum as mySum } from './foo.js'

/**
 * 默认导出default export的4个特点
 * 1.export默认导出时，可以不用指定名字。
 * 2.import导入时不需要使用{}，指定自定义名称。
 * 3.方便与现有的CommonJS规范相互操作。
 * 4.在一个模块中，只能有一个默认导出（default export）
 */

/**
 * 默认导出的2种写法
 */
const obj = { naem: 'linz', age: 28 }
export default obj
export {
	obj as default
}

/**
 * 为什么import加载一个模块，不能出现在其它逻辑代码中
 * 	因为ESModule在被JS引擎解析时，就必须要知道它的依赖关系。
 */

/**
 * 写一个import函数案例，引入模块案例
 */
import('./foo.js').then(foo => {
	foo.sum()
})

/**
 * import.meta是ES11新特性，是一个暴露JS模块特定上下文元数据属性的对象，对象中有url属性。
 */

/**
 * ESModule解析过程3个阶段
 * 1.构建（construction），
 * 		根据地址查找js文件，
 * 		并且下载（http/https协议），
 * 		将其解析（静态分析）为模块记录（Module Record，一种数据结构）
 * 2.实例化（instantiation）,
 * 		对模块记录进行实例化（创建一个对象），
 * 		并且分配内存空间（导入导出的东西在内存空间中能找到），
 * 		解析模块的导入和导出语句，把模块指向对应的内存地址。
 * 3.运行（Evalution），
 * 		运行代码，
 * 		计算值，
 * 		并且将值填充到内存地址中。
 */

/**
 * 理解ESModule解析过程分阶段图解。
 * 	1.构建（construction）的过程中会有Module Map保存文件的地址，使文件不会重复加载。
 * 	2.不允许导入的变量修改内存中的值。
 */

/**
 * ESModule和CommonJS能够相互导出导入吗？
 * 1.在浏览器中不能。
 * 2.node环境中对ESModule区分不同版本，早期不能，后期需要做特殊配置并将文件名后缀改为.ejs，最新版本中支持。
 * 3.基于webpack环境开发，支持。
 */