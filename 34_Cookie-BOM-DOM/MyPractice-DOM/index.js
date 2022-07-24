/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2022-01-31 00:41:48
 * @LastEditors: ZeT1an
 * @LastEditTime: 2022-05-01 14:53:40
 * @LastEditContent: 
 */
/**
 * 在前端要改Cookie时间，服务器端httpOnly属性需设为false。
 */

/**
 * 当函数的参数有默认值时，会形成一个新的作用域，用于保存参数的值。理解例题。
 */
var x = 1
function foo(x, y = function () { x = 3; console.log(x) }) {
	console.log(x) // undefined
	var x = 2
	y() // 3
	console.log(x) // 2
}
foo()
console.log(x); // 1

/**
 * DOM的全称是文档对象模型，英文Document Object Model，是连接JS脚本和Web页面元素的桥梁，理解DOM架构图
 */

/**
 * Node节点中列举4个重要属性，和2个方法。
 * 4个属性：
 * nodeName：node节点的名称。
 * nodeType：可以区分节点的类型。
 * nodeValue：node节点的值。
 * childNodes：所有的子节点。
 */
const boxDiv = document.querySelector('box')
console.log('elements:', boxDiv.nodeName, boxDiv.nodeType, boxDiv.nodeValue);
console.log('childNodes:', boxDiv.childNodes);
const comment = boxDiv.childNodes[0]
const text = boxDiv.childNodes[1]
/** 
 * 2个方法：
 * appendChild：将一个节点附加到指定父节点的子节点列表的末尾处。
 * cloneNode，返回调用该方法的节点的一个副本。
 */
const cloneBoxDiv = boxDiv.cloneNode(true)
document.body.appendChild(cloneBoxDiv)

/**
 * Document表示整个载入的网页，列举常见的4个属性和5个方法。
 * 4个属性：body，title，head，location，(与window.location是同一个对象)
 * 5个方法：
 * getElementById
 * getElementsByTagName
 * getElementsByName
 * querySelector：匹配到的第一个
 * querySelectorAll：匹配的所有
 */

/**
 * Element表示创建的div, p, span等元素，列举常见的3个属性和2个方法。
 * 3个属性：id，tagName，children。
 * 2个方法：getAttribute，setAttribute
 */

/**
 * 一句话说说对事件监听的理解
 * 	在某一时刻对浏览器页面中发生的事件做出响应
 */

/**
 * 事件监听的3种方式：
 * 1.在script中直接监听。
 * 2.通过元素对象的on开头属性来监听事件。（多次监听会被覆盖）
 * 3.通过EventTarget中的addEventListener来监听。
 */

/**
 * 事件流的产生是因为HTML元素是存在父子元素叠加层级的。
 */

/**
 * 如何理解事件冒泡和事件捕获，3点，如何使用事件捕获。
 * 1.事件冒泡：事件从最内层向外依次传递。
 * 2.事件捕获：事件从最外层向内依次传递。
 * 3.同时监听事件冒泡和事件捕获，事件捕获会优先执行。
 * 如何使用事件捕获，addEventListener 第三个参数为 true：
 */
spanEl.addEventListener('click', (event) => {
	console.log('事件捕获：span元素被点击了')
	event.stopPropagation()
}, true)

/**
 * 什么是事件对象：
 * 	当一个事件发生时，就会有和这个事件相关的很多信息，被封装到一个Event对象中。
 */

/**
 * 事件对象常见的4个属性和2个方法，并介绍：
 * 4个属性：
 * type：事件的类型
 * target：事件发生的元素
 * currentTarget：当前处理事件的元素。（与事件冒泡有关，span的父级是div，点击span，监听div的事件，currentTarget是div，target是span）
 * offSetX, offSetY：点击元素的位置。
 */
 const spanEl = document.querySelector('.span')
 spanEl.addEventListener('click', (event) => {
	 console.log('span元素被点击：', event)
	 console.log('事件的类型：', event.type)
	 console.log('事件的元素：', event.target, event.currentTarget)
	 console.log('事件发生的位置：', event.offsetX, event.offsetY)
 })
/**
 * 2个方法：
 * preventDefault：取消事件的默认行为。
 * stopPropagation：阻止事件的进一步传递。
 */
 const aEl = document.querySelector('a')
aEl.addEventListener('click', (event) => {
	event.preventDefault()
})
spanEl.addEventListener('click', (event) => {
  console.log('事件捕获：span元素被点击了')
  event.stopPropagation()
}, true)