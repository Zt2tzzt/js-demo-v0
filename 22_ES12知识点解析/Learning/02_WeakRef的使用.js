/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-10-14 10:53:19
 * @LastEditors: ZeT1an
 * @LastEditTime: 2021-12-12 13:34:44
 * @LastEditContent:
 */
// ES12: WeakRef类
// WeakRef.prototype.deref:
// > 如果原对象没有销毁, 那么可以获取到源对象
// > 如果原对象已经销毁, 那么获取到的是undefined
const finalRegistry = new FinalizationRegistry(value => {
	console.log('注册在finalRegistry的对象，某一个被销毁', value)
})

let obj = { name: 'zzt' }
let info = new WeakRef(obj)

finalRegistry.register(obj, 'obj')

obj = null

setTimeout(() => {
	console.log(info.deref()?.name)
}, 10000)