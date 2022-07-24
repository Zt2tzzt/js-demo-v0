/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-09-19 16:27:03
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-09-19 16:28:04
 * @LastEditContent: 
 */
var obj = { name: 'zzt' }

var info = { name: 'messi', friend: obj }

var p = { name: 'james', friend: obj }

// 引用计数存在一个很大的弊端：循环引用
var obj1 = { friend: obj2 }
var obj2 = { friend: obj1 }