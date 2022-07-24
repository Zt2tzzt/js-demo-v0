/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-10-12 14:09:04
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-10-12 14:21:41
 * @LastEditContent:
 */
// 应用场景 (vue3响应式与哪里)
const obj1 = {
  name: 'zzt',
  age: 18
}

function obj1NameFn1() {
  console.log('obj1NameFn1被执行')
}
function obj1NameFn2() {
  console.log('obj1NameFn1被执2')
}
function obj1AgeFn1() {
  console.log('obj1AgeFn1被执行')
}
function obj1AgeFn2() {
  console.log('obj1AgeFn2被执行')
}

const obj2 = {
  name: 'Lingard',
  height: 1.88,
  address: '曼彻斯特'
}
function obj2NameFn1() {
  console.log('obj2NameFn1被执行')
}
function obj2NameFn2() {
  conso
  le.log('obj2NameFn1被执2')
}


// 1.创建Weakmap
const myweakmap = new WeakMap()
// 2.收集依赖结构
// 2.1.对obj1收集的数据结构
const obj1Map = new Map()
obj1Map.set('name', [obj1NameFn1, obj1NameFn2])
obj1Map.set('age', [obj1AgeFn1, obj1AgeFn2])
myweakmap.set(obj1, obj1Map)

// 2.2.对obj2收集的数据结构
const obj2Map = new Map()
obj2Map.set('name', [obj2NameFn1, obj2NameFn2])
myweakmap.set(obj2, obj2Map)

// 3.弱国obj1.name发生了改变
// Proxy / Object.defineproperty
obj1.name = 'Ronaldo'
const targetMap = myweakmap.get(obj1)
const fns = targetMap.get('name')
fns.forEach(fn => fn())