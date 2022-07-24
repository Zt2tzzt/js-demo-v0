/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-09-19 16:19:18
 * @LastEditors: ZeT1an
 * @LastEditTime: 2022-05-23 21:16:46
 * @LastEditContent: 
 */
function foo() {
  var a = b = 10
  // => 会转成下面两行代码
  // var a = 10
  // b = 10
}

foo()
console.log(a);
console.log(b)

// 报错：a is not defined
// 10