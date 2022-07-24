/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-09-19 16:12:45
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-09-19 16:18:00
 * @LastEditContent: 
 */
function foo() {
  m = 100 // v8引擎，定义变量没加var，会将这个变量放入全局变量。
}

foo()
console.log(m)