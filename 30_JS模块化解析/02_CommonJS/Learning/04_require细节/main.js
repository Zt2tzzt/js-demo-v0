/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-11-04 09:18:41
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-11-04 09:28:06
 * @LastEditContent:
 */
// 情况一: 核心提供
/* const path = require("path")
const fs = require('fs')
path.resolve()
path.extname()
fs.readFile() */

// 情况二: 路径 ./ ../ /
/* const abc = require('./abc')
console.log(abc.name04) */

// 情况三: X不是路径, 也不是核心模块
const axios = require('axios')
// axios.get()

console.log(module.path)


