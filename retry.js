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

// const fn = retry(task, 3);

// fn(task, 2);
