/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-10-12 11:00:43
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-10-12 11:21:01
 * @LastEditContent: 
 */
// 10, 20, 40, 233
// 1. 创建Set结构
const myset = new Set()
myset.add(10)
myset.add(20)
myset.add(40)
myset.add(233)

myset.add(10)

// 2.添加对象的特备注意
myset.add({})
myset.add({})

const obj = {}
myset.add(obj)
myset.add(obj)

// console.log(myset)

// 3.对数组去重(去除重复的元素)
const arr = [33, 10, 26, 30, 33, 26]
/* const newArr = []
for (const item of arr) {
  if (newArr.indexOf(item) !== -1) {
    newArr.push(item)
  }
} */
const arrSet = new Set(arr)
const newArr1 = Array.from(arrSet)
const newArr2 = [...arrSet]
console.log(newArr1)
console.log(newArr2)

// 4.size属性
console.log(arrSet.size)

// 5.set的方法
// add
arrSet.add(100)
console.log(arrSet)

// delete
arrSet.delete(33)
console.log(arrSet)

console.log(arrSet.has(100))

// 6.对set进行遍历
arrSet.forEach(item => {
  console.log(item)
})

// 7.clear
arrSet.clear()
console.log(arrSet)