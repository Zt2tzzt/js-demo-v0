/*
 * @Description: file content
 * @Author: ZeTian
 * @Date: 2021-11-17 10:29:13
 * @LastEditors: ZeT1an
 * @LastEditTime: 2022-05-01 14:50:22
 * @LastEditContent:
 */
const spanEl = document.querySelector('.span')
const containerEl = document.querySelector('.container')

spanEl.addEventListener('click', () => {
  console.log('事件冒泡：span元素被点击了')
})

containerEl.addEventListener('click', () => {
  console.log('事件冒泡：container元素被点击了')
})

document.body.addEventListener('click', () => {
  console.log('事件冒泡：body元素被点击了')
})

// 再次监听
spanEl.addEventListener('click', (event) => {
  console.log('事件捕获：span元素被点击了')
  event.stopPropagation()
}, true)

containerEl.addEventListener('click', () => {
  console.log('事件捕获：container元素被点击了')
}, true)

document.body.addEventListener('click', (event) => {
  console.log('事件捕获：body元素被点击')
}, true)