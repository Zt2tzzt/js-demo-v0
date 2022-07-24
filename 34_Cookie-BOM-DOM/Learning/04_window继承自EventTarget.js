/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-11-14 17:06:07
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-11-14 17:25:26
 * @LastEditContent:
 */
const clickHandler = () => {
  console.log('window发生了点击')
}

window.addEventListener('click', clickHandler)
window.removeEventListener('click', clickHandler)

window.addEventListener('zzt', () => {
  console.log('监听到了 zzt 事件')
})

window.dispatchEvent(new Event('zzt'))