/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-09-22 17:13:40
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-09-22 17:17:45
 * @LastEditContent: 
 */
var pi = {
  name: '张三',
  age: 18,
  height: 1.88,
  address: '广州市',
  eating() {
    console.log(this.name + '在吃东西')
  },
  running() {
    console.log(this.name + '在跑步')
  }
}

var p2 = {
  name: '李四',
  age: 20,
  height: 1.98,
  address: '北京市',
  eating() {
    console.log(this.name + '在吃东西')
  },
  running() {
    console.log(this.name + '在跑步')
  }
}

var p3 = {
  name: '王五',
  age: 18,
  height: 1.78,
  address: '上海市',
  eating() {
    console.log(this.name, '在吃东西')
  },
  running() {
    console.log(this.name, '在跑步')
  }
}