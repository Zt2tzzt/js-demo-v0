/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-09-24 10:18:18
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-09-24 10:18:18
 * @LastEditContent: 
 */
function object(obj) {
  function Func() {}
  Func.prototype = obj
  return new Func()
}