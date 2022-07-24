/*
 * @Description: file content
 * @Author: ZeTian
 * @Date: 2021-11-17 11:17:04
 * @LastEditors: ZeT1an
 * @LastEditTime: 2022-05-01 14:51:04
 * @LastEditContent:
 */
const spanEl = document.querySelector('.span')
spanEl.addEventListener('click', (event) => {
  console.log('span元素被点击：', event)
  console.log('事件的类型：', event.type)
  console.log('事件的元素：', event.target, event.currentTarget)
  console.log('事件发生的位置：', event.offsetX, event.offsetY)
})

const containerEl = document.querySelector('.container')
containerEl.addEventListener('click', (event) => {
  console.log('container元素被点击：', event.target, event.currentTarget)
})

// 常件的方法
// preventDefault
const aEl = document.querySelector('a')
aEl.addEventListener('click', (event) => {
  event.preventDefault()
})
