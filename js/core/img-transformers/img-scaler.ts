const enum Default {
	MIN_VALUE = 25,
	MAX_VALUE = 100,
	ADD_VALUE = 25
}

const scaleUp = (value: number) => {
	value += Default.ADD_VALUE;
	if (value > Default.MAX_VALUE) {
		return 1;
	}
	return value / 100;
};

const scaleDown = (value: number) => {
	value -= Default.ADD_VALUE;
	if (value < Default.MIN_VALUE) {
		return 0.25;
	}
	return value / 100;
};

export {scaleUp, scaleDown};
