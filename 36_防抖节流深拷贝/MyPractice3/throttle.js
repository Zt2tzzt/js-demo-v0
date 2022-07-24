/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2022-02-22 09:10:23
 * @LastEditors: ZeT1an
 * @LastEditTime: 2022-02-22 09:31:43
 * @LastEditContent: 
 */
function throttle(fn, interval, { leading = false, tralling = true } = {}) {
	let timer = null
	let lastTime = 0

	function _throttle(...args) {
		return new Promise(resolve => {

			const nowTime = new Date().getTime()
			if (!leading && !lastTime) lastTime = nowTime
			const remainTime = interval - (nowTime - lastTime)

			if (remainTime <= 0) {
				if (timer) clearTimeout(timer)
				timer = null
				const res = fn.apply(this, args)
				resolve(res)
				lastTime = nowTime
			}
			if (tralling && !timer) {
				timer = setTimeout(() => {
					const res = fn.apply(this, args)
					resolve(res)
					lastTime = leading ? new Date().getTime() : 0
					timer = null
				}, remainTime);
			}
		})
	}

	_throttle.cancel = function() {
		if (timer) clearTimeout(timer)
		timer = null
		lastTime = 0
	}

	return _throttle
}