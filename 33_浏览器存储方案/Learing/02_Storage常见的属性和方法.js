/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-11-11 11:06:12
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-11-11 13:09:16
 * @LastEditContent:
 */
// 1. setItem
localStorage.setItem('name', 'zzt')
localStorage.setItem('age', 18)

// 2.length
console.log(localStorage.length)
for (let i = 0; i < localStorage.length; i++) {
  const key = localStorage.key(i)
  console.log(localStorage.getItem(key))
}

// 3.key 方法
console.log(localStorage.key(0))

// 4. getItem(key)
console.log(localStorage.getItem('age'))

// 5. removeItem
localStorage.removeItem('age')

// 6. clear 方法
localStorage.clear()