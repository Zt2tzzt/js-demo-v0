/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-11-04 13:14:45
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-11-04 13:18:55
 * @LastEditContent:
 */
// 1. 第一种方式： export 声明语句
/* export const name = 'zzt'
export const age = 18
export function foo() {console.log('foo function')}
export class Person {} */

// 2. 第二种方式： export 导出和声明分开
const name = 'zzt'
const age = 18
function foo() { console.log('foo function') }
// export {} 不是对象， 是一种语法
export {
  name, age, foo
}

// 3. 第三种方式： 第二种方式导出时起别名
/* export {
  name as fName,
  age as fAge,
  foo as fFoo
} */
