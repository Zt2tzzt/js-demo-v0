/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-09-22 10:23:50
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-09-22 10:38:34
 * @LastEditContent: 
 */
var names = ['abc', 'cba', 'nba', 'dna']

// slice 只要给它传入一个 start / end，那么对于同一个数组来说，它会给我们返回确定的值
// slice 函数本身不会修改原来的数组
// slice -> this
// slice 函数本身就是一个纯函数
var newName1 = names.slice(0, 3)
console.log(newName1)
console.log(names)

// splice在执行时，有修改调用的数组对象本身，修改的这个操作，就是产生副作用
// splice不是一个纯函数
var newNames2 = names.splice(2)
console.log(newNames2)
console.log(names)