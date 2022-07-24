/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-10-14 10:21:04
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-10-14 10:27:00
 * @LastEditContent: 
 */
// ES11: 空值合并运算 ??
const foo = 0
const bar = foo || 'default value'
// ?? 使0和''的布尔值运算为true
const baz = foo ?? 'default value'

console.log(bar)
console.log(baz)

// TS 是 JS 的超集