/*
 * @Description: file content
 * @Author: ZeTian
 * @Date: 2021-11-17 09:59:51
 * @LastEditors: ZeTian
 * @LastEditTime: 2021-11-17 10:04:14
 * @LastEditContent:
 */
const divEl = document.querySelector('#box')

// 常见方法
console.log('id', divEl.id)
console.log('tagName', divEl.tagName)
console.log('children', divEl.children)
console.log('classList', divEl.classList)
console.log('clientWidth', divEl.clientWidth)
console.log('clientHeight', divEl.clientHeight)
console.log('offsetLeft', divEl.offsetLeft)
console.log('offsetTop', divEl.offsetTop)

// 常件的方法
const value = divEl.getAttribute('age')
console.log(value)
divEl.setAttribute('height', 1.88)