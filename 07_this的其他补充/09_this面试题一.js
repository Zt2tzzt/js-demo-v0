/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-09-21 09:49:48
 * @LastEditors: ZeT1an
 * @LastEditTime: 2022-03-29 11:08:24
 * @LastEditContent: 
 */
var name = 'window'

var person = {
  name: 'person',
  sayName: function () {
    console.log(this.name)
  }
}

function sayName() {
  var sss = person.sayName;
  sss()
  person.sayName();
  (person.sayName)();
  (b = person.sayName)()
}

sayName()

// window
// person
// person
// window
