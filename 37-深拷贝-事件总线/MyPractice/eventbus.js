/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2021-11-24 11:20:32
 * @LastEditors: ZeT1an
 * @LastEditTime: 2022-07-17 11:29:45
 * @LastEditContent:
 */
class MyEventBus {
  constructor() {
    this.eventbus = {}
  }

  on(eventName, eventCallback, thisArg) {
    let handlers = this.eventbus[eventName]
    if (!handlers) {
      handlers = []
      this.eventbus[eventName] = handlers
    }
    handlers.push({ eventCallback, thisArg })
  }

  off(eventName, eventCallback) {
    const handlers = this.eventbus[eventName]
    if (!handlers) return // -----
    const newHandlers = [...handlers]
    for (const key in newHandlers) {
      const newhandler = newHandlers[key]
      if (newhandler.eventCallback === eventCallback) { // -----
        const index = handlers.indexOf(newhandler)
        handlers.splice(index, 1)
      }
    }
  }

  emit(eventName, ...payload) {
    const handlers = this.eventbus[eventName]
    if (!handlers) return
    handlers.forEach(handler => {
      handler.eventCallback.apply(handler.thisArg, payload)
    });
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