/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-09-22 13:43:36
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-09-22 13:45:49
 * @LastEditContent: 
 */
// 'use strict';

var message = 'Hello World'
console.log(message)

// 静默错误
true.foo = 'abc'

function foo() {
  'use strict';
  true.foo = 'abc'
}
foo()