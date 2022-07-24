/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-09-18 16:34:42
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-09-18 16:41:03
 * @LastEditContent: 
 */
function foo(el) {
  console.log(el, this.id)
}

var obj = {
  id: 'awesome'
}

var nums = [1, 2, 3]
nums.forEach(foo, obj);

nums.forEach(element => {
  console.log(element, this)
});