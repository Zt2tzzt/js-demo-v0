/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2021-11-29 13:39:24
 * @LastEditors: ZeT1an
 * @LastEditTime: 2021-11-29 14:03:12
 * @LastEditContent:
 */
export function debounce(fn, delay, immediate) {
  let timer = null
  let isInvoke = false

  function _debounce(...args) {
    return new Promise(resovle => {

      if (timer) clearInterval(timer)
      timer = null

      if (immediate && !isInvoke) {
        const result = fn.apply(this, args)
        resovle(result)
        isInvoke = true
      } else {
        timer = setTimeout(() => {
          const result = fn.apply(this, args)
          resovle(result)
          isInvoke = true
          timer = null
        }, delay);
      }
    })
  }

  _debounce.cancel = function () {
    if (timer) clearInterval(timer)
    timer = null
    isInvoke = false
  }

  return _debounce
}

export function throttle(fn, interval, options = { leading: false, trailling: true }) {
  const { leading, trailling } = options
  let lastTime = 0
  let timer = null

  function _throttle(...args) {
    return new Promise(resolve => {

      const nowTime = new Date().getTime()

      if (!leading && !lastTime) lastTime = nowTime

      const remainTime = interval - (nowTime - lastTime)

      if (remainTime <= 0) {
        if (timer) clearInterval(timer)
        timer = null
        const result = fn.apply(this, args)
        resolve(result)
        lastTime = nowTime
      }

      if (trailling && !timer) {
        timer = setTimeout(() => {
          const result = fn.apply(this, args)
          resolve(result)
          lastTime = leading ? new Date().getTime() : 0
          timer = null
        }, remainTime);
      }
    })
  }

  _throttle.cancel = function () {
    if (timer) clearInterval(timer)
    timer = null
    lastTime = 0
  }

  return _throttle

}