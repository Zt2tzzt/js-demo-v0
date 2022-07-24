/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-10-20 09:40:42
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-10-20 09:47:33
 * @LastEditContent:
 */
// request.js
function requestData(url) {
  // 异步请求的代码, 会被放入到 executor 中
  return new Promise((resolve, reject) => {
    // 模拟网络请求
    setTimeout(() => {
      // 拿到请求的结果
      // url传入的是zzt, 请求成功
      if (url === 'zzt') {
        // 成功
        let names = ['abc', 'cba', 'nba']
        resolve(names)
      } else {
        // 失败
        let errMessage = '请求失败, url错误'
        reject(errMessage)
      }
    }, 3000)
  })
}

const promise = requestData('zzt')
promise.then((res) => {
  console.log('请求成功', res)
}, (err) => {
  console.log('请求失败', err)
})