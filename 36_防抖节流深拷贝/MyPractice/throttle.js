/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2021-11-29 13:52:04
 * @LastEditors: ZeT1an
 * @LastEditTime: 2021-11-29 14:02:28
 * @LastEditContent:
 */
import { throttle } from './utils.js'

let counter = 0
function inputchange(event) {
  console.log(`第${++counter}次发送请求`, this, event)
  return 111
}

const _throttle = throttle(inputchange, 2000)
function throttlechange(...args) {
  _throttle.apply(this, args).then(res => {
    console.log('获取返回值', res)
  })
}

const inputel = document.querySelector('#input')
inputel.oninput = throttlechange
