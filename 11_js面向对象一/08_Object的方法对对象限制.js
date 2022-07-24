/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-09-22 15:58:01
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-09-22 16:36:39
 * @LastEditContent: 
 */
var obj = {
  name: 'zzt',
  age: 18
}
// 1.禁止对象继续添加新的属性
/* Object.preventExtensions(obj)

obj.height = 1.88
obj.address = '广州市'
console.log(obj) */

// 2.禁止对象 配置 / 删除 里面的属性
/* for (var key in obj) {
  Object.defineProperty(obj, key, {
    configurable: false,
    enumerable: true,
    writable: true,
    value: obj[key]
  })
} */

/* Object.seal(obj)
obj.address = '株洲市'
console.log(obj)
delete obj.name
console.log(obj.name) */

// 3.让属性不可以修改(write: false)
Object.freeze(obj)
obj.name = 'Lingard'
obj.address = '株洲市'
console.log(obj)
console.log(obj.name)

