/*
 * @Author: alenjzhang
 * @Date: 2025-02-14 16:15:15
 * @Description:
 * new 运算符创建一个用户定义的对象类型的实例或具有构造函数的内置对象的实例。new 关键字会进行如下的操作：

 */

// function myBind() {
// 	const fn = arguments[0];
// 	const context = arguments[1];
// 	const args = arguments[2];
// 	return function () {
// 		fn.apply(context, args);
// 	}
// }

Function.prototype.myBind = function () {
	const fn = this;
	const context = arguments[0] ? Object(arguments[0]) : window;
	const args = [...arguments].slice(1);
	if (new.target) {
		return new fn(...args, ...arguments);
	}
	return function () {
		fn.apply(context, [...args, ...arguments]);
	}
}

const bindObj = {
	name: 'bind'
}

function bindFn(a, ...args) {
	console.log(this.name, a, ...args);
}

const testBindObj = bindFn.myBind(bindObj, 1);
testBindObj(2);
new testBindObj(3);
