/*
 * @Description: file content
 * @Author: ZeTian
 * @Date: 2021-11-19 10:44:58
 * @LastEditors: ZeTian
 * @LastEditTime: 2021-11-22 14:04:48
 * @LastEditContent:
 */
export default function throttle(fn, interval) {
  let lastTime = 0

  const _throttle = function () {
    // 获取当前时间戳
    const nowTime = new Date().getTime()
    // 距离下次触发所剩时间
    const remainTime = interval - (nowTime - lastTime)
    if (remainTime <= 0) {
      fn()
      lastTime = nowTime
    }
  }
  return _throttle
}