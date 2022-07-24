/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2021-11-23 16:03:33
 * @LastEditors: ZeT1an
 * @LastEditTime: 2021-11-24 11:18:59
 * @LastEditContent: 
 */
function isObjecy(value) {
  const valuetype = typeof value
  return (valuetype !== null) && (valuetype === 'object' || valuetype === 'function')
}

// 判断类型：Array, Set, Map, Function, Symbol, x
function deepClone(originvalue, weakmap = new WeakMap()) {
  if (originvalue instanceof Set) return new Set([...originvalue])

  if (originvalue instanceof Map) return new Map([...originvalue])

  if (typeof originvalue === 'function') return originvalue

  if (typeof originvalue === 'symbol') return Symbol(originvalue.description)

  if (!isObjecy(originvalue)) return originvalue

  if (weakmap.has(originvalue)) return weakmap.get(originvalue)

  const newObj = Array.isArray(originvalue) ? [] : {}
  weakmap.set(originvalue, newObj)
  for (const key in originvalue) {
    newObj[key] = deepClone(originvalue[key], weakmap)
  }
  for (const skey of Object.getOwnPropertySymbols(originvalue)) {
    newObj[skey] = deepClone(originvalue[skey], weakmap)
  }
  return newObj
}

// 测试代码
const s1 = Symbol('aaa')
const s2 = Symbol('bbb')

const obj = {
  name: 'zzt',
  age: 18,
  friend: {
    name: 'Lingard',
    address: {
      city: 'Manchester'
    }
  },
  bobbies: ['football', 'dance', 'rap'],
  foo: function (m, n) {
    console.log('foo function')
    console.log('100代码逻辑')
    return 123
  },
  // Symbol 作为 key 和 value
  [s1]: 'abc',
  s2: s2,
  set: new Set(['aaa', 'bbb', 'ccc']),
  map: new Map([['aaa', 'abc'], ['bbb', 'cba']])

}
const newObj = deepClone(obj)
console.log(newObj === obj)
obj.friend.name = 'Salah'
obj.friend.address.city = 'liverpool'
console.log(newObj)
console.log(newObj.s2 === obj.s2)