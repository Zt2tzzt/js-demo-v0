/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-10-22 09:24:15
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-10-22 09:50:33
 * @LastEditContent:
 */
/* const promise1 = new Promise((resolve, reject) => {
  resolve(11111)
  reject('rejected status')
  throw new Error('rejected status')
}) */

// 1.当 executor 抛出异常时，也是会调用错误（拒绝）捕获的回调函数的
/* promise1.then(res => { }, err => {
  console.log('err:', err)
  console.log('------------')
}) */

// 2.通过 catch 方法来传入错误（拒绝）捕获的回调函数
// promise1 / a+ 规范
/* promise1.catch(err => {
  console.log('err:', err)
})
promise1.then(res => {
  return new Promise((resolve, reject) => {
    reject('then rejected status')
  })
  throw new Error('error message')
}).catch(err => {
  console.log('err:', err)
}) */

// 3.拒绝捕获的问题
/* promise1.then(res => {

}, err => {
  console.log('err:', err)
}) */
/* const promise2 = new Promise((resolve, reject) => {
  reject('11111')
  resolve()
})

promise2.then(res => {
}).then(res => {
  throw new Error('then error message')
}).catch(err => {
  console.log('err:', err)
})

promise2.catch(err => {
  console.log('err:', err)
}) */

// 4.catch 方法的返回值
const promise3 = new Promise((resolve, reject) => {
  reject('1111111')
})
promise3.then(res => {
  console.log('res:', res)
}).catch(err => {
  console.log('err:', err)
}).then(res => {
  console.log('res result:', res)
}).catch(err => {
  console.log('err result:', err)
})