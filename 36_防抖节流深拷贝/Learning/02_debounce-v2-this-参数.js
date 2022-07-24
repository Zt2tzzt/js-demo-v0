/*
 * @Description: file content
 * @Author: ZeTian
 * @Date: 2021-11-18 15:56:13
 * @LastEditors: ZeTian
 * @LastEditTime: 2021-11-18 16:36:33
 * @LastEditContent:
 */
function debounce(fn, delay) {
  // 1. 定义一个定时器, 保存上一次的定时器
  let timer = null
  // 2. 真正执行的函数
  return function (...args) {
    // 取消上一次的定时器
    if (timer) clearTimeout(timer)
    // 延迟执行
    timer = setTimeout(() => {
      // 外部传入的真正要执行的函数
      fn.apply(this, args)
    }, delay);
  }
}