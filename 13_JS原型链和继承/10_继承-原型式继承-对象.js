/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-09-27 16:01:46
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-09-27 17:06:56
 * @LastEditContent: 
 */
var obj = {
  name: 'zzt',
  age: 18
}

var info = Object.create(obj)

// 原型式继承函数
function createObject1(p) {
  var newObj = {}
  Object.setPrototypeOf(newObj, 0)
  return newObj
}

function createObject2(o) {
  function Fn() {}
  Fn.prototype = 0
  var newObj = new Fn()
  return newObj
}
