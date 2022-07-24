/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-09-22 15:18:47
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-09-22 15:30:54
 * @LastEditContent: 
 */
var obj = {
  name: 'zzt',
  age: 18,
  _address: '北京市',
}

// 存取属性描述符
// 1.隐藏某一个私有属性, 不希望它被外界使用和赋值.
// 2.如果我们希望截获某一个属性它访问和设置值的过程, 也会使用存储属性描述符.
Object.defineProperty(obj, 'address', {
  enumerable: true,
  configurable: true,
  get() {
    foo()
    return this._address
  },
  set(value) {
    bar()
    this._address = value
  }
})

function foo() {
  console.log('获取了一次address的值')
}
function bar() {
  console.log('设置了address的值')
}

console.log(obj.address)
obj.address = '上海市'
console.log(obj.address)