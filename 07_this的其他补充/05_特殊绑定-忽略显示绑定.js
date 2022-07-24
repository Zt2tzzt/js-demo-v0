/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-09-20 18:28:08
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-09-20 18:29:11
 * @LastEditContent: 
 */
function foo() {
  console.log(this)
}

foo.apply('abc')
foo.apply({})

// apply / call / bind: 当传入 null / undefined，自动将 this 绑定成全局对象。
foo.apply(null)
foo.apply(undefined)

var bar = foo.bind(null)
bar()