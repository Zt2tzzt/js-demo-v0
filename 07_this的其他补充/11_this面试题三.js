/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-09-21 12:10:46
 * @LastEditors: ZeT1an
 * @LastEditTime: 2022-03-29 11:15:39
 * @LastEditContent: 
 */
var name = 'window'

function Person(name) {
  this.name = name
  this.foo1 = function () {
    console.log(this.name)
  }
  this.foo2 = () => console.log(this.name)
  this.foo3 = function () {
    return function () {
      console.log(this.name)
    }
  }
  this.foo4 = function () {
    return () => {
      console.log(this.name)
    }
  }
}

var person1 = new Person('person1')
var person2 = new Person('person2')

person1.foo1()
person1.foo1.call(person2)

person1.foo2()
person1.foo2.call(person2)

person1.foo3()()
person1.foo3.call(person2)()
person1.foo3().call(person2)

person1.foo4()()
person1.foo4.call(person2)()
person1.foo4().call(person2)

// person1
// person2

// person1
// person1

// window
// window
// person2

// person1
// person2
// person1
