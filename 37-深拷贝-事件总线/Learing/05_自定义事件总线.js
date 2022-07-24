/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2021-11-23 09:05:25
 * @LastEditors: ZeT1an
 * @LastEditTime: 2021-11-23 09:59:47
 * @LastEditContent:
 */
/**
 * @description: 此类用于事件总线
 * @Author: ZeT1an
 */
class MyEventBus {
  constructor() {
    this.eventBus = {}
  }

  /**
   * @description: 此函数用于监听事件
   * @Author: ZeT1an
   * @param {string} eventName 事件名称
   * @param {function} eventCallback  事件的回调函数
   * @param {Object} thisArg 绑定的 this 参数
   * @return {null}
   */
  on(eventName, eventCallback, thisArg) {
    // 获取 eventBus 中 eventName 对应的 处理函数数组
    let handlers = this.eventBus[eventName]
    // 如果该数组不存在，则创建一个数组用于存放事件对应的函数。
    if (!handlers) {
      handlers = []
      this.eventBus[eventName] = handlers
    }
    handlers.push({
      eventCallback, thisArg
    })
  }

  /**
   * @description: 此函数用于取消事件
   * @Author: ZeT1an
   * @param {string} eventName 事件名称
   * @param {function} eventCallback  事件的回调函数
   * @return {null}
   */
  off(eventName, eventCallback) {
    // 获取 eventBus 中 eventName 对应的 处理函数数组
    const handlers = this.eventBus[eventName]
    // 如果该数组不存在，则无需做取消监听的操作，可以直接返回函数
    if (!handlers) return

    const newHandlers = [...handlers]
    for (let i = 0; i < newHandlers.length; i++) {
      const newhandler = newHandlers[i]
      if (newhandler.eventCallback === eventCallback) {
        const index = handlers.indexOf(newhandler)
        handlers.splice(index, 1)
      }
    }

  }

  /**
   * @description: 此函数用于发射事件
   * @Author: ZeT1an
   * @param {string} eventName 传入的事件名称
   * @param {array} payload 发射事件时携带的参数
   * @return {null}
   */
  emit(eventName, ...payload) {
    const handlers = this.eventBus[eventName]
    if (!handlers) return
    handlers.forEach(handler => {
      handler.eventCallback.apply(handler.thisArg, payload)
    })
  }
}



// main.js
const eventBus = new MyEventBus()
eventBus.on('abc', function () {
  console.log('监听abc1', this)
}, { name: 'zzt' })

const handleCallback = function () {
  console.log('监听abc2', this)
}
eventBus.on('abc', handleCallback, { name: 'zzt' })

// utils.js
eventBus.emit('abc', 123)
// 移除监听
eventBus.off('abc', handleCallback)
eventBus.emit('abc', 123)

