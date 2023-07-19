import {showAlert} from '../renderers/render-alert';
import {Alert} from '../renderers/render-alert';
import {addEscapeListener, hideModal, isEscape, removeEscapeListener, showModal} from './global-handlers.ts';

const enum Default {
	ALERT_TIME = 3000
}

let currentAlertElement: HTMLElement;
let alertCloseButton: HTMLButtonElement;
let alertInner: HTMLDivElement;
let alertType: Alert;
const escapeAlertListener = (evt: KeyboardEvent) => {
	if(isEscape(evt)) {
		removeAlert();
	}
};

const addOutsideListener = (evt: Event) => {
	evt.stopPropagation();
	const targetElement = evt.target as HTMLElement;
	if(targetElement.closest('div') !== alertInner) {
		removeAlert();
	}
};
const addAlertListeners = () => {
	alertCloseButton!.addEventListener('click', removeAlert);
	currentAlertElement.addEventListener('click', addOutsideListener);
	addEscapeListener(escapeAlertListener);
};
const removeAlertListeners = () => {
	alertCloseButton!.removeEventListener('click', removeAlert);
	currentAlertElement.removeEventListener('click', addOutsideListener);
	removeEscapeListener(escapeAlertListener);
};


const addAlert = (type: Alert, message = '') => {
	currentAlertElement = (showAlert(type,message));
	if(type === 'custom') {
		setTimeout(() => currentAlertElement.remove(), Default.ALERT_TIME);
		return;
	}
	alertType = type;
	alertCloseButton = currentAlertElement.querySelector<HTMLButtonElement>('button')!;
	alertInner = currentAlertElement.querySelector<HTMLDivElement>('div')!;
	addAlertListeners();
	showModal();
};
function removeAlert () {
	removeAlertListeners();
	if(alertType !== 'error') {
		hideModal();
	}
	currentAlertElement.remove();
}


export {addAlert};
