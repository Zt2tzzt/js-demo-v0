/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-10-17 21:49:02
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-10-17 21:53:07
 * @LastEditContent:
 */
function foo() {

}

const fooProxy = new Proxy(foo, {
  apply(target, thisArg, argArray) {
    console.log('对foo函数进行了apply调用')
    return target.apply(thisArg, argArray)
  },
  construct(target, argArray, newTarget) {
    console.log('对foo函数进行了new调用')
    return new target(...argArray)
  }
})

fooProxy.apply({}, ['abc', 'cba'])
new fooProxy('abc', 'cba')