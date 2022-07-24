/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-11-01 10:44:51
 * @LastEditors: ZeT1an
 * @LastEditTime: 2021-12-15 09:47:28
 * @LastEditContent:
 */
Promise.resolve().then(() => {
  console.log(0);
  // 1.直接return一个值 相当于resolve(4)
  // return 4

  // 2.return thenable的值
  // 不是普通的值, 多加一次微任务
  return {
    then: function (resolve) {
      // 大量的计算
      resolve(4)
    }
  }

  // 3.return Promise
  // 不是普通的值, 多加一次微任务
  // Promise.resolve(4), 多加一次微任务
  // 一共多加两次微任务
  return Promise.resolve(4)
}).then((res) => {
  console.log(res)
})

Promise.resolve().then(() => {
  console.log(1);
}).then(() => {
  console.log(2);
}).then(() => {
  console.log(3);
}).then(() => {
  console.log(5);
}).then(() => {
  console.log(6);
})