/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-11-04 10:39:33
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-11-04 11:16:55
 * @LastEditContent:
 */
require.config({
  baseUrl: '', // 默认是 ./src
  paths: {
    foo: './src/foo',
    bar: './src/bar'
  }
})

require(['foo', 'bar'], function (foo) {
  console.log('main', foo)
})