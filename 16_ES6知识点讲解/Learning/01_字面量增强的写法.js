/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-09-30 16:19:46
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-09-30 16:24:00
 * @LastEditContent: 
 */
var name = 'zzt'
var age = 18

var obj = {
  // 1,property shorthand (属性的简写)
  name,
  age,

  // 2.method shorthand (方法的简写)
  foo: function() {
    console.log(this)
  },
  bar() {
    console.log(this)
  },
  baz: () => {
    console.log(this)
  },

  // 3.computed property name (计算属性名)
  [name + 123]: 'hehehehehe'

}

obj.baz()
obj.bar()
obj.foo()

obj[name+123] = 'hahahah'
console.log(obj)