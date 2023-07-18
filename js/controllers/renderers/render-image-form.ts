const form = document.querySelector('.img-upload__form')!;
const previewContainer = form.querySelector<HTMLDivElement>('.img-upload__preview')!;
const imagePreview = previewContainer.querySelector('img')!;
const scaleValue = form.querySelector<HTMLInputElement>('.scale__control--value')!;
const effectValue = form.querySelector<HTMLInputElement>('.effect-level__value')!;
const setForm = (imgSrc: string, alt: string) => {
	imagePreview.src = imgSrc;
	imagePreview.alt = alt;
};

const updateImageScale = (imageScale: number) => {
	imagePreview.style.transform = `scale(${imageScale.toString()})`;
	scaleValue.value = `${imageScale * 100}%`;
};

const updateImageFilter = (type: string, value: string) => {
	imagePreview.style.filter = `${type}(${value})`;
	effectValue.value = `${parseFloat(value)}`;
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
	updateImageScale,
	updateImageFilter,
	resetImageFilter,
	resetImagePreview
};
