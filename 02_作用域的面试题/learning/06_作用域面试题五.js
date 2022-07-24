/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2022-01-13 09:27:20
 * @LastEditors: ZeT1an
 * @LastEditTime: 2022-01-15 14:00:10
 * @LastEditContent: 
 */
var n = 100

function foo1() {
	console.log(n);
}

function foo2() {
	var n = 200
	console.log(n);
	foo1()
}

foo2()
console.log(n);

// 200
// 100
// 100