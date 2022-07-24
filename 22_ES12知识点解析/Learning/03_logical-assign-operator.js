/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-10-14 13:22:25
 * @LastEditors: ZeT1an
 * @LastEditTime: 2021-12-03 11:07:31
 * @LastEditContent:
 */
// 1. ||= 逻辑或赋值运算
let msg = 0
// msg = msg || 'default value'
msg ||= 'default value'
console.log(msg)

// 2. && 逻辑与运算
/* const obj = {
  name: 'zzt',
  foo: function () {
    console.log('foo函数被调用')
  }
}
obj.foo && obj.foo() */

// &&=逻辑与赋值运算
let info = {
  name: 'zzt'
}
// 判断 info 是否为空, 不为空则取出info.name赋值给info
info &&= info.name
console.log(info)

// 3. ??= 落寂空赋值运算
let message = 0
message ??= 'default value'
console.log(message)