/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-09-30 16:25:26
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-09-30 16:28:32
 * @LastEditContent: 
 */
var names = ['abc', 'cba', 'nba']

// 对数组的结构
var [item1, item2, item3] = names
console.log(item1, item2, item3)

// 结构后面的元素
var [, , itemz] = names
console.log(itemz)

// 解构出一个元素, 后面的元素放到一个新数组
var [itemx, ...newNames] = names
console.log(itemx, newNames)

// 解构的默认值
var [itema, itemb, itemc, itemd = 'aaa'] = names
console.log(itemd)