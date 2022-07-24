/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-09-19 19:23:13
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-09-19 19:26:24
 * @LastEditContent: 
 */
// 从某些角度来说，开发中如果没有this，很多的问题，我们也是有解决方案的。
// 但是没有this，会让我们编写代码，变得非常的不方便
var obj100 = {
  name: 'zzt',
  eating: function() {
    console.log(this.name + '在吃东西')
  },
  running: function() {
    console.log(this.name + '在跑步')
  },
  studying: function() {
    console.log(this.name + '在学习')
  }
}
