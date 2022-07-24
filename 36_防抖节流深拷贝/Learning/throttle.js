/*
 * @Description: file content
 * @Author: ZeTian
 * @Date: 2021-11-22 13:48:44
 * @LastEditors: ZeTian
 * @LastEditTime: 2021-11-22 15:06:41
 * @LastEditContent:
 */
import throttle from './11_throttle-v6-函数返回值.js'

let counter = 0
const inputEl = document.querySelector('input')
const inputChange = function (event) {
  console.log(`发送了第${++counter}次请求`, this, event)
  return 1111
}
const _throttle = throttle(inputChange, 2000, { leading: true, trailing: true })
// 函数返回Promise
const throttleChange = (...args) => {
  _throttle.apply(inputEl, args).then(res => {
    console.log('获取返回值:', res)
  })
}
// 节流处理
inputEl.oninput = throttleChange

// 取消功能
const cancelBtn = document.querySelector('#cancel')
cancelBtn.onclick = function () {
  _throttle.cancel()
}
