/*
 * @Description: file content
 * @Author: Zt2tzzt
 * @Date: 2021-10-14 09:08:55
 * @LastEditors: Zt2tzzt
 * @LastEditTime: 2021-10-14 09:14:14
 * @LastEditContent:
 */
const message = 'Hello Froge'

const newMessage = message.padStart(15, '*').padEnd(20, '-')
console.log(newMessage)

// 案例
const cardNumber = '465738579'
const lastFourCard = cardNumber.slice(-4)
const finalCard = lastFourCard.padStart(cardNumber.length, '*')
console.log(finalCard)
