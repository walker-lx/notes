const c1 = '126878421.1';
const c2 = '999';

/**
 * @description: 格式化数字
 * @param {*} num
 * @return {*}
 */
function numberFormat(num) {
	const parts = num.toString().split('.');
	const integerPart = parts[0];
	const decimalPart = (parts[1] || '').padEnd(2, '0');
	// const formattedIntegerPart = integerPart.replace(/(?=\d{3}$)/g, ','); // 最后一个逗号
	// const formattedIntegerPart = integerPart.replace(/(?=(\d{3})+$)/g, ','); // 所有逗号
	// const formattedIntegerPart = integerPart.replace(/\B(?=(\d{3})+$)/g, ','); // 单词边界  开头不能有逗号
	const formattedIntegerPart = integerPart.replace(/(?!^)(?=(\d{3})+$)/g, ','); // 单词边界  开头不能有逗号
	const r = `${formattedIntegerPart}.${decimalPart}`
	console.log(r);
	return r;
}

numberFormat(c2);
numberFormat(c1);
