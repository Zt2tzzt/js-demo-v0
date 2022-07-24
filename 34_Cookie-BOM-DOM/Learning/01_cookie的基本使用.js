/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-11-14 16:34:06
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-11-14 16:37:04
 * @LastEditContent:
 */

// 设置过期时间就是本地cookie，不设置就是内存cookie
document.cookie = 'name=zzt'
document.cookie = 'age=18'

// 设置 cookie ，同时设置过期时间（默认单位是秒钟）
document.cookie = 'name=zzt;max-age=10'

console.log(document.cookie)