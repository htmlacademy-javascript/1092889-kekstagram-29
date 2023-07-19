
const debounce = <K>(callback: (args: Array<K>) => void, timeoutDelay?: number) => {
	let timeoutId: ReturnType<typeof setTimeout>;
	return (rest: Array<K>) => {
		clearTimeout(timeoutId);
		timeoutId = setTimeout(() => callback(rest), timeoutDelay);
	};
};

export {debounce};
