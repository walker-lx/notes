// Function.prototype.myApply = function (context, args) {
// 	context = context ? Object(context) : window;
// 	const fn = this;
// 	const result = fn.call(context, ...args);
// 	return result;
// }

Function.prototype.myApply = function (context, args) {
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

const applyobj = {
	name: 'apply'
}

function fn(a, b) {
	console.log(this.name, a, b);
}

fn.myApply(applyobj, [1, 2]);
