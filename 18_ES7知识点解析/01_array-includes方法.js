/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-10-12 14:24:01
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-10-12 14:31:44
 * @LastEditContent:
 */
const names = ['abc', 'cba', 'nba', 'mba', NaN]

if (names.indexOf('cba') !== -1) {
  console.log('包含cba元素')
}

// ES7 ES2016
if (names.includes('cba', 2)) {
  console.log('三位及以后包含cba元素')
}

console.log(names.indexOf(NaN))
if (names.indexOf(NaN) !== -1) {
  console.log('包含NaN')
}

if (names.includes(NaN)) {
  console.log('包含NaN')
}