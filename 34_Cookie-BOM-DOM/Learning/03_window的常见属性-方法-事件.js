/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-11-14 16:41:42
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-11-14 17:04:16
 * @LastEditContent:
 */
// 1. 常见的属性
console.log(window.screenX) // 浏览器到系统左边界的水品距离
console.log(window.screenY) // 浏览器顶部到系统顶部的垂直距离

window.addEventListener('scroll', () => {
  console.log(window.screenX, window.screenY)
})

// 浏览器整体高度
console.log(window.outerHeight)
// 浏览器内部可见高度
console.log(window.innerHeight)

// 2. 常见的方法
const scrollBtn = document.querySelector('#scroll')
scrollBtn.onclick = function () {
  // window.scrollTo({ top: 2000 })
  // window.open('https://www.baidu.com', '_self')
  window.close()
}

// 3.常见的事件
window.onload = function () {
  console.log('window 窗口加载完毕~')
}

window.onfocus = function () {
  console.log('window 窗口获取焦点')
}

window.onblur = function () {
  console.log('window 窗口失去焦点~')
}

const hasChangeBtn = document.querySelector('#hashchange')
hasChangeBtn.onclick = function () {
  location.hash = 'aaaa'
}
window.onhashchange = function () {
  console.log('hash发生了改变')
}