/*
 * @Author: alenjzhang
 * @Date: 2025-02-14 16:15:15
 * @Description:
 * new 运算符创建一个用户定义的对象类型的实例或具有构造函数的内置对象的实例。new 关键字会进行如下的操作：

创建一个空的简单JavaScript对象（即{}）；
链接该对象（即设置该对象的构造函数）到另一个对象 ；
将步骤1新创建的对象作为this的上下文 ；
如果该函数没有返回对象，则返回this。
 */

function myNew() {
	// const obj = {};
	// obj.__proto__ = this;
	const fn = arguments[0]; // 取出传入的第一个参数作为运行函数
	// let obj = fn.prototype;
	let obj = Object.create(fn.prototype); // 通过Object.create obj.__proto__ = fn.prototype;
	console.log('__proto__====', obj.__proto__ === fn.prototype);
	const result = fn.call(obj, ...[...arguments].slice(1));
	return result instanceof Object ? result : obj;
}

function Fn(b) {
	this.a = 33;
	this.b = b;
}

const obj = myNew(Fn, 'b');
console.log(obj);
