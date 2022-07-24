/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2021-12-22 15:40:11
 * @LastEditors: ZeT1an
 * @LastEditTime: 2021-12-22 15:58:47
 * @LastEditContent: 
 */
import { throttle } from './utils.js'
let counter = 0
function inputChange(event) {
	console.log(`第${++counter}次发送请求`, this, event);
	return 111
}

const _throttle = throttle(inputChange, 1000, {leading: true, trailing: false})
function throttleChange(...args) {
	_throttle.apply(this, args).then(res => {
		console.log('接收到返回值', res);
	})
}
function throttleCancel() {
	_throttle.cancel()
}

const inputel = document.querySelector('#input')
inputel.oninput = throttleChange
const btnel = document.querySelector('#cancel')
btnel.onclick = throttleCancel