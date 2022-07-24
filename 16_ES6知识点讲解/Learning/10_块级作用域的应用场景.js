/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-10-01 14:57:31
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-10-01 15:04:06
 * @LastEditContent: 
 */
const btns = document.getElementsByTagName('button')

for(var i=0; i<btns.length; i++) {
  (function(n) {
    btns[n].onclick = function() {
      console.log(`第${n}个按钮被点击`)
    }
  })(i)
}

for(let i = 0; i<btns.length; i++) {
  btns[i].onclick = function() {
    console.log(`第${i}个按钮被点击`)
  }
}