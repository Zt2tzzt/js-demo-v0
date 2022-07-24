/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-10-14 10:45:39
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-10-14 10:52:23
 * @LastEditContent:
 */
// ES12: FinalizationRegistry类
// FinalizationRegistry 对象可以让你在对象被垃圾回收时请求一个回调
const finalRegistry = new FinalizationRegistry(value => {
  console.log('注册在finalRegistry的对象，某一个被销毁', value)
})

let obj = { name: 'zzt' }
let info = { age: 18 }

finalRegistry.register(obj, 'obj')
finalRegistry.register(info, 'info')

obj = null
info = null