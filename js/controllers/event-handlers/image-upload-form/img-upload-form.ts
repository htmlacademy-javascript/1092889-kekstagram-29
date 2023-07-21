import {
	form,
	description,
	hashtags,
	imageUploadInput,
	imageUploadOverlay,
	submitButton
} from '../../elements/form-elements';
import {addEscapeListener, removeModal, isEscape, removeEscapeListener, addModal} from '../global-handlers';
import {resetImagePreview, setForm, unsetForm} from '../../renderers/render-image-form';
import Pristine from 'pristinejs';
import {
	addValidationEngine,
	checkValidity,
	createValidation,
	resetValidity,
} from '../../../core/validators/validation-manager';
import {
	addEffectsListener,
	addScaleListeners, removeEffects,
} from './img-change-handlers';
import {addAlert} from '../alerts-handlers';
import {sendData} from '../../../core/api/api';

const IMAGE_EXTENSIONS = ['png', 'jpeg', 'jpg'];

const escapeImageUploadForm = (evt: KeyboardEvent) => {
	const element = evt.target as HTMLElement;
	const isError = () => document.body.lastElementChild!.classList.contains('error');
	if(isEscape(evt) && !element.closest('.img-upload__field-wrapper') && !isError()){
		form.reset();
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
	form.reset();
	addAlert('success');
};

const onFormSubmitFail = (err: Error) => {
	addAlert('custom', err.message);
	addAlert('error');
	toggleSubmitButtonState(true);
};


const submitListener = async (evt: Event) => {
	evt.preventDefault();
	if (checkValidity()) {
		const formData = new FormData(form);
		toggleSubmitButtonState(false);
		await sendData(onFormSubmitSuccess, onFormSubmitFail, formData);
	}
};

const inputChangeListener = () => {
	submitButton.disabled = !checkValidity();
};

addValidationEngine(new Pristine(form, {
	classTo: 'img-upload__field-wrapper',
	errorTextParent: 'img-upload__field-wrapper'}));
createValidation(hashtags, 'hashtag');
createValidation(description, 'description');

form.addEventListener('reset', closeImageUploadForm);
form.addEventListener('submit', submitListener);
form.addEventListener('input', inputChangeListener);

addEffectsListener();
addScaleListeners();

const addImageUploadFormListeners = () => {
	addEscapeListener(escapeImageUploadForm);
};
const removeImageUploadFormListeners = () => {
	removeEscapeListener(escapeImageUploadForm);
	resetImagePreview();
	removeEffects();
};


const openImageUploadForm = () => {
	if (!IMAGE_EXTENSIONS.some((el) => imageUploadInput.files![0].type.endsWith(el))) {
		addAlert('custom', 'Выбранное изображение может быть форматов \'jpg\', \'jpeg\', \'png\'');
		form.reset();
		return;
	}
	const file = imageUploadInput.files![0];
	const imageUrl = URL.createObjectURL(file);
	setForm(imageUrl, file.name);
	imageUploadOverlay.classList.toggle('hidden');
	addImageUploadFormListeners();
	addModal();
};

function closeImageUploadForm(){
	unsetForm();
	imageUploadOverlay.classList.toggle('hidden');
	removeImageUploadFormListeners();
	removeModal();
	resetValidity();
	toggleSubmitButtonState(true);
}

const addImageUploadInputListener = () => {
	imageUploadInput.addEventListener('change',openImageUploadForm);
};


export {addImageUploadInputListener};