/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2021-12-06 11:11:24
 * @LastEditors: ZeT1an
 * @LastEditTime: 2021-12-07 15:57:05
 * @LastEditContent:
 */
/* class MyCache {
  constructor(isLocal = true) {
    this.storage = isLocal ? localStorage : sessionStorage
  }

  getItem(key) {
    let value = this.storage.getItem(key)
    if (value) {
      value = JSON.parse(value)
      return value
    }
  }

  setItem(key, value) {
    if (value) {
      this.storage.setItem(key, JSON.stringify(value))
    }
  }

  removeItem(key) {
    this.storage.removeItem(key)
  }

  clear() {
    this.storage.clear()
  }

  length() {
    return this.storage.length
  }

  key(index) {
    return this.storage.key(index)
  }
}

const localCache = new MyCache()
const sessionCache = new MyCache(false)

export {
  localCache, sessionCache
} */

class MyCache {
  constructor(isLocal = true) {
    this.storage = isLocal ? localStorage : sessionStorage
  }

  getItem(key) {
    const str = this.storage.getItem(key)
    return JSON.parse(str)
  }

  setItem(key, value) {
    if (value) {
      this.storage.setItem(key, JSON.stringify(value))
    }
  }

  removeItem(key) {
    this.storage.removeItem(key)
  }

  clear() {
    this.storage.clear()
  }

  key(index) {
    this.storage.key(index)
  }

  length() {
    return this.storage.length
  }
}