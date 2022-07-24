/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-10-12 11:31:23
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-10-12 13:52:11
 * @LastEditContent:
 */
// 1.JavaScript中对象中是不能使用对象来作为key的
const obj1 = { name: 'zzt' }
const obj2 = { name: 'Lingard' }

/* const info = {
  [obj1]: 'aaa',
  [obj2]: 'bbb'
}
console.log(info) */

// 2.Map允许我们使用对象类型来作为key
// 构造方法的使用
const map = new Map()
map.set(obj1, 'aaa')
map.set(obj2, 'bbb')
map.set(1, 'ccc')
console.log(map)

// 使用常规的Map构造函数可以将一个二维键值对数组转换成一个Map对象
const map2 = new Map([[obj1, 'aaa'], [obj2, 'bbb'], [2, 'ddd']])
console.log(map2)

// 3.常见的属性和方法
console.log(map2.size)

// set
map2.set('zzt', 'eee')

// get(key)
console.log(map2.get('zzt'))

// has(key)
console.log(map2.has('zzt'))

// delete
map2.delete('zzt')
console.log(map2)

// 4.遍历map
// forEach里，value是第一个参数，key是第二个参数
map2.forEach((value, key) => {
  console.log(value, key)
})
// item是包含key，value的数组
for (const item of map2) {
  console.log(item[0], item[1])
}
// 用结构拿到key，value
for (const [key, value] of map2) {
  console.log(key, value)
}

// clear
map2.clear()
console.log(map2)