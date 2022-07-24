/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2021-11-22 20:20:36
 * @LastEditors: ZeT1an
 * @LastEditTime: 2021-11-22 20:44:19
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
  // 判断传入的 originValue 是否是一个对象类型, 如果不是，函数停止运行，并返回 originValue
  if (!isObject(originValue)) {
    return originValue
  }

  const newObject = {}
  for (const key in originValue) {
    newObject[key] = deepClone(originValue[key])
  }
  return newObject
}

// 测试代码
const obj = {
  name: 'zzt',
  age: 18,
  friend: {
    name: 'Lingard',
    address: {
      city: 'Manchester'
    }
  }
}
const newObj = deepClone(obj)
console.log(newObj === obj)
obj.friend.name = 'Salah'
obj.friend.address.city = 'liverpool'
console.log(newObj1)


