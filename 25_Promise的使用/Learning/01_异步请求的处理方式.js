/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-10-20 09:14:34
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-10-20 09:27:12
 * @LastEditContent:
 */
/**
 * 这种回调的方式有很多的弊端：
 * 1. 如果是我们自己封装的requestData, 那么我们在封装的时候必须要自己设计好， callback名称, 并且使用好
 * 2. 如果我们使用的是别人封装的requestData或者一些第三方库, 那么我们必须去看别人的源码或者文档, 才知道他这个函数需要怎么去获取到结果
 */

// request.js
function requestData(url, successCallback, failureCallback) {
  // 模拟网络请求
  setTimeout(() => {
    // 拿到请求的结果
    // url传入的是zzt, 请求成功
    if (url === 'zzt') {
      // 成功
      let names = ['abc', 'cba', 'nba']
      successCallback(names)
    } else {
      // 否则请求失败
      let errMessage = '请求失败, url错误'
      failureCallback(errMessage)
    }
  }, 3000);
}

// main.js
requestData('Lingard', (res) => {
  console.log(res)
}, (err) => {
  console.log(err)
})

// 更规范, 更好的方案, Promise承诺(规范好了所有的代码编写逻辑)
function requestData2() {
  return '承诺'
}

const chengnuo = requestData()