/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-11-04 13:19:12
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-11-04 13:32:23
 * @LastEditContent:
 */
// 1. 导入方式一： 普通的导入
// import {} 不是对象， 是一种语法
/* import {name, age, foo} from './foo.js'
import {fName, fAge, fFoo} from './foo.js' */

// 2. 导入方式二： 起别名
// import {name as fName, age as fAge, foo as fFoo} from './foo.js'

// 3. 导入方式三： 将导出的所有内容放到一个标识符中
import * as foo from './foo.js'

console.log(foo.name)
console.log(foo.age)
foo.foo()

