/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-10-14 10:03:24
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-10-14 10:19:41
 * @LastEditContent:
 */
// ES11之前 max_safe_integer
const maxInt = Number.MAX_SAFE_INTEGER
console.log(maxInt) // 9007199254740991
console.log(maxInt + 1)
console.log(maxInt + 2)

// ES11之后：BigInt
const bigInt = 9007199254740991200n
console.log(bigInt + 10n)

const num = 100
console.log(bigInt + BigInt(num))

const smallNum = Number(bigInt)
console.log(smallNum)