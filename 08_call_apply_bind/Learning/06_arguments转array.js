/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-09-22 09:44:56
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-09-22 10:13:48
 * @LastEditContent: 
 */
function foo(num1, num2) {
  // 1.自己遍历
  /* var newArr = []
  for (var i=0; i<arguments.length; i++) {
    newArr.push(arguments[i] * 10)
  }
  console.log(newArr) */

  // 2.arguments 转成 array 类型
  // 2.1. 自己遍历 arguments 中所有元素

  // 2.2. Array.prototype.slice 将 arguments 转成 array
  var newArr2 = Array.prototype.slice.call(arguments)
  console.log(newArr2)

  var newArr3 = [].slice.call(arguments)
  console.log(newArr3)

  // 2.3. ES6的语法
  var newArr4 = Array.from(arguments)
  console.log(newArr4)
  var newArr5 = [...arguments]
  console.log(newArr5)
}

// foo(10, 20, 30, 40, 50)

// 额外补充的知识点：Array 中的 slice 实现
Array.prototype.ztslice = function(start, end) {
  var arr = this
  start = start || 0
  end = end || arr.length
  var newArray = []
  for (var i=start; i<end; i++) {
    newArray.push(arr[i])
  }
  return newArray
}

var result = Array.prototype.ztslice.call(['aaa', 'bbb', 'ccc'], 1, 2)
console.log(result)

var names = ['aaa', 'bbb', 'ccc', 'ddd']
var newNames = names.slice(1, 3)
console.log(newNames)
