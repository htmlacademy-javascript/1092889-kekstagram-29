import {
	resetImageFilter,
	resetImagePreview,
	updateImageFilter,
	updateImageScale
} from '../../renderers/img-upload-form';
import {scaleDown, scaleUp} from '../../../core/img-transformers/scalers';
import {effectsMap, ScaleData, Effect} from '../../../core/img-transformers/effects';
import {API} from 'nouislider';
import * as noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';
import {
	effect, effectsWrapper,
	scale,
	scaleDownButton,
	scaleUpButton,
	sliderContainer,
	sliderWrapper
} from '../../elements/img-upload-form';

let currentSlider: API;

const createSlider = ({min,max,step}: ScaleData):API => noUiSlider.create(sliderWrapper,{
	start: max,
	range: {
		'min':min,
		'max':max
	},
	step: step,
	connect: 'lower'
});

sliderContainer.hidden = true;

const destroySlider = () => {
	if (currentSlider) {
		currentSlider.destroy();
	}
};
const resetEffect = () => {
	resetImageFilter();
	sliderContainer.hidden = true;
};

const updateEffectListener = (value: Array<string|number>) => {
	const effectValue = effect.value;
	const {effectType, units} = effectsMap.get(effectValue)!;
	updateImageFilter(effectType, `${value}${units}`);
};

const changeEffectListener = (evt: Event) => {
	evt.preventDefault();
	destroySlider();

	if (effect.value === 'none') {
		resetEffect();
		return;
	}
	const effectValue = effect.value as Effect;
	sliderContainer.hidden = false;

	const {scaleData} = effectsMap.get(effectValue)!;
	currentSlider = createSlider(scaleData);
	currentSlider.on('update', updateEffectListener);
};

const removeEffect = () => {
	destroySlider();
	resetEffect();
};

const increaseScale = (evt: Event) => {
	evt.preventDefault();
	updateImageScale(scaleUp(parseInt(scale.value,10)));
};

const decreaseScale = (evt: Event) => {
	evt.preventDefault();
	updateImageScale(scaleDown(parseInt(scale.value, 10)));
};

const addScaleListeners = () => {
	scaleUpButton.addEventListener('click',increaseScale);
	scaleDownButton.addEventListener('click', decreaseScale);
};

const addEffectListener = () => {
	effectsWrapper.addEventListener('change', changeEffectListener);
};


export {
	addScaleListeners,
	addEffectListener,
	removeEffect,
	resetImagePreview
};
