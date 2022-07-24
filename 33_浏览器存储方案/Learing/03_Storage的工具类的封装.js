/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-11-11 13:10:20
 * @LastEditors: ZeT1an
 * @LastEditTime: 2021-12-03 10:46:15
 * @LastEditContent:
 */
class MyCache {
  constructor(isLocal = true) {
    this.storage = isLocal ? localStorage : sessionStorage
  }

  setItem(key, value) {
    if (value) {
      this.storage.setItem(key, JSON.stringify(value))
    }
  }

  getItem(key) {
    let value = this.storage.getItem(key)
    if (value) {
      value = JSON.parse(value)
      return value
    }
  }

  removeItem(key) {
    this.storage.removeItem(key)
  }

  key(index) {
    return this.storage.key(index)
  }

  length() {
    return this.storage.length
  }

  clear() {
    this.storage.clear()
  }
}

const localCache = new MyCache()
const sessionCache = new MyCache(false)

export {
  localCache, sessionCache
}
