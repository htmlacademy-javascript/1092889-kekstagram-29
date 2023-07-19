import {addEscapeListener, removeModal, isEscape, removeEscapeListener, addModal} from './global-handlers';
import {setForm} from '../renderers/render-image-form';
import Pristine from 'pristinejs';
import {
	addValidationEngine,
	checkValidity,
	createValidation,
	resetValidity,
} from '../../core/validators/validation-manager';
import {
	addEffectsListener,
	addScaleListeners, removeEffectsListener,
	removeScaleListeners,
	setEffectsControls,
	setImageControls
} from './img-change-handlers';
import {addAlert} from './alerts-handlers.ts';
import {sendData} from '../../core/api/api.ts';

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
const imageUploadCancel = form.querySelector<HTMLButtonElement>('.img-upload__cancel')!;
const imageUploadInput = form.querySelector<HTMLInputElement>('.img-upload__input')!;
const {description, hashtags, effect, scale} = form.elements as ImageUploadForm;
const submitButton = form.elements.namedItem('upload-submit') as HTMLButtonElement;
const effectLevel = form.elements.namedItem('effect-level') as HTMLInputElement;
const scaleUp = form.querySelector<HTMLButtonElement>('.scale__control--bigger')!;
const scaleDown = form.querySelector<HTMLButtonElement>('.scale__control--smaller')!;

if(!form || !imageUploadOverlay || !imageUploadInput) {
	throw new Error('Form not found');
}
const initializeValidation = () => {
	addValidationEngine(new Pristine(form, {
		classTo: 'img-upload__field-wrapper',
		errorTextParent: 'img-upload__field-wrapper'}));
	createValidation(hashtags, 'hashtag');
	createValidation(description, 'description');
};
initializeValidation();


const escapeImageUploadForm = (evt: KeyboardEvent) => {
	const element = evt.target as HTMLElement;
	const isError = () => element.lastElementChild!.classList.contains('error');
	if(isEscape(evt) && !element.closest('.img-upload__field-wrapper') && !isError()){
		closeImageUploadForm();
	}
};
const toggleSubmitButtonState = (flag: boolean) => {
	if (flag) {
		submitButton.textContent = 'Опубликовать';
		submitButton.disabled = false;
	} else {
		submitButton.disabled = true;
		submitButton.textContent = 'Отправляется...';
	}
};
const onFormSubmitSuccess = () => {
	closeImageUploadForm();
	addAlert('success');
};

const onFormSubmitFail = (err: Error) => {
	addAlert('error');
	addAlert('custom', err.message);
	toggleSubmitButtonState(false);
};


const submitListener = async (evt: Event) => {
	evt.preventDefault();
	if (checkValidity()) {
		const formData = new FormData(form);
		toggleSubmitButtonState(true);
		await sendData(onFormSubmitSuccess, onFormSubmitFail, formData);
	}
};

const inputChangeListener = () => {
	submitButton.disabled = !checkValidity();
};

const addImageUploadFormListeners = () => {
	addEscapeListener(escapeImageUploadForm);
	form.addEventListener('submit', submitListener);
	form.addEventListener('input', inputChangeListener);
	imageUploadCancel.addEventListener('click', closeImageUploadForm);
	setImageControls(scale, scaleUp, scaleDown);
	setEffectsControls(effect, effectLevel);
	addEffectsListener();
	addScaleListeners();
};
const removeImageUploadFormListeners = () => {
	removeEscapeListener(escapeImageUploadForm);
	form.removeEventListener('submit', submitListener);
	form.removeEventListener('input', inputChangeListener);
	imageUploadCancel.removeEventListener('click', closeImageUploadForm);
	removeScaleListeners();
	removeEffectsListener();
};

function openImageUploadForm() {
	if (imageUploadInput.files![0].type.split('/')[0] !== 'image') {
		throw new Error('Is not an image');
	}
	const file = imageUploadInput.files![0];
	const imageUrl = URL.createObjectURL(file);
	setForm(imageUrl, file.name);
	imageUploadOverlay.classList.toggle('hidden');
	addImageUploadFormListeners();
	addModal();
}

function closeImageUploadForm(){
	form.reset();
	imageUploadOverlay.classList.toggle('hidden');
	removeImageUploadFormListeners();
	removeModal();
	resetValidity();
	toggleSubmitButtonState(false);
}


const addImageUploadInputListener = () => {
	imageUploadInput.addEventListener('change',openImageUploadForm);
};


export {addImageUploadInputListener,};
