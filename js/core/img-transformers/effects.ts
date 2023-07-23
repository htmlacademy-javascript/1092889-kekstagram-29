type Effect = 'chrome' | 'sepia' | 'marvin' | 'phobos' | 'heat' | 'none'
type EffectFilter = 'grayscale' | 'sepia' | 'invert' | 'blur' | 'brightness' | 'none'
type ScaleData = {
	min: number,
	max: number,
	step: number
}
type Units = '' | 'px' | '%'

interface EffectData {
	effectType: EffectFilter,
	scaleData: ScaleData,
	units: Units
}

const effectsMap: Map<Omit<Effect, 'none'>, EffectData> = new Map([
	['chrome', {
		effectType: 'grayscale',
		scaleData: 	{min:0,max:1,step:0.1},
		units: ''
	}],
	['sepia',{
		effectType: 'sepia',
		scaleData: 	{min:0,max:1,step:0.1},
		units: ''
	}],
	['marvin',{
		effectType: 'invert',
		scaleData: 	{min:0,max:100,step:1},
		units: '%'
	}],
	['phobos',{
		effectType: 'blur',
		scaleData: 	{min:0,max:3,step:0.1},
		units: 'px'
	}],
	['heat',{
		effectType: 'brightness',
		scaleData: 	{min:0,max:3,step:0.1},
		units: ''
	}]
]);

export {effectsMap};
export type {Effect, ScaleData, Units};
