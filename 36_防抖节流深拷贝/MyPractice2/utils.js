/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2021-12-22 15:05:07
 * @LastEditors: ZeT1an
 * @LastEditTime: 2022-02-21 22:13:25
 * @LastEditContent: 
 */
export const debounce = (fn, delay, immediate) => {
	let timer = null
	let isInvake = false

	function _debounce(...args) {
		return new Promise(resolve => {

			if (timer) clearTimeout(timer)
			timer = null

			if (immediate && !isInvake) {
				const result = fn.apply(this, args)
				resolve(result)
				isInvake = true
			} else {
				timer = setTimeout(() => {
					const result = fn.apply(this, args)
					resolve(result)
					isInvake = true
					timer = null
				}, delay);
			}
		})
	}

	_debounce.cancel = function () {
		if (timer) clearTimeout(timer)
		timer = null
		isInvake = false
	}

	return _debounce
}

export const throttle = (fn, interval, { leading = false, trailing = true } = {}) => {
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
				const result = fn.apply(this, args)
				resolve(result)
				lastTime = nowTime
			}
			if (trailing && !timer) {
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
		if (timer) clearTimeout(timer)
		timer = null
		lastTime = 0
	}

	return _throttle
}