const enum Default {
	MIN_VALUE = 25,
	MAX_VALUE = 100,
	ADD_VALUE = 25
}

const scaleUp = (value: number) => {
	value += Default.ADD_VALUE;
	if (value >= Default.MAX_VALUE) {
		return Default.MAX_VALUE;
	}
	return value;
};

const scaleDown = (value: number) => {
	value -= Default.ADD_VALUE;
	if (value <= Default.MIN_VALUE) {
		return Default.MIN_VALUE;
	}
	return value;
};

export {scaleUp, scaleDown};
