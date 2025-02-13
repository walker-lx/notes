function task() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			reject('success');
		}, 1000);
	})
}

async function retry(fn, times) {
	let lastError = null;

	for (let attempt = 1; attempt <= times; attempt++) {
		try {
			console.log('run time', attempt);
			const result = await fn();
			return result; // 成功直接返回
		} catch (err) {
			console.log(`Attempt ${attempt}/${times} failed`);
			lastError = err;
			if (attempt >= times) break;

			// 可以在这里添加重试延迟（可选）
			// await new Promise(r => setTimeout(r, 1000 * attempt));
		}
	}

	throw lastError || new Error('All attempts failed');
}

retry(task, 3)
