/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2022-02-22 08:56:13
 * @LastEditors: ZeT1an
 * @LastEditTime: 2022-02-22 08:59:25
 * @LastEditContent: 
 */
function debounce(fn, delay, immediate = false) {
	let timer = null
	let isInvoke = false

	function _debounce(...args) {
		return new Promise(resolve => {

			if (timer) clearTimeout(timer)
			timer = null

			if (immediate && !isInvoke) {
				const res = fn.apply(this, args)
				resolve(res)
				isInvoke = true
			} else {
				timer = setTimeout(() => {
					const res = fn.apply(this, args)
					resolve(res)
					isInvoke = true
					timer = null
				}, delay);
			}
		})

	}

	_debounce.cancel = function () {
		if (timer) clearTimeout(timer)
		timer = null
		isInvoke = false
	}

	return _debounce
}