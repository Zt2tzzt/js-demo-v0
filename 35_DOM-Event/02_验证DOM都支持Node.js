/*
 * @Description: file content
 * @Author: ZeTian
 * @Date: 2021-11-17 09:06:45
 * @LastEditors: ZeTian
 * @LastEditTime: 2021-11-17 09:38:43
 * @LastEditContent:
 */
const divEl = document.querySelector('#box')
const spanEl = document.querySelector('.content')

// 常见属性
console.log(divEl.nodeName, spanEl.nodeName)
console.log(divEl.nodeType, spanEl.nodeType)
console.log(divEl.nodeValue, spanEl.nodeValue)

// childNodes
const spanChildNodes = spanEl.childNodes
const textNode = spanChildNodes[0]
console.log(textNode.nodeValue)

// 常见的方法
const strongEl = document.createElement('strong')
strongEl.textContent = '我是strong元素'
divEl.appendChild(strongEl)

// 注意事项：document对象
document.body.appendChild(strongEl)