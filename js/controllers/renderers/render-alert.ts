import {render} from '../../utils/render';

type Alert = 'success' | 'error' | 'custom';

const alertContainer = document.body!;

const successAlertTemplate = document.querySelector<HTMLTemplateElement>('#success')!.content!
	.querySelector<HTMLElement>('.success')!;
const errorAlertTemplate = document.querySelector<HTMLTemplateElement>('#error')!.content!
	.querySelector<HTMLElement>('.error')!;

if (!successAlertTemplate || !errorAlertTemplate) {
	throw new Error('Missing error templates');
}

const createSuccessAlert = () => successAlertTemplate.cloneNode(true) as HTMLElement;

const createErrorAlert = () => errorAlertTemplate.cloneNode(true) as HTMLElement;

const createCustomAlert = (message: string) => {
	const customAlert = document.createElement('div');
	customAlert.classList.add('custom-alert');
	customAlert.innerText = message;
	return customAlert;
};


const showAlert = (type: Alert, message = '') => {
	switch (type) {
		case 'success': {
			const alert = createSuccessAlert();
			render(alertContainer,alert);
			return alert;
		}
		case 'error': {
			const alert = createErrorAlert();
			render(alertContainer,alert);
			return alert;
		}
		case 'custom': {
			const alert = createCustomAlert(message);
			render(alertContainer,alert);
			return alert;
		}
		default : {
			const alert = createCustomAlert('Alert of Alert');
			render(alertContainer,alert);
			return alert;
		}
	}
};

export {showAlert};
export type {Alert};
