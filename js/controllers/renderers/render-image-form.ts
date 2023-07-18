const form = document.querySelector('.img-upload__form')!;
const previewContainer = form.querySelector<HTMLDivElement>('.img-upload__preview')!;
const imagePreview = previewContainer.querySelector('img')!;
const setForm = (imgSrc: string, alt: string) => {
	imagePreview.src = imgSrc;
	imagePreview.alt = alt;
};

export {setForm};
