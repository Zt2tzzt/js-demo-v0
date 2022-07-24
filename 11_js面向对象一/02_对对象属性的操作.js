/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-09-22 14:51:48
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-09-22 14:54:56
 * @LastEditContent: 
 */
var obj = {
  name: 'zzt',
  age: 18
}

// 获取属性
console.log(obj.name)
// 给属性赋值
obj.name = 'Lingard'
console.log(obj.name)

// 删除属性
delete obj.name
console.log(obj)

// 需求: 对属性进行操作时,进行一些限制
// 原则: 不允许某一属性被赋值 / 不允许某个属性被删除 / 不允许某些属性在遍历时,被遍历出来

// 遍历属性
for (var key in obj) {
  console.log(key)
}