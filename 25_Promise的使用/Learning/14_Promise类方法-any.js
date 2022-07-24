/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-10-22 11:30:02
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-10-22 11:37:38
 * @LastEditContent:
 */
// 创建多个 Promise
const p1 = new Promise((resovle, reject) => {
  setTimeout(() => {
    resovle(11111)
  }, 3000)
})

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve(22222)
    reject(22222)
  }, 500);
})

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(33333)
  }, 1000);
})

// any 方法
Promise.any([p1, p2, p3]).then(res => {
  console.log('res:', res)
}).catch(err => {
  console.log('err:', err.errors)
})