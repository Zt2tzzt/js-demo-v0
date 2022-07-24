/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-10-28 13:28:50
 * @LastEditors: ZeT1an
 * @LastEditTime: 2021-12-07 22:04:03
 * @LastEditContent:
 */
// 模拟 request.js
function requestData(url) {
  // 异步请求的代码会被放到 executer 中
  return new Promise((resolve, reject) => {
    // 模拟网络请求
    setTimeout(() => {
      // 模拟网络请求
      resolve(url)
    }, 2000);
  })
}
/**
 * 需求：
 * 1> url: zzt -> res: zzt
 * 2> url: res + 'aaa' -> res: zztaaa
 * 3> url: res + 'bbb' -> res: zztaaabbb
 */
// 1. 第一种方案，多次回调，回调地址
/* requestData('zzt').then(res => {
  requestData(res + 'aaa').then(res => {
    requestData(res + 'bbb').then(res => {
      console.log(res)
    })
  })
}) */

// 2. 第二种解决方案，Promise 中 then 的返回值来解决
/* requestData('zzt').then(res => {
  return requestData(res + 'aaa')
}).then(res => {
  return requestData(res + 'bbb')
}).then(res => {
  console.log(res)
}) */

// 3.第三种方案：Promise + generator 实现
function* genData() {
  const res1 = yield requestData('zzt')
  const res2 = yield requestData(res1 + 'aaa')
  const res3 = yield requestData(res2 + 'bbb')
  console.log(res3)
}
// 1> 手动执行生成器函数
/* const generator = genData()
generator.next().value.then(res => {
  generator.next(res).value.then(res => {
    generator.next(res).value.then(res => {
      generator.next(res)
    })
  })
}) */
// 2> 自己封装了一个自动执行的函数
function execGenerator(genFn) {
  const generator = genFn()
  function exec(res) {
    const result = generator.next(res)
    if (result.done) {
      return result.value
    }
    result.value.then(res => {
      exec(res)
    })
  }
  exec()
}
execGenerator(gebData)
// 3> 第三方包 co 自动执行
// TJ co / n(nvm) / commander / express / koa (egg)
/* const co = require('co')
co(genData) */

// 第四种方案： await / async
/* async function getData() {
  const res1 = await requestData('zzt')
  const res2 = await requestData(res1 + 'aaa')
  const res3 = await requestData(res2 + 'bbb')
  console.log(res3)
}
getData() */