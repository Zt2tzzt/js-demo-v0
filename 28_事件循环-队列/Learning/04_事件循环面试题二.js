/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-11-01 10:36:33
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-11-01 10:43:44
 * @LastEditContent:
 */

async function async1() {
  console.log('async1 start')
  await async2();
  console.log('async1 end')
}

async function async2() {
  console.log('async2')
}

console.log('script start')

setTimeout(function () {
  console.log('setTimeout')
}, 0)

async1();

new Promise(function (resolve) {
  console.log('promise1')
  resolve();
}).then(function () {
  console.log('promise2')
})

console.log('script end')