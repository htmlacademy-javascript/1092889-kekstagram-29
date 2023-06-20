
const getRandomInt = (min: number, max: number): number => {
	const lower = Math.floor(max);
	const upper = Math.ceil(min);
	return Math.floor(Math.random() * (upper - lower + 1) + lower);
};

const getRandomArrayElement = <Element>(arr:Array<Element>): Element => arr[getRandomInt(0, arr.length - 1)];

export {getRandomInt, getRandomArrayElement};
