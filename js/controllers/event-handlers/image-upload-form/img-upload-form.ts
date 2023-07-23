import {
	form,
	imageUploadInput,
	imageUploadOverlay,
	submitButton
} from '../../elements/img-upload-form';
import {addEscapeListener, removeModalState, isEscape, removeEscapeListener, addModalState} from '../global';
import {resetImagePreview, setForm, unsetForm} from '../../renderers/img-upload-form';
import {
	checkValidity,
	resetValidity,
} from '../../validators/img-upload-form';
import {
	addEffectListener,
	addScaleListeners, removeEffect,
} from './img-change';
import {addAlert} from '../alerts';
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
const formSubmitSuccessHandler = () => {
	form.reset();
	addAlert('success');
};

const formSubmitFailHandler = (err: Error) => {
	addAlert('custom', err.message);
	addAlert('error');
	toggleSubmitButtonState(true);
};


const submitListener = async (evt: Event) => {
	evt.preventDefault();
	if (checkValidity()) {
		const formData = new FormData(form);
		toggleSubmitButtonState(false);
		await sendData(formSubmitSuccessHandler, formSubmitFailHandler, formData);
	}
};

const inputChangeListener = () => {
	submitButton.disabled = !checkValidity();
};

form.addEventListener('reset', closeImageUploadForm);
form.addEventListener('submit', submitListener);
form.addEventListener('input', inputChangeListener);

addEffectListener();
addScaleListeners();

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
	addEscapeListener(escapeImageUploadForm);
	addModalState();
};

function closeImageUploadForm(){
	unsetForm();
	imageUploadOverlay.classList.toggle('hidden');
	removeEscapeListener(escapeImageUploadForm);
	removeModalState();
	resetValidity();
	resetImagePreview();
	removeEffect();
	toggleSubmitButtonState(true);
}

const addImageUploadInputListener = () => {
	imageUploadInput.addEventListener('change',openImageUploadForm);
};


export {addImageUploadInputListener};
