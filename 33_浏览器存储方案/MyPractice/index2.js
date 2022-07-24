/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2021-12-24 14:41:02
 * @LastEditors: ZeT1an
 * @LastEditTime: 2021-12-24 14:48:14
 * @LastEditContent: 
 */
class MyCache {
	constructor(islocal = true) {
		this.storage = islocal ? localStorage : sessionStorage
	}

	setItem(key, value) {
		if (value) {
			const result = JSON.stringify(value)
			this.storage.setItem(key, result)
		}
	}

	getItem(key) {
		let result = this.storage.getItem(key)
		if (result) {
			result = JSON.parse(result)
			return result
		}
	}

	removeItem(key) {
		this.storage.removeItem(key)
	}

	key(index) {
		return this.storage.key(index)
	}

	clear() {
		this.storage.clear()
	}

	lehgth() {
		return this.storage.length
	}
}