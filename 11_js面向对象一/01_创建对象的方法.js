/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-09-22 14:22:28
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-09-22 14:26:19
 * @LastEditContent: 
 */
// 创建一个对象,对某一个人进行抽象
// 1.创建方式一:通过 new Object() 创建
var obj = new Object()
obj.name = 'zzt'
obj.age = 18
obj.height = 1.99
obj.running = function() {
  console.log(this.name + '在跑步')
}

// 2.创建方式二:字面量形式
var info = {
  name: 'Lingard',
  age: 40,
  height: 1.88,
  eating: function() {
    console.log(this.name + '在吃东西')
  }
}