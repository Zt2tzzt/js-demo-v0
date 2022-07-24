/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2021-12-09 22:57:32
 * @LastEditors: ZeT1an
 * @LastEditTime: 2022-02-23 08:42:55
 * @LastEditContent: 
 */
class Mycache {
  constructor(islocal = true) {
    this.storage = islocal ? localStorage : sessionStorage
  }

  getItem(key) {
    let value = this.storage.getItem(key)
    /* if (value) {
      value = JSON.parse(value)
      return value
    } */
    return value ? JSON.parse(value) : undefined
  }

  setItem(key, value) {
    if (value) {
      const result = JSON.stringify(value)
      this.storage.setItem(key, result)
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

  length() {
    return this.storage.length
  }
}