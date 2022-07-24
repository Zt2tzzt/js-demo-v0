/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-09-21 18:25:11
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-09-21 18:27:23
 * @LastEditContent: 
 */
function sum(...nums) {
  console.log(nums)
}

sum(10)
sum(10, 20)
sum(10, 20, 30)
sum(10, 20, 30, 40, 50)

// 展开运算符
var names = ['abc', 'cba', 'nba']
// var newNames = [...names]
function foo(name1, name2, name3) {}
foo(...names)