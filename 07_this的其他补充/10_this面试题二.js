/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-09-21 10:04:34
 * @LastEditors: ZeT1an
 * @LastEditTime: 2022-03-29 11:12:26
 * @LastEditContent: 
 */
var name = 'window'

var person1 = {
  name: 'person1',
  foo1: function () {
    console.log(this.name)
  },
  foo2: () => console.log(this.name),
  foo3: function () {
    return function () {
      console.log(this.name)
    }
  },
  foo4: function () {
    return () => {
      console.log(this.name)
    }
  }
}

var person2 = { name: 'person2' }

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

// window
// window

// window
// window
// person2

// person1
// person2
// person1
