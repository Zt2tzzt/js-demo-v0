/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-11-04 14:36:33
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-11-04 14:48:02
 * @LastEditContent:
 */
/* import {name, age, foo} from './foo.js'
console.log(name) */

// import 函数返回的结果是一个Promise, 所以是异步的
import('./foo.js').then(res => {
  console.log('res:', res.name)
})
console.log('后续的代码都是不会运行的')

// ES11 新特性
// meta 属性本身也是一个对象: {url: '当前模块所在的路径'}
console.log(import.meta)