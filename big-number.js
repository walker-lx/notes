
const n1 = '8888888888888888888888888888';
const n2 = '11';

/**
 * @description: 大数相加
 * @param {*} a
 * @param {*} b
 * @return {*}
 */
function add(a, b) {
	const len = Math.max(a.length, b.length);
	a = a.padStart(len, '0');
	b = b.padStart(len, '0');
	let carry = 0;
	let result = '';
	for (let i = len - 1; i >= 0; i--) {
		const sum = parseInt(a[i]) + parseInt(b[i]) + carry;
		result = (sum % 10).toString() + result; // 取余数，然后拼接字符串
		carry = Math.floor(sum / 10);
	}
	// const big = BigInt(n1) + BigInt(n2)
	// console.log(big.toString(), result);
	return result;
}

add(n1, n2);
