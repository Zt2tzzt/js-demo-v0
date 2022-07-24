/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-09-19 19:15:32
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-09-19 19:21:54
 * @LastEditContent: 
 */
function createFnArray() {
  var arr = new Array(1024 * 1024).fill(1)
  return function() {
    console.log(arr.length)
  }
}

// var arrayFn = createFnArray()
// arrayFn = null

var arrayFns = []
for (var i=0; i<100; i++) {
  setTimeout(() => {
    arrayFns.push(createFnArray())
  }, i * 100)
}

// arrayFns = null

setTimeout(() => {
  for (var i=0; i<50; i++) {
    setTimeout(() => {
      arrayFns.pop()
    }, 100 * i);
  }
}, 10000)
