/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-10-12 11:21:46
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-10-12 11:29:20
 * @LastEditContent:
 */
const myWeakSet = new WeakSet()

// 1.区别一: 只能存放对象类型
// TypeError: Invalid value used in weak set
// myWeakSet.add(10)

// 强引用和弱引用的概念(看图)

// 2.区别二: 对对象是一个弱引用
let obj = {
  name: 'zzt'
}
myWeakSet.add(obj)

const set = new Set()
// 建立的是强引用
set.add(obj)

// 建立的是弱引用
myWeakSet.add(obj)

// 3.WeakSet的应用场景
const personSet = new WeakSet()
class Person {
  constructor() {
    personSet.add(this)
  }

  running() {
    if (!personSet.has(this)) {
      throw new Error('不能通过非构造方法创建出来的对象调用running方法')
    }
    console.log('running', this)
  }
}

let p = new Person()
p.running()
p.running.call({ name: 'zzt' })
p = null
