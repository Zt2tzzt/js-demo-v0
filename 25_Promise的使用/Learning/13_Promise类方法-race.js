/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-10-22 11:22:20
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-10-22 11:27:57
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

// race: 竞技 / 竞赛
// 只需要一个 Promise 变成 fulfilled 状态，那么就结束
// 意外：
Promise.race([p1, p2, p3]).then(res => {
  console.log('res:', res)
}).catch(err => {
  console.log('err:', err)
})
