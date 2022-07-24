/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-11-14 18:06:15
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-11-14 18:09:51
 * @LastEditContent:
 */
const jumpBtn = document.querySelector('#jump')
jumpBtn.onclick = function () {
  location.herf = './demo.html'

  // 跳转（不刷新网页）
  history.pushState({ name: 'zzt' }, '', '/detail')
  // history.replaceState({ name: 'zzt' }, "", "/detail")
}