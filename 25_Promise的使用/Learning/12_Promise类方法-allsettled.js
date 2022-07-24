/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-10-22 11:16:33
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-10-22 11:21:01
 * @LastEditContent:
 */
// 创建多个 Promise
const p1 = new Promise((resovle, reject) => {
  setTimeout(() => {
    resovle(11111)
  }, 1000)
})

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve(22222)
    reject(22222)
  }, 2000);
})

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(33333)
  }, 3000);
})

// allSettled
Promise.allSettled([p2, p1, p3]).then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})
