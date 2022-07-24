/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-09-19 15:51:15
 * @LastEditors: ZeT1an
 * @LastEditTime: 2022-01-15 13:58:34
 * @LastEditContent: 
 */
var a = 100

function foo() {
  console.log(a)
  return
  var a = 200
}

foo()

// undefined