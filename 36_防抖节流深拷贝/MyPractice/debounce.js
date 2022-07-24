/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2021-11-29 13:39:13
 * @LastEditors: ZeT1an
 * @LastEditTime: 2021-11-29 13:49:13
 * @LastEditContent:
 */
import { debounce } from './utils.js'

let counter = 0
function inputchange(event) {
  console.log(`第${++counter}次发送请求`, this, event)
  return 111
}

const _debounce = debounce(inputchange, 2000, true)
function debouncechange(...args) {
  _debounce.apply(this, args).then(res => {
    console.log('获取返回值', res)
  })
}

const inputel = document.querySelector('#input')
inputel.oninput = debouncechange