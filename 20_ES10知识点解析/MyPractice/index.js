/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2021-12-21 10:25:04
 * @LastEditors: ZeT1an
 * @LastEditTime: 2021-12-29 09:03:23
 * @LastEditContent: 
 */
/**
 * flat和flatMap的使用（ES10）
 */
const arr1 = [1, 2, [3, 4], [[5, 6], [7, 8]], 9]
console.log(arr1.flat(2));
const arr2 = [10, 20, 30]
const newArr1 = arr2.map(ele => {
	return ele * 2
})
const newArr2 = arr2.flatMap((ele, index, map) => {
	console.log(index, map);
	return ele * 2
})
console.log(newArr1);
console.log(newArr2);
/**
 * flatMap的一个应用场景（ES10）
 */
const message = ['Hello world', 'Hello lingz', 'My name is Jesse']
const words = message.flatMap(ele => {
	return ele.split(' ')
})
console.log(words);

/**
 * flatMap的2项注意（ES10）
 * 	1.flatMap是先进性map操作，再做flat的操作
 * 	2.flatMap中的flat相当于深度为1
 */

/**
 * Object.fromEntries()的使用，（ES10）
 */
const obj = {
	name: 'lingz',
	age: 18,
	height: 1.88
}
const entries = Object.entries(obj)
const newObj = Object.fromEntries(entries)
console.log(newObj);
/**
 * 1个应用场景
 */
const queryStr = 'name=lingz&age=29&height=1.88'
const queryParams = new URLSearchParams(queryStr)
console.log(queryParams);
for (const param of queryParams) {
	console.log(param);
}
const paramObj = Object.fromEntries(queryParams)
console.log(paramObj);

/**
 * trimStart和trimEnd的使用（ES10）
 */
const trimStr = '    Hello Frog     '
console.log(trimStr.trim()); // 两端删除空白字符
console.log(trimStr.trimEnd()); // 末端删除空白字符
console.log(trimStr.trimStart()); // 开头删除空白字符