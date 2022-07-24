/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2021-11-22 20:13:29
 * @LastEditors: ZeT1an
 * @LastEditTime: 2021-11-22 20:19:05
 * @LastEditContent:
 */
const s1 = Symbol()
const s2 = Symbol()

const obj = {
  name: 'zzt',
  firend: {
    name: 'Lingard'
  },
  foo: function () {
    console.log('foo function')
  },
  [s1]: 'abc',
  s2: s2
}

// obj.inner = obj

const info = JSON.parse(JSON.stringify(obj))
console.log(info === obj)
obj.firend.name = 'Ronaldo'
console.log(info)