/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-10-28 14:39:05
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-10-28 14:47:33
 * @LastEditContent:
 */
async function foo() {
  console.log('foo function start~')
  console.log('中间代码~')
  console.log('foo function end')

  // 1.返回一个值
  // 2.返回 thenable
  /* return {
    then(resolve, reject) {
      resolve('hahahah')
    }
  } */

  // 3.返回 Promise
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('hahahah')
    }, 2000);
  })
}

// 异步函数的返回值一定是一个 Promise、
const promise = foo()
promise.then(res => {
  console.log('promise then function exec:', res)
})