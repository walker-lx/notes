// Function.prototype.myCall = function (context, ...args) {
// 	context = context ? Object(context) : window;
// 	const fn = this;
// 	const result = fn.apply(context, args);
// 	return result;
// }

Function.prototype.myCall = function (context, ...args) {
	context = context ? Object(context) : window;
	const fn = this;
	// const result = fn.apply(context, args);
	const fnKey = Symbol();
	// context[fnKey] = fn;
	Object.defineProperty(context, fnKey, {
		value: fn,
		enumerable: false,
		writable: true,
		configurable: true
	})
	const result = context[fnKey](...args);
	console.log('context', context);
	delete context[fnKey];
	return result;
}

const callobj = {
	name: 'name'
}

function fn(a, b) {
	console.log(this.name, a, b);
}

fn.myCall(callobj, 1, 2);
