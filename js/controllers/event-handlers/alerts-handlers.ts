import {showAlert} from '../renderers/render-alert';
import {Alert} from '../renderers/render-alert';
import {addEscapeListener, removeModal, isEscape, removeEscapeListener, addModal} from './global-handlers';

const enum Default {
	ALERT_DURATION = 3000
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
	if(type === 'custom') {
		const alert = (showAlert(type,message));
		setTimeout(() => alert.remove(), Default.ALERT_DURATION);
		return;
	}
	currentAlertElement = (showAlert(type,message));
	alertType = type;
	alertCloseButton = currentAlertElement.querySelector<HTMLButtonElement>('button')!;
	alertInner = currentAlertElement.querySelector<HTMLDivElement>('div')!;
	addAlertListeners();
	addModal();
};
function removeAlert () {
	removeAlertListeners();
	if(alertType !== 'error') {
		removeModal();
	}
	currentAlertElement.remove();
}


export {addAlert};
