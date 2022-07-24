/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-09-22 14:58:33
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-09-22 14:59:36
 * @LastEditContent: 
 */
var obj = {
  name: 'zzt',
  age: 18
}
// 属性描述符是一个对象
Object.defineProperty(obj, 'height', {
  // 很多配置
  value: 1.88
})
console.log(obj)
console.log(obj.height)