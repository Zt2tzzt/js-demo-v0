/*
 * @Description: file content
 * @Author: ZeTian
 * @Date: 2021-11-22 13:22:02
 * @LastEditors: ZeTian
 * @LastEditTime: 2021-11-22 14:35:28
 * @LastEditContent:
 */
/**
 * @description: 此函数为工具函数,用于节流
 * @Author: ZeTian
 * @param {function} fn 需要截留处理的函数
 * @param {Number} interval 节流间隔时间
 * @param {Object} options 节流设定选项
 * @return {Function}  返回的节流函数
 */
export default function throttle(fn, interval, options = { leading: true, trailing: false }) {
  // 1. 记录上一次的开始时间
  const { leading, trailing } = options
  let lastTime = 0
  let timer = null

  // 2. 事件触发时, 真正执行的函数
  const _throttle = function (...args) {

    // 2.1. 获取当前事件触发时间
    const nowTime = new Date().getTime()
    if (!lastTime && !leading) lastTime = nowTime

    // 2.2. 计算出还剩余多长时间需要去触发函数
    const remainTime = interval - (nowTime - lastTime)
    if (remainTime <= 0) {
      if (timer) {
        clearTimeout(timer)
        timer = null
      }

      // 2.3. 真正的触发函数
      fn.apply(this, args)
      // 2.4. 保留上次触发的时间
      lastTime = nowTime
      return
    }

    if (trailing && !timer) {
      timer = setTimeout(() => {
        timer = null
        lastTime = !leading ? 0 : new Date().getTime()
        fn.apply(this, args)
      }, remainTime);
    }
  }
  return _throttle

}