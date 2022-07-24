/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-10-09 10:27:24
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-10-09 10:29:51
 * @LastEditContent: 
 */
const info = {
  name: 'zzt',
  friend: {name: 'Lingard'}
}

const obj = { ...info, name: 'Rice' }
console.log(obj)
obj.friend.name = 'james'

console.log(info.friend.name)