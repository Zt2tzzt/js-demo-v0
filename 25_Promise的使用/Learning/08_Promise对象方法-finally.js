/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-10-22 09:55:31
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-10-22 09:58:18
 * @LastEditContent:
 */
const promise = new Promise((resolve, reject) => {
  // resolve('resolve message')
  reject('reject message')
})

promise.then(res => {
  console.log('res:', res)
}).catch(err => {
  console.log('err:', err)
}).finally(() => {
  console.log('finally code executor')
})