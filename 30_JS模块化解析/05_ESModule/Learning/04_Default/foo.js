/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-11-04 14:07:50
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-11-04 14:20:42
 * @LastEditContent:
 */
const name = 'zzt'
const age = 18
const foo = 'foo value'

// 1. 默认导出的方式一:
/* export {
  name as default,
  age,
  foo
} */

// 2. 默认导出的方式二
export default foo

// 注意: 默认导出只能有一个