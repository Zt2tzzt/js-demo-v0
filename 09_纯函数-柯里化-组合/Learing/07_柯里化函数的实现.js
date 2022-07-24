/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-09-22 11:16:54
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-09-22 13:11:28
 * @LastEditContent: 
 */
function add1(x, y, z) {
  return x + y + z
}

/* function add2(x, y, z) {
  x = x + 2
  y = y * 2
  z = z * z
  return x + y + z
}

function makeAdder(count) {
  count = count * count
  return function(num) {
    return count + num
  }
}

function log(date, type, message) {
  console.log(`[${date.getHours()}:${date.getMinutes()}][${type}]：[${message}]`)
} */

// 柯里化函数的实现 ztCurring
function ztCurring(fn) {
  function curried(...args) {
    // 判断当前已经接受的参数的个数，可以参数本身需要接受的参数是否已经一致了
    // 1.当已经传入的参数，大于等于需要传入的参数时，就执行函数
    if (args.length >= fn.length) {
      // fn(...args)
      // fn.call(this, args)
      return fn.apply(this, args)
    } else {
      // 没有达到个数时，需要返回一个新的函数，继续来接受的参数
      function curried2(...args2) {
        // 接收到参数后，需要递归调用curried来检查函数的个数是否达标
        return curried.apply(this, args.concat(args2))
      }
      return curried2
    }
  }
  return curried
}

var myCurring = (fn) => {
  var curried = (...args) => {
    if (args.length >=fn.length) {
      return fn.apply(this, args)
    } else {
      return (...args2) => curried(...args, ...args2)
    }
  }
  return curried
}

var curryAdd = myCurring(add1)
// var curryAdd = ztCurring(add1)

console.log(curryAdd(10, 20, 30))
console.log(curryAdd(10, 20)(30))
console.log(curryAdd(10)(20)(30))