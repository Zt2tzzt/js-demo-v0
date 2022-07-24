/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2021-12-16 11:16:27
 * @LastEditors: ZeT1an
 * @LastEditTime: 2022-01-15 10:42:09
 * @LastEditContent: 
 */
/* const btns = document.getElementsByTagName('button')

for (var i = 0; i < btns.length; i++) {
	(function (n) {
		btns[n].onclick = function () {
			console.log('第' + n + '个按钮点击');
		}
	})(i)
} */

const btns = document.getElementsByTagName('button')
for (var i = 0; i < btns.length; i++) {
	(function (n) {
		btns[n].onclick = function () {
			console.log('第' + n + '个按钮点击');
		}
	})(i)
}
