const scaleUp = (value: number) => {
	value += 25;
	if (value > 100) {
		return 1;
	}
	return value / 100;
};

const scaleDown = (value: number) => {
	value -= 25;
	if (value < 25) {
		return 0.25;
	}
	return value / 100;
};

export {scaleUp, scaleDown};
