/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-11-11 10:05:09
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-11-11 10:25:58
 * @LastEditContent:
 */
const obj = {
  name: 'zzt',
  age: 18,
  friends: {
    name: 'Lingard'
  },
  hobbies: ['篮球', '足球'],
  /* toJSON() {
    return '12345'
  } */
}

// 需求: 将上面对象转成 JSON 字符串
// 1. 直接转化
const jsonStrong1 = JSON.stringify(obj)
console.log(jsonStrong1)

// 2.stringify 第二个参数 replacer
// 2.1. 传入数组, 设定哪些需要转换
const jsonStrong2 = JSON.stringify(obj, ['name', 'friends'])
console.log(jsonStrong2)

// 2.2. 传入回调函数:
const jsonStrong3 = JSON.stringify(obj, (key, value) => {
  if (key === 'age') {
    return value + 1
  }
  return value
})
console.log(jsonStrong3)

// 3. stringify 第三参数 space
const jsonStrong4 = JSON.stringify(obj, null, 2)
console.log(jsonStrong4)

// 4. 如果 obj 对象中有 toJSON 方法, 直接输出 toJSON 方法返回值