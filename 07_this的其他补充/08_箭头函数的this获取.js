/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-09-21 09:42:34
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-09-21 09:48:43
 * @LastEditContent: 
 */
// 1.测试箭头函数中 this 指向
var name = 'zzt'

var foo = () => {
  console.log(this)
}
foo()

var obj = {foo: foo}
obj.foo()
foo.call('abc')

// 2.应用场景
var obj = {
  data: [],
  getData: function() {
    // 发送网络请求，将结果放到上面data属性中
    // 箭头函数之前的解决方案
    var _this = this
    setTimeout(function() {
      var result = ['abc', 'cba', 'nba']
      _this.data = result
    }, 2000)

    // 箭头函数之后
    setTimeout(() => {
      var result = ['abc', 'cba', 'nba']
      this.data = result
    }, 2000)
  }
}