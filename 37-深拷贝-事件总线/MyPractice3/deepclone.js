/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2022-02-22 09:52:38
 * @LastEditors: ZeT1an
 * @LastEditTime: 2022-02-22 14:41:03
 * @LastEditContent: 
 */
function isNotObj(val) {
	// string, number, boolean, object, function, symbol, bigint, undefined
	return typeof val !== 'object'
}

// 考虑类型：Set, Map, Array, Symbol, 自引用
function deepclone(originVal, wmap = new WeakMap) {
	if (originVal instanceof Set) return new Set([...originVal])
	
	if (originVal instanceof Map) return new Map([...originVal])

	if (typeof originVal === 'symbol') return Symbol(originVal.description)

	if (isNotObj(originVal)) return originVal

	if (wmap.has(originVal)) return wmap.get(originVal)

	const newObj = Array.isArray(originVal) ? [] : {}

	wmap.set(originVal, newObj)

	for (const key in originVal) {
		newObj[key] = deepclone(originVal[key], wmap)
	}

	for (const skey of Object.getOwnPropertySymbols(originVal)) {
		newObj[skey] = deepclone(originVal[skey], wmap)
	}

	return newObj
}