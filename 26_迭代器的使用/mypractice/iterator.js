/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2021-12-11 10:41:49
 * @LastEditors: ZeT1an
 * @LastEditTime: 2021-12-11 11:11:36
 * @LastEditContent: 
 */
// 写一个简单的可迭代对象
const iterableobj = {
  names: ['abc', 'cba', 'nba'],
  [Symbol.iterator]() {
    let index = 0
    return {
      next: () => {
        return index < this.names.length ? {
          done: false, value: this.names[index++]
        } : {
          done: true
        }
      },
      return: () => {
        console.log('迭代器终止执行~')
        return { done: true }
      }
    }
  }
}

// 封装一个可迭代的类
class Calssroom {
  constructor(address, name, students) {
    this.address = address
    this.name = name
    this.students = students
  }
  entry(newStudent) {
    this.students.push(newStudent)
  }
  [Symbol.iterator]() {
    let index = 0
    return {
      next: () => {
        return index < this.names.length ? {
          done: false, value: this.names[index++]
        } : {
          done: true
        }
      },
      return: () => {
        console.log('迭代器终止执行~')
        return { done: true }
      }
    }
  }
}

/**
 * 有哪些对象是原生可迭代对象?
 *  答：Array, Set, Map, String, Arguments, NodeList
 * 可迭代对象的应用场景有哪些：
 *  1. JS语法：for...of, yield*, 展开语法，解构赋值
 *  2. 创建某些对象：new Map([iterable]), new Set([iteraable])
 *  3. 用于一些特定的方法：Promise.all(iterable), Promise.race(iterable), Array.from(iterable)
 */
