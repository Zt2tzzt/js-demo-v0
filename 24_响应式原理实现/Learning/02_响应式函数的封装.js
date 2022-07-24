/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-10-17 22:43:44
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-10-17 22:49:24
 * @LastEditContent:
 */
// 封装一个响应式函数
let reactiveFns = []
function watchFn(fn) {
  reactiveFns.push(fn)
}

// 对象的响应式
const obj = {
  name: 'zzt',
  age: 18
}

watchFn(function () {

  const newName = obj.name
  console.log('你好啊, 李银河')
  console.log('Hello World')
  console.log(obj.name)
})

watchFn(function () {
  console.log(obj.name, 'demo function --------')
})

function bar() {
  console.log('普通的其他函数')
  console.log('这个函数不需要有任何响应式')
}

obj.name = 'Lingard'
reactiveFns.forEach(fn => {
  fn()
})