/*
 * @Description: file content
 * @Author: ZeTian
 * @Date: 2021-11-17 10:07:46
 * @LastEditors: ZeT1an
 * @LastEditTime: 2022-05-01 14:36:35
 * @LastEditContent:
 */
function divClick() {
  console.log('div元素被点击2')
}

const divEl = document.querySelector('.box')
// DOM0
divEl.onclick = function () {
  console.log('div元素被点击3')
}

// DOM2
divEl.addEventListener('click', () => {
  console.log('div元素被点击4')
})
divEl.addEventListener('click', () => {
  console.log('div元素被点击5')
})
divEl.addEventListener('click', () => {
  console.log('div元素被点击6')
})