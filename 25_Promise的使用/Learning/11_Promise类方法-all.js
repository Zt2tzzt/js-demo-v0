/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-10-22 11:07:50
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-10-22 11:24:31
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
    resolve(22222)
    // reject(22222)
  }, 2000);
})

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(33333)
  }, 3000);
})

// 需求：当所有的 Promise 都变成 fulfilled 时，再拿到结果
// 意外：在拿到所有结果之前，有一个 promise 变成了 rejected，那么整个 promise 是 rejected
Promise.all([p2, p1, p3, 'aaaa']).then(res => {
  console.log(res)
}).catch(err => {
  console.log('err:', err)
})