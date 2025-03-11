const testobj = {
	b: 2
};
Object.defineProperty(testobj, 'a', {
	value: 1,
	writable: true,
	configurable: true,
	enumerable: false,
});

console.log(testobj);
