/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-10-22 10:56:56
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-10-22 11:04:14
 * @LastEditContent:
 */
const promise = Promise.reject('rejected message')
// 相当于
const promise2 = new Promise((resolve, reject) => {
  reject('rejected message')
})

// 注意：无论传入什么值，都是一样的
const promise3 = Promise.reject(new Promise(() => { }))
promise3.then(res => {
  console.log('res:', res)
}).catch(err => {
  console.log('err:', err)
})