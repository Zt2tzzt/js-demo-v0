/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-11-04 13:34:45
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-11-04 13:41:45
 * @LastEditContent:
 */
// 1. 到处方式一
/* import { add, sub } from './math.js'
import { timeFormat, priceFormat } from './format.js'
export {
  add, sub, timeFormat, priceFormat
} */

// 2. 到处方式二：
/* export { add, sub } from './math.js'
export { timeFormat, priceFormat } from './format.js' */

// 3. 导出方式三
export * from './math.js'
export * from './format.js'
