/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-09-22 15:00:53
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-09-22 15:17:53
 * @LastEditContent: 
 */
// name 和 age 虽然没有使用属性描述符来定义,但是它们也是具备对应的特性的
// value: 赋值的value
// configurable: true
// enumerable: true
// writable: true
var obj = {
  name: 'zzt',
  age: 18
}

// 根据属性描述符
// 用了属性描述符,那么会有默认属性
Object.defineProperty(obj, 'address', {
  // 很多配置
  value: '北京市', // 默认值 undefined
  configurable: false, // 默认值 false, 设为true时,该特殊不可删除 / 也不可以重新定义属性描述符
  enumerable: false, // 默认值为 false, 配置对应的属性,是否可以被枚举
  writable: false, // 默认值 false, 配置该属性是否可以赋值
})

// 测试 configurable 的作用
delete obj.address
console.log(obj.address)

// 测试 enumerable 的作用
console.log(obj)
for (var key in obj) {
  console.log(key)
}
console.log(Object.keys(obj))

// 测试 writable 的作用
obj.address = '上海市'
console.log(obj.address)