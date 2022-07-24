/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-09-19 20:01:27
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-09-19 20:12:01
 * @LastEditContent: 
 */
// 1.foo直接调用和 apply / call 调用的不同在于 this 绑定的不同
// foo 直接调用，指向的是全局对象(window)
/* function foo() {
  console.log('函数被调用了', this)
}
foo() */

// call / aplly 是可以指定 this 的绑定对象
/* var obj = {
  name: 'obj'
}
foo.call(obj)
foo.apply(obj)
foo.apply('aaaa') */

// 2.call 和 apply有什么区别
function sum(num1, num2, num3) {
  console.log(num1 + num2 + num3, this)
}
sum.call('call', 20, 30, 40)
sum.apply('apply', [20, 30, 40])

// 3.call 和 apply 在执行函数时，是可以明确绑定this，这个绑定规则称之为显示绑定
