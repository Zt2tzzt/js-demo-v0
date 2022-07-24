/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2021-12-09 10:32:01
 * @LastEditors: ZeT1an
 * @LastEditTime: 2022-02-22 09:38:28
 * @LastEditContent:
 */
function isobject(value) {
  // typeof 可能的类型 string, boolean, number, function, object, symbol, bigint, undefined
  const valuetype = typeof value
  return (valuetype !== null) && (valuetype === 'object' || valuetype === 'function')
}
// 考虑类型：Array，Set, Map, Function, Symbol, 对象自引用
function deepclone(originvalue, weakmap = new weakmap()) {
  if (originvalue instanceof Set) return new Set([...originvalue])

  if (originvalue instanceof Map) return new Map([...originvalue])

  if (typeof originvalue === 'function') return originvalue

  if (typeof originvalue === 'symbol') return Symbol(originvalue.description)

  if (!isobject(originvalue)) return originvalue

  if (weakmap.has(originvalue)) return weakmap.get(originvalue)

  const newobj = Array.isArray(originvalue) ? [] : {}
  weakmap.set(originvalue, newobj) //-----------
  for (const key in originvalue) {
    if (Object.hasOwnProperty.call(originvalue, key)) {
      newobj[key] = deepclone(originvalue[key], weakmap);
    }
  }
  for (const skey of Object.getOwnPropertySymbols(originvalue)) { //--------------
    newobj[skey] = deepclone(originvalue[skey], weakmap)
  }
  return newobj
}