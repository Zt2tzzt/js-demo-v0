/*
 * @Description: file content
 * @Author: ZeTian
 * @Date: 2021-11-18 15:56:13
 * @LastEditors: ZeTian
 * @LastEditTime: 2021-11-18 16:46:00
 * @LastEditContent:
 */
function debounce(fn, delay, immediate = false) {
  // 1. 定义一个定时器, 保存上一次的定时器
  let timer = null
  let isInvoke = false

  // 2. 真正执行的函数
  const _debounce = function (...args) {
    // 取消上一次的定时器
    if (timer) clearTimeout(timer)
    // 判断是否需要立即执行
    if (immediate && !isInvoke) {
      fn.apply(this, args)
      isInvoke = true
    } else {
      // 延迟执行
      timer = setTimeout(() => {
        // 外部传入的真正要执行的函数
        fn.apply(this, args)
        timer = null
        isInvoke = false
      }, delay);
    }
  }
  // 封装取消功能
  _debounce.cancel = function () {
    if (timer) clearTimeout(timer)
    timer = null
    isInvoke = false
  }

  return _debounce
}