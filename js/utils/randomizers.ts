const getRandomInt = (min: number, max: number): number => {
	const lower = Math.floor(min);
	const upper = Math.ceil(max);
	return Math.floor(Math.random() * (upper - lower + 1) + lower);
};

const getRandomArrayElement = <Element>(arr: Array<Element>): Element => arr[getRandomInt(0, arr.length - 1)];

const getRandomUniqueArray = <Element>(arr: Array<Element>): Array<Element> => {
	const uniqueElements: Set<Element> = new Set();
	const arrayUniqueLength = new Set(arr).size;
	while(uniqueElements.size !== arrayUniqueLength) {
		uniqueElements.add(getRandomArrayElement(arr));
	}
	return Array.from(uniqueElements);
};

export {
	getRandomInt,
	getRandomArrayElement,
	getRandomUniqueArray
};
