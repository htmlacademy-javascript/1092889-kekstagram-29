import {addEscapeListener, isEscape, removeEscapeListener} from './global-handlers';
import {setForm} from '../renderers/render-image-form';
import Pristine from 'pristinejs';
import {
	addValidationEngine,
	checkValidity,
	createValidation,
	resetValidity,
} from '../../core/validators/validation-manager.ts';

interface ImageUploadForm extends HTMLFormControlsCollection{
	'upload-submit': HTMLButtonElement,
	description: HTMLTextAreaElement,
	hashtags: HTMLInputElement,
}

const form = document.querySelector<HTMLFormElement>('.img-upload__form')!;
const imageUploadOverlay = form.querySelector<HTMLDivElement>('.img-upload__overlay')!;
const imageUploadCancel = form.querySelector<HTMLButtonElement>('.img-upload__cancel')!;
const imageUploadInput = form.querySelector<HTMLInputElement>('.img-upload__input')!;
const {description, hashtags} = form.elements as ImageUploadForm;
const submitButton = form.elements.namedItem('upload-submit') as HTMLButtonElement;

if(!form || !imageUploadOverlay || !imageUploadInput) {
	throw new Error('Form not found');
}

const escapeImageUploadForm = (evt: KeyboardEvent) => {
	const element = evt.target as HTMLElement;
	if(isEscape(evt) && !element.closest('.img-upload__field-wrapper')){
		closeImageUpload();
	}
};

const initializeValidation = () => {
	const pristine = new Pristine(form, {
		classTo: 'img-upload__field-wrapper',
		errorTextParent: 'img-upload__field-wrapper'
	});
	addValidationEngine(pristine);
	createValidation(hashtags, 'hashtag');
	createValidation(description, 'description');
};
const submitListener = (evt: Event) => {
	evt.preventDefault();

	if (checkValidity()) {
		closeImageUpload();
	}
};

const inputChangeListener = (evt: Event) => {
	evt.preventDefault();
	submitButton.disabled = !checkValidity();
};
function openImageUpload() {
	if (imageUploadInput.files![0].type.split('/')[0] !== 'image') {
		throw new Error('Is not an image');
	}
	const file = imageUploadInput.files![0];
	const imageUrl = URL.createObjectURL(file);
	setForm(imageUrl, file.name);
	imageUploadOverlay.classList.toggle('hidden');
	addEscapeListener(escapeImageUploadForm);
	initializeValidation();
	form.addEventListener('submit', submitListener);
	form.addEventListener('input', inputChangeListener);
	imageUploadCancel.addEventListener('click', closeImageUpload);
}

function closeImageUpload(){
	form.reset();
	imageUploadOverlay.classList.toggle('hidden');
	removeEscapeListener(closeImageUpload);
	form.removeEventListener('submit', submitListener);
	form.removeEventListener('input', inputChangeListener);
	imageUploadCancel.removeEventListener('click', closeImageUpload);
	resetValidity();
}

const createImageFormListeners = () => {
	imageUploadInput.addEventListener('change',openImageUpload);
};


export {createImageFormListeners};
