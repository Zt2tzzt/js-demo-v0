/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-11-02 23:57:51
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-11-02 23:57:52
 * @LastEditContent:
 */
const info = {
  name: 'zzt',
  age: 18,
  foo() {
    console.log('foo函数~')
  }
}
setTimeout(() => {
  console.log(info.name)
}, 2000);

module.exports = info