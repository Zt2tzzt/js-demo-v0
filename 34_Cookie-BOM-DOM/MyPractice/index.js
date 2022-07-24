/*
 * @Description: file content
 * @Author: ZeT1an
 * @Date: 2022-01-28 21:42:44
 * @LastEditors: ZeT1an
 * @LastEditTime: 2022-04-29 13:23:34
 * @LastEditContent: 
 */
/**
 * Cookie的类型为小型文本文件，为了辨识用户身份而存储在本地终端上的数据。
 */

/**
 * 按照客户端的存储位置，Cookie可分为：
 * 	内存Cookie：浏览器维护，保存在内存中，浏览器关闭时会消失，
 * 	硬盘Cookie：有一个过期时间，到时或用户手动清理才会消失。
 */

/**
 * 如何判断Cookie的类型：
 * 1.没有设置过期时间，默认情况下是内存Cookie。
 * 2.有设置不为0或负数过期时间的，是硬盘Cookie。
 */

/**
 * 服务器会将Cookie放在响应头中返回，浏览器自动识别并保存。下次发送请求时会在请求头中自动携带。
 */

/**
 * Cookie默认情况下是内存Cookie类型，设置过期时间的2种方式。
 * 1.expires：设置格式是expires=data-in-GMTString-format（Date.toUTCString()）
 * 2.max-age：设置格式为max-age=max-age-in-seconds
 */

/**
 * Cookie的作用域（Domain），分2种情况：
 * 1.如果不指定，那么默认值是origin，不包括子域名。
 * 2.如果指定，则包含子域名，例如Domain=mozilla.org，则Cookie也包含在子域名中（如dev.mozilla.org）
 */

/**
 * 设置Path，指定接收Cookie的路径，
 * 	如设置Path=/docs，则以下路径都会匹配/docs，/docs/web
 */

/**
 * 查看Cookie的2处位置：
 * 1.浏览器域名地址前的锁图标
 * 2.开发者调试工具Application
 */

/**
 * 设置和获取Cookie，设置一个会话Cookie，设置一个有过期时间的Cookie
 */
document.cookie
document.cookie = 'name=zzt'
document.cookie = 'name=lingard;max-age=10'

/**
 * Cookie的缺点，4点：
 * 1.每次网络请求都会发送Cookie，耗费流量。
 * 2.明文传输，有安全性风险。
 * 3.有大小限制，4kb
 * 4.只有浏览器端能够自动的接收发送Cookie
 */

/**
 * BOM的全称浏览器对象模型，英文Browser Object Model，它是连接JavaScript与浏览器窗口的桥梁。
 */

/**
 * BOM主要包括的对象类型，4个并介绍
 * 1.window：包括全局属性和方法，控制浏览器窗口相关的属性，方法
 * 2.location：浏览器连接到的对象的位置。
 * 3.history：操作浏览器的历史。
 * 4.document：当前窗口操作文档的对象。
 */