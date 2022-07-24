/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2021-12-11 11:11:46
 * @LastEditors: ZeT1an
 * @LastEditTime: 2021-12-11 11:34:41
 * @LastEditContent:
 */
// 写一个简单的生成器函数
/* function* foo(param) {
  const value1 = 100 * param
  const param2 = yield value1

  const value2 = 200 * param2
  const param3 = yield value2

  const value3 = 100 * param3
  yield value3

}
const generator = foo(1)
console.log(generator[Symbol.iterator])
console.log(generator.next())
console.log(generator.next(2))
console.log(generator.next(3))
console.log(generator.next(4))
console.log(generator.next(5))
console.log(generator.next(6))
 */
/**
 * 生成器函数和普通函数的3点区别
 *  1. 生成器函数 function 后加 *
 *  2. 生成器函数使用 yield 控制函数执行流程
 *  3. 生成器函数返回一个Generator，它既是迭代器，又是一个可迭代对象
 */

// 使用生成器函数封装一个可以迭代的自定义类
class Classroom {
  constructor(addr, name, students) {
    this.addr = addr
    this.name = name
    this.students = students
  }
  entry(newStudent) {
    this.students.push(newStudent)
  }
  *[Symbol.iterator]() {
    yield* this.students
  }
}

// 封装一个自动执行生成器函数，用来实现 async await 效果
const requestData = (url) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(url)
    }, 1000);
  })
}

function* getData() {
  const res1 = yield requestData('zzt')
  const res2 = yield requestData(res1 + 'aaa')
  const res3 = yield requestData(res2 + 'bbb')
  console.log(res3)
}

function execGeneratorAuto(execFn) {
  const generator = execFn()

  function exec(res) {
    const result = generator.next(res)
    if (result.done) {
      return result.value
    }
    result.value.then(res => {
      exec(res)
    })
  }
  exec()
}

execGeneratorAuto(getData)
