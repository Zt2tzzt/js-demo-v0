/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-10-28 14:58:35
 * @LastEditors: ZeT1an
 * @LastEditTime: 2022-01-21 16:42:29
 * @LastEditContent:
 */
// 1. await 后面跟上表达式
function requestData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve(2222)
      reject(1111)
    }, 2000);
  })
}
async function foo() {
  const res1 = await requestData()
  console.log('后面的代码1', res1)
  console.log('后面的代码2')
  console.log('后面的代码3')

  const res2 = await requestData()
  console.log('res2后面的代码', res2)
}

foo()

// 2. await 跟上其它的值
async function bar() {
  const res1 = await 123
  const res2 = await {
    then(resolve, reject) {
      resolve('abc')
    }
  }
  const res3 = await new Promise((resolve, reject) => {
    resolve('zzt')
    reject('zzt err')
  })
  console.log('res1:', res1)
  console.log('res2:', res2)
  console.log('res3:', res3)
}
bar()

// 3.reject 值
async function baz() {
  const res1 = await requestData()
  console.log("res1:", res1)
}
baz().catch(err => {
  console.log('err', err)
})