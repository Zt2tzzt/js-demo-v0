/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2021-12-09 10:51:51
 * @LastEditors: ZeT1an
 * @LastEditTime: 2021-12-09 11:14:43
 * @LastEditContent:
 */
class MyEventbus {
  constructor() {
    this.eventbus = {} // ------------
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
    if (!handlers) return
    const newHandlers = [...handlers]
    for (const handler of newHandlers) {
      if (handler.eventCallback === eventCallback) {
        const index = handlers.indexOf(handler)
        handlers.splice(index, 1)
      }
    }
  }

  emit(eventName, ...params) {
    const handlers = this.eventbus[eventName]
    if (!handlers) return
    handlers.forEach(handler => {
      handler.eventCallback.apply(handler.thisArg, params)
    });
  }

}