/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-10-14 09:20:15
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-10-14 09:43:26
 * @LastEditContent:
 */
// 1.flat的使用
const nums = [10, 20, [2, 9], [[30, 40], [10, 40]], 70, [55, 88]]
const newNums = nums.flat()
console.log(newNums)

const newNums2 = nums.flat(2)
console.log(newNums2)

// 2.flatMap的使用
const nums2 = [10, 20, 30]
const newNums3 = nums2.flatMap(ele => {
  return ele * 2
})
const newNums4 = nums2.map(ele => {
  return ele * 2
})
console.log(newNums3)
console.log(newNums4)

// 3.flatMap的应用场景
const message = ['Hello World', 'hello lyh', 'my name is zzt']
const words = message.flatMap(ele => {
  return ele.split(' ')
})
console.log(words)