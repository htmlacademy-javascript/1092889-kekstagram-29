import {
	resetImageFilter,
	resetImagePreview,
	updateImageFilter,
	updateImageScale
} from '../renderers/render-image-form';
import {scaleDown, scaleUp} from '../../core/img-transformers/img-scaler';
import {Effects, EFFECTS_MAP, Scale, SCALE_MAP, UNITS} from '../../core/img-transformers/img-filters';
import {API} from 'nouislider';
import * as noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';

let scale: HTMLInputElement;
let effects: RadioNodeList;
let eventRoot: HTMLElement;
let sliderRoot: HTMLDivElement;
let sliderContainer: HTMLFieldSetElement;
let scaleUpButton: HTMLButtonElement;
let scaleDownButton: HTMLButtonElement;
let currentSlider: API;

const createSlider = ({min,max,step}: Scale):API => noUiSlider.create(sliderRoot,{
	start: max,
	range: {
		'min':min,
		'max':max
	},
	step: step,
	connect: 'lower'
});

const destroySlider = () => {
	if (currentSlider) {
		currentSlider.destroy();
	}
};

const setImageControls = (scaleInput: HTMLInputElement, scaleUpControl: HTMLButtonElement, scaleDownControl: HTMLButtonElement) => {
	scaleUpButton = scaleUpControl;
	scaleDownButton = scaleDownControl;
	scale = scaleInput;
};

const setEffectsControls = (effectsRootNode: RadioNodeList, sliderInput: HTMLInputElement) => {
	effects = effectsRootNode;
	sliderRoot = sliderInput.nextElementSibling as HTMLDivElement;
	sliderContainer = sliderRoot.parentElement! as HTMLFieldSetElement;
	const effectNode = effects[0] as HTMLInputElement;
	eventRoot = effectNode.closest('fieldset')!;
};
const resetEffects = () => {
	resetImageFilter();
	sliderContainer.hidden = true;
};

const updateEffectsListener = (value: Array<string|number>) => {
	const effect = effects.value;
	updateImageFilter(EFFECTS_MAP.get(effect)!, `${value}${UNITS.get(effect)}`);
};

const changeEffectsListener = (evt: Event) => {
	evt.preventDefault();
	destroySlider();
	if (effects.value === 'none') {
		resetEffects();
		return;
	}
	const effect = effects.value as Effects;
	sliderContainer.hidden = false;
	currentSlider = createSlider(SCALE_MAP.get(effect)!);
	updateImageFilter(EFFECTS_MAP.get(effect)!, `${SCALE_MAP.get(effect)!.max}${UNITS.get(effect)}`);
	currentSlider.on('update', updateEffectsListener);
};

const addEffectsListener = () => {
	eventRoot.addEventListener('change', changeEffectsListener);
};
const removeEffectsListener = () => {
	eventRoot.removeEventListener('change', changeEffectsListener);
	destroySlider();
	resetEffects();
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

const removeScaleListeners = () => {
	scaleUpButton.removeEventListener('click',increaseScale);
	scaleDownButton.removeEventListener('click', decreaseScale);
	resetImagePreview();
};


export {
	setImageControls,
	addScaleListeners,
	removeScaleListeners,
	addEffectsListener,
	removeEffectsListener,
	setEffectsControls
};
