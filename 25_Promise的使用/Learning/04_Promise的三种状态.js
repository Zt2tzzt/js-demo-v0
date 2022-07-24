/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-10-20 09:50:21
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-10-20 09:57:49
 * @LastEditContent:
 */
const promise = new Promise((resolve, reject) => { })
promise.then(res => { }, err => { })

// 完全等价于下面的代码
// 注意: Promise状态一旦确定下来, 那么就是不可更改的(锁定)
new Promise((resolve, reject) => {
  // pending 状态: 肯定 / 悬而未决
  console.log('--------')
  reject() // 处于 rejected 状态(已拒绝状态)
  resolve() // 处于 fulfilled 状态(已敲定/兑现状态)
  console.log('++++++++')
}).then(res => {
  console.log('res', res)
}, err => {
  console.log('err', err)
})