type Effects = 'chrome' | 'sepia' | 'marvin' | 'phobos' | 'heat' | 'none'
type Scale = {
	min: number,
	max: number,
	step: number
}
type Units = '' | 'px' | '%'
const effectsMap: Map<Omit<Effects, 'none'>, string> = new Map([
	['chrome', 'grayscale'],
	['sepia', 'sepia'],
	['marvin', 'invert'],
	['phobos', 'blur'],
	['heat', 'brightness']

]);
const scaleMap:Map<Omit<Effects, 'none'>, Scale> = new Map([
	['chrome',{min:0,max:1,step:0.1}],
	['sepia',{min:0,max:1,step:0.1}],
	['marvin',{min:0,max:100,step:1}],
	['phobos',{min:0,max:3,step:0.1}],
	['heat',{min:0,max:3,step:0.1}]
]);

const units:Map<Omit<Effects, 'none'>, Units> = new Map([
	['chrome',''],
	['sepia',''],
	['marvin','%'],
	['phobos','px'],
	['heat','']
]);

export {effectsMap, scaleMap, units};
export type {Effects, Scale, Units};
