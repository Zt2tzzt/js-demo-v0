/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-10-17 20:20:11
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-10-17 20:37:35
 * @LastEditContent:
 */
const obj = {
  name: 'zzt',
  age: 18
}

/* Object.defineProperty(obj, 'name', {
  get() {
    console.log('监听到obj对象的name属性被访问了')
  },
  set(newValue) {
    console.log('监听到obj对象的name属性被设置了')

  }
}) */

Object.keys(obj).forEach(key => {
  let value = obj[key]

  Object.defineProperty(obj, key, {
    get() {
      console.log(`监听到obj对象的${key}属性被访问了`)
      return value
    },
    set(newValue) {
      console.log(`监听到obj对象的${key}属性被设置了`)
      value = newValue
    }
  })
})

obj.name = 'kobe'
obj.age = 30

console.log(obj.name)
console.log(obj.age)

obj.height = 1.88