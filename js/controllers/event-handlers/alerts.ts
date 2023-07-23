import {showAlert} from '../renderers/alert';
import {Alert} from '../renderers/alert';
import {addEscapeListener, isEscape, removeEscapeListener} from './global';

const enum Default {
	ALERT_DURATION = 3000
}

let currentAlertNode: HTMLElement;
let alertCloseButton: HTMLButtonElement;
let alertInner: HTMLDivElement;
const escapeAlertListener = (evt: KeyboardEvent) => {
	if(isEscape(evt)) {
		removeAlert();
	}
};

const overlayClickListener = (evt: Event) => {
	evt.stopPropagation();
	const targetElement = evt.target as HTMLElement;
	if(targetElement.closest('div') !== alertInner) {
		removeAlert();
	}
};
const addAlertListeners = () => {
	currentAlertNode.addEventListener('click', overlayClickListener);
	alertCloseButton!.addEventListener('click', removeAlert);
	addEscapeListener(escapeAlertListener);
};
const removeAlertListeners = () => {
	currentAlertNode.removeEventListener('click', overlayClickListener);
	alertCloseButton!.removeEventListener('click', removeAlert);
	removeEscapeListener(escapeAlertListener);
};


const addAlert = (type: Alert, message = '') => {
	if(type === 'custom') {
		const alert = (showAlert(type,message));
		setTimeout(() => alert.remove(), Default.ALERT_DURATION);
		return;
	}
	currentAlertNode = (showAlert(type,message));
	alertCloseButton = currentAlertNode.querySelector<HTMLButtonElement>('button')!;
	alertInner = currentAlertNode.querySelector<HTMLDivElement>('div')!;
	addAlertListeners();
};
function removeAlert () {
	removeAlertListeners();
	currentAlertNode.remove();
}


export {addAlert};
