interface ImageUploadForm extends HTMLFormControlsCollection{
	'upload-submit': HTMLButtonElement,
	description: HTMLTextAreaElement,
	hashtags: HTMLInputElement,
	effect: RadioNodeList,
	scale: HTMLInputElement,
	'effect-level': HTMLInputElement;
}

const form = document.querySelector<HTMLFormElement>('.img-upload__form')!;
const imageUploadOverlay = form.querySelector<HTMLDivElement>('.img-upload__overlay')!;
const imageUploadInput = form.querySelector<HTMLInputElement>('.img-upload__input')!;
const submitButton = form.elements.namedItem('upload-submit') as HTMLButtonElement;
const {effect,scale,description,hashtags} = form.elements as ImageUploadForm;
const scaleUpButton = form.querySelector<HTMLButtonElement>('.scale__control--bigger')!;
const scaleDownButton = form.querySelector<HTMLButtonElement>('.scale__control--smaller')!;
const sliderContainer = form.querySelector('.img-upload__effect-level')! as HTMLFieldSetElement;
const sliderWrapper = form.querySelector('.effect-level__slider') as HTMLDivElement;
const effectsWrapper = form.querySelector('.effects') as HTMLFieldSetElement;
const previewContainer = form.querySelector<HTMLDivElement>('.img-upload__preview')!;
const imagePreview = previewContainer.querySelector('img')!;
const effectsPreviews = form.querySelectorAll<HTMLSpanElement>('.effects__preview')!;
const scaleValue = form.querySelector<HTMLInputElement>('.scale__control--value')!;
const effectValue = form.querySelector<HTMLInputElement>('.effect-level__value')!;


if(!form || !imageUploadOverlay || !imageUploadInput || !previewContainer) {
	throw new Error('The markup has been broken, Cannot find Image Upload Form or it\'s parts');
}

export {
	form,
	imageUploadOverlay,
	imageUploadInput,
	submitButton,
	effect,
	scale,
	description,
	hashtags,
	scaleUpButton,
	scaleDownButton,
	sliderContainer,
	sliderWrapper,
	effectsWrapper,
	previewContainer,
	imagePreview,
	effectsPreviews,
	scaleValue,
	effectValue
};

