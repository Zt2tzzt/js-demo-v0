/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-11-11 10:57:31
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-11-11 10:59:37
 * @LastEditContent:
 */
const loginBtn = document.querySelector('button')
loginBtn.onclick = function () {
  localStorage.setItem('name', 'localStorage')
  sessionStorage.setItem('name', 'sessionStorage')
}