/*
 * @Author: alenjzhang
 * @Date: 2025-02-13 17:22:55
 * @Description: 不重复的最长子串
 */
const str = '111222234556789';
// const str = '';

function find(str) {
	let s = '';

	function helper(i) {
		let result = [];
		while (i < str.length && !result.includes(str[i])) {
			result.push(str[i]);
			i++;
		}
		if (s.length < result.length) {
			s = result.join('');
		}
	}
	for (let i = 0; i < str.length; i++) {
		helper(i);
	}

	return s;
}

console.log(find(str));
