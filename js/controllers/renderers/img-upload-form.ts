import {effectsPreviews, effectValue, imagePreview, scaleValue} from '../elements/img-upload-form';

const setForm = (imgSrc: string, alt: string) => {
	imagePreview.src = imgSrc;
	imagePreview.alt = alt;
	Array.from(effectsPreviews).map((effectPreview) => {
		effectPreview.style.backgroundImage = `url(${imgSrc})`;
	});
};

const unsetForm = () => {
	Array.from(effectsPreviews).map((effectPreview) => {
		effectPreview.style.backgroundImage = '';
	});
};

const updateImageScale = (imageScale: number) => {
	scaleValue.value = `${imageScale}%`;
	imagePreview.style.transform = `scale(${(imageScale / 100).toString()})`;
};

const updateImageFilter = (type: string, value: string) => {
	imagePreview.style.filter = `${type}(${value})`;
	effectValue.value = `${parseFloat(value).toFixed(2)}`;
};

const resetImageFilter = () => {
	imagePreview.style.filter = '';
	effectValue.value = '100';
};

const resetImagePreview = () => {
	imagePreview.style.transform = '';
	scaleValue.value = '100%';
	resetImageFilter();
};

export {
	setForm,
	unsetForm,
	updateImageScale,
	updateImageFilter,
	resetImageFilter,
	resetImagePreview
};
