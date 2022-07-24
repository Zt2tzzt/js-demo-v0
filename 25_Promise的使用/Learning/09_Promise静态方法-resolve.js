/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-10-22 10:07:18
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-10-22 10:53:39
 * @LastEditContent:
 */
// 转成 Promise 对象
function foo() {
  const obj = { name: 'zzt' }
  return new Promise((resolve) => {
    resolve(obj)
  })
}
foo().then(res => {
  console.log('res:', res)
})

// 类的静态方法
const promise = Promise.resolve(new Promise((resolve, reject) => {
  resolve('111111')
}))
promise.then(res => {
  console.log('res:', res)
})

// 3.传入 thenable 对象
