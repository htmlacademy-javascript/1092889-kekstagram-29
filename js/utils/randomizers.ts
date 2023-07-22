const getRandomInt = (min: number, max: number): number => {
	const lower = Math.floor(min);
	const upper = Math.ceil(max);
	return Math.floor(Math.random() * (upper - lower + 1) + lower);
};

const getRandomArrayElement = <Element>(arr: Array<Element>): Element => arr[getRandomInt(0, arr.length - 1)];

const randomUniqueIntConstructor = () => {
	const uniqueNumbers: Set<number> = new Set();
	return function (min: number, max: number):number {
		while (true) {
			const randomNumber = getRandomInt(min, max);
			if (!uniqueNumbers.has(randomNumber)) {
				uniqueNumbers.add(randomNumber);
				return randomNumber;
			}
		}
	};
};

const getRandomUniqueArray = <Element>(arr: Array<Element>): Array<Element> => {
	const uniqueElements: Set<Element> = new Set();
	const arrayUniqueLength = new Set(arr).size;
	while(uniqueElements.size !== arrayUniqueLength) {
		uniqueElements.add(getRandomArrayElement(arr));
	}
	return Array.from(uniqueElements);
};
const getRandomUniqueInt = randomUniqueIntConstructor();

export {
	getRandomInt,
	getRandomArrayElement,
	getRandomUniqueInt,
	getRandomUniqueArray
};
