/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-09-19 20:43:06
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-09-20 17:57:24
 * @LastEditContent: 
 */
// 1. setTimeout
/* function ztSetTimeout(fn) {
  fn.call('abc')
}

ztSetTimeout(function() {
  console.log(this)
})
setTimeout(() => {
  console.log(this)
}, 2000); */

// 2.监听点击
/* const boxDiv = document.querySelector('.box')
boxDiv.onclick = function() {
  console.log(this) // div元素本身
}

boxDiv.addEventListener('click', function() {
  console.log(this) // div元素本身
}) */

// 3.数组.forEach / map / filter / find
var names = ['abc', 'cba', 'nba']
names.forEach(function(item) {
  console.log(item, this)
}, 'abc')
names.map(function(item) {
  console.log(item, this)
}, 'cba')