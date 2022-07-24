/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2021-11-22 20:20:36
 * @LastEditors: ZeT1an
 * @LastEditTime: 2021-11-22 22:40:02
 * @LastEditContent:
 */
/**
 * @description: 此函数用于判断 value 类型是否为（对象/函数）
 * @Author: ZetT1an
 * @param {Object} value 待判断类型的值
 * @return {Boolean} 是（对象/函数）则返回true， 否则返回false
 */
function isObject(value) {
  const valueType = typeof value
  return (value !== null) && (valueType === 'object' || valueType === 'function')
}

/**
 * @description: 此函数用于（对象/函数）的深拷贝
 * @Author: ZeT1an
 * @param {Object} originValue 待深拷贝的（对象/函数）
 * @return {Object} 返回一个深拷贝后的对象
 */
function deepClone(originValue) {
  // 判断是否是一个 Set 类型
  if (originValue instanceof Set) {
    return new Set([...originValue])
  }

  // 判断是否是一个 Map 类型
  if (originValue instanceof Map) {
    return new Map([...originValue])
  }

  // 判断如果是 Symbol 的 value，那么创建一个新的 Symbol
  if (typeof originValue == 'symbol') {
    // 返回一个不同的 symbol 对象，如需返回相同的 symbol 对象，则这一步可省略
    return Symbol(originValue.description)
  }

  // 判断如果是函数类型，那么直接使用同一个函数
  if (typeof originValue == 'function') {
    return originValue
  }

  // 判断传入的 originValue 是否是一个对象类型, 如果不是，函数停止运行，并返回 originValue
  if (!isObject(originValue)) {
    return originValue
  }

  // 判断传入的是数组还是对象
  const newObject = Array.isArray(originValue) ? [] : {}
  // 遍历普通对象时，不会遍历 symbol 类型
  for (const key in originValue) {
    newObject[key] = deepClone(originValue[key])
  }
  // 对 Symbol 的 key 进行特殊处理
  const symbolkeys = Object.getOwnPropertySymbols(originValue)
  for (const skeys of symbolkeys) {
    newObject[skeys] = deepClone(originValue[skeys])
  }
  return newObject
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


