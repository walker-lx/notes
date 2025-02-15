/*
 * @Author: alenjzhang
 * @Date: 2025-02-13 16:17:06
 * @Description: 重试函数封装.
 */
function task() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			reject('success');
		}, 1000);
	})
}

function retry(fn, times) {
	return async (newFn, newTimes) => {
		newFn = typeof newFn === 'function' ? newFn : fn;
		newTimes = typeof newTimes === 'number' ? newTimes : times;
		let lastError = null;

		for (let attempt = 1; attempt <= newTimes; attempt++) {
			try {
				console.log('run time', attempt);
				const result = await newFn();
				return result; // 成功直接返回
			} catch (err) {
				console.log(`Attempt ${attempt}/${newTimes} failed`);
				lastError = err;
				if (attempt >= newTimes) break;

				// 可以在这里添加重试延迟（可选）
				// await new Promise(r => setTimeout(r, 1000 * attempt));
			}
		}
		throw lastError || new Error('All attempts failed');
	}
}

async function retry1(fn, times) {
	let lastError = null;
	for (let i = 0; i < times; i++) {
		try {
			console.log('run time', i);
			const result = await fn();
			return result;
		} catch (error) {
			if (i >= times) break;
			lastError = error;
			console.log(`Attempt ${i}/${times} failed`, error);
		}
	}
	return lastError;
}

// const fn = retry(task, 3);

// fn(task, 2);

retry1(task, 3);
