export function chunk<T>(array: Array<T>, size = 1): Array<Array<T>> {
	size = Math.max(Math.trunc(size), 0);
	const chunks = [];
	for (let i = 0; i < array.length; i += Math.max(1, size)) {
		chunks.push(array.slice(i, i + size));
	}
	return chunks;
}
