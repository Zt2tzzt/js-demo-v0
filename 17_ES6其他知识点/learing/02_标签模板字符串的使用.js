/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-10-09 09:41:39
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-10-09 09:45:05
 * @LastEditContent: 
 */
// 第一个参数,依然是模板字符串中的整个字符串, 只是被切成多块, 放到了一个数组中
// 第二个参数是模块字符串中, 第一个 ${}
function foo(m, n, x) {
  console.log(m, n, x, '-------')
}

foo('Hello', 'World')

// 另外调用函数的方式: 标签模板字符串
foo``
foo`Hello World`
const name = 'zzt'
const age = 18
foo`Hello${name}Wo${agey}rld`