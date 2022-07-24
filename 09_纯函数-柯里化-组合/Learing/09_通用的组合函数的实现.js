/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-09-22 13:18:35
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-09-22 13:29:47
 * @LastEditContent: 
 */
function ztCompose(...fns) {
  var length = fns.length
  for (var i=0; i<length; i++) {
    if (typeof fns[i] !== 'function') {
      throw new TypeError('Expected arguments are functions')
    }
  }

  function compose (...args) {
    var index = 0
    var result = length ? fns[index].apply(this, args) : args
    while(++index < length) {
      result = fns[index].call(this, result)
    }
    return result
  }
  return compose
}

var myCompose = (...fns) => {
  for (var i=0; i<fns.length; i++) {
    if (typeof fns[i] !== 'function') {
      throw new TypeError('Expected arguments are functions')
    }
  }
  return (...args) => {
    var index = 0
    var result = fns.length ? fns[index].apply(this, args) : args
    while(++index < fns.length) {
      result = fns[index].call(this, result)
    }
    return result
  }
}

function double(m) {
  return m * 2
}
function square(n) {
  return n ** 2
}
// var newFn = ztCompose(double, square)
var newFn = myCompose(double, square)
console.log(newFn(10))