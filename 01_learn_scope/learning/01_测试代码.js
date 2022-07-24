/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-09-18 16:47:37
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-09-18 16:48:38
 * @LastEditContent: 
 */
const name = 'zzt'
console.log(name)

function foo () {
  console.log('foo')
}

foo()

function outer () {
  function inner () {
    var inner = 'inner'
    console.log(inner)
  }
}

outer()