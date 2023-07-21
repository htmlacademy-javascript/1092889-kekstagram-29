import {render} from '../../utils/render';
import {errorAlertTemplate, successAlertTemplate} from '../elements/template-elements';

type Alert = 'success' | 'error' | 'custom';

const alertContainer = document.body!;

const createSuccessAlertNode = () => successAlertTemplate.cloneNode(true) as HTMLElement;

const createErrorAlertNode = () => errorAlertTemplate.cloneNode(true) as HTMLElement;

const createCustomAlertNode = (message: string) => {
	const customAlert = document.createElement('div');
	customAlert.classList.add('custom-alert');
	customAlert.innerText = message;
	return customAlert;
};


const showAlert = (type: Alert, message = '') => {
	switch (type) {
		case 'success': {
			const alert = createSuccessAlertNode();
			render(alertContainer,alert);
			return alert;
		}
		case 'error': {
			const alert = createErrorAlertNode();
			render(alertContainer,alert);
			return alert;
		}
		case 'custom': {
			const alert = createCustomAlertNode(message);
			render(alertContainer,alert);
			return alert;
		}
		default : {
			const alert = createCustomAlertNode('Alert of Alert');
			render(alertContainer,alert);
			return alert;
		}
	}
};

export {showAlert};
export type {Alert};
