/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-09-19 17:12:54
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-09-19 17:40:38
 * @LastEditContent: 
 */
var nums = [10, 5, 11, 100, 55]

/* var newNums = []
for (var i=0; i<nums.length; i++) {
  var num = nums[i]
  if (num % 2 === 0) {
    newNums.push(num)
  }
}
console.log(newNums) */

// 函数和方法的区别
// 函数function：独立的function，那么称之为一个函数
function foo() {}
// 方法method：当我们的一个函数，属于某个对象时，我们称这个函数是这个对象的方法。
var obj = {
  foo: function() {}
}
obj.foo()

// 1. filter: 过滤
// [10, 5, 11, 100, 55]
// 10 => false => 不会被放到newNums
// 5 => false => 不会被放到newNums
// 11 => false => 不会被放到newNums
// 100 => false => 不会被放到newNums
// 55 => false => 不会被放到newNums
var newNums = nums.filter(function(item) {
  return item % 2 === 0 // 偶数
})
// console.log(newNums)

// 2. map: 映射
// [10, 5, 11, 100, 55]
var newNums2 = nums.map(function(item) {
  return item * 10
})
// console.log(newNums2)

// 3. forEach: 迭代，没有返回值
nums.forEach(function(item) {
  // console.log(item)
  item * 10
})
// console.log(newNums3)
// console.log(nums)

// 4. find / findIndex 返回数组中满足条件的第一个值 / 索引，否则返回undefined / -1
// es6 ~ 12
var item = nums.find(function(item) {
  return item === 11
})
// console.log(item)

var friends = [
  {name: 'zzt', age: 18},
  {name: 'messi', age: 35},
  {name: 'Ronaldo', age: 37},
  {name: 'Lingard', age: 30},
]

var findFriend = friends.find(function(item) {
  return item.name === 'Lingard'
})
// console.log(findFriend)

// 5. reduce: 累加
// nums.reduce
// [10, 5, 11, 100, 55]
/* var total = 0
for (var i=0; i<nums.length; i++) {
  total += nums[i]
}
console.log(total) */

var total = nums.reduce(function(preValue, item) {
  return preValue + item
}, 0)
console.log(total)