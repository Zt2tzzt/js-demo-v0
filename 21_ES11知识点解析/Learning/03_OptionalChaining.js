/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-10-14 10:28:28
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-10-14 10:32:02
 * @LastEditContent:
 */
const info = {
  name: 'zzt',
  /* friend: {
    name: 'lilei',
    girlFriend: {
      name: 'hmm'
    }
  } */
}

/* console.log(info.friend.girlFriend.name)
if (info && info.friend.girlFriend.name) {
  console.log(info.friend.girlFriend.name)
} */

// ES11提供了可选链(Optional Chainling)
console.log(info.friend?.girlFriend?.name)
console.log('其他代码逻辑')