/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2021-12-22 15:11:38
 * @LastEditors: ZeT1an
 * @LastEditTime: 2022-02-22 09:07:00
 * @LastEditContent: 
 */
import { debounce } from "./utils.js";

let counter = 0

function inputChange(event) {
	console.log(`第${++counter}次发送请求`, this, event);
	return 111
}
const _debounce = debounce(inputChange, 1000, false)

function debounceChange(...args) {
	_debounce.apply(this, args).then(res => {
		console.log('接收到返回值', res);
	})
}
function debounceCancel() {
	_debounce.cancel()
}

const inputel = document.querySelector('#input')
inputel.oninput = debounceChange
const btnel = document.querySelector('#cancel')
btnel.onclick = debounceCancel