const enum Default {
	DIVISOR = 100
}
const convertToPercent = (number: number) => number / Default.DIVISOR;

export {convertToPercent};

