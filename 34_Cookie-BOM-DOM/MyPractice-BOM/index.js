/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2022-01-29 22:06:50
 * @LastEditors: ZeT1an
 * @LastEditTime: 2022-02-28 13:33:22
 * @LastEditContent: 
 */
/**
 * window对象由Window类创建，Window类继承自EventTarget类
 */

/**
 * window作为全局对象，也就是GO对象的2点理解
 * 1.在全局用var声明的变量，会被添加到window中。
 * 2.window默认给我们提供了全局的函数和类，如setTimeout，Math，Date，Object等等。
 */

/**
 * window作为窗口对象，包含的4类东西：
 * 1.包含大量的属性，如localStorage，console，location，history，screenX，scrollX等等。（大概60+个属性）
 * 2.包含大量方法：alert，close，scrollTo，open等等（大概40+个方法）
 * 3.包含大量事件，focus，blur，load，hashChange等等（大概30+个事件）
 * 4.包含从EventTarget继承过来的方法：addEventListener，removeEventListener，dispatchEvent
 */

/**
 * MDN文档中API前面的符号，3种并介绍
 * 1.删除符号，表示API已经弃用，不推荐再使用。
 * 2.点踩符号，表示API不属于W3C规范，某些浏览器有实现，有兼容性问题。
 * 3.实验符号：该API是实验性特性，可能会修改，存在兼容性问题。
 */

/**
 * EventTarget中的3个方法，并介绍：
 * 1.addEventListener：注册某个事件类型以及事件处理函数。
 * 2.removeEventListener：移除某个事件类型以及事件处理函数。
 * 3.dispatchEvent：派发某个事件类型到EventTarget上
 */

/**
 * location中常见的属性：
 * 1.href：当前window对应的超链接URL，整个URL
 * 2.protocol：当前的协议。
 * 3.username：URL中的username（很多浏览器已禁用）
 * 4.password：URL中的password（很多浏览器已禁用）
 * 5.host：主机地址。
 * 6.hostname：主机地址（不带端口）
 * 7.port：端口
 * 8.pathname：路径。
 * 9.search：查询字符串。
 * 10.hash：哈希值
 */

/**
 * 一个完成的URL由哪些部分组成。
 * schema://userinfo@host:port/path?query#fragment(hash)
 */

/**
 * location的3个方法并介绍
 * 1.asign：赋值一个URL，并且跳转到该URL中。
 * 2.replace：打开一个新URL，并且跳转到该URL中（不会在浏览器中留下记录）
 * 3.reload：重新加载页面，可以传入Boolean类型。（true，重新加载，false，先找缓存，再加载）
 */

/**
 * history主要的2个属性和5个方法：
 * 2个属性：
 * length：会话中的记录条数。
 * state：当前保留的状态值。
 * 5个方法：
 * back()：返回上一页，等价于history.go(-1)
 * forward()：前进下一页，等价于history.go(1)
 * go()：加载历史中的某一页。
 * pushState()：打开一个指定的地址。
 * replaceState()：打开一个新的地址，并且使用replace。
 */