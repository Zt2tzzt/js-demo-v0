/*
 * @Description: file content
 * @Author: ZeTian
 * @Date: 2021-11-17 08:57:10
 * @LastEditors: ZeTian
 * @LastEditTime: 2021-11-17 09:00:17
 * @LastEditContent:
 */
document.addEventListener('click', () => {
  console.log('document被点击')
})

const divEl = document.querySelector('#box')
const spanEl = document.querySelector('.content')

divEl.addEventListener('click', () => {
  console.log('div元素被点击')
})

spanEl.addEventListener('click', () => {
  console.log('span元素被点击')
})