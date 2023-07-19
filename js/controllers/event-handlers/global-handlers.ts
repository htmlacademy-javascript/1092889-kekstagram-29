const isEscape = ({key}: KeyboardEvent) => key === 'Escape';

const showModal = () => document.body.classList.add('modal-open');
const hideModal = () => document.body.classList.remove('modal-open');

const addEscapeListener = (listener: (evt: KeyboardEvent) => void) => {
	document.addEventListener('keydown',listener);
};

const removeEscapeListener = (listener: (evt: KeyboardEvent) => void) => {
	document.removeEventListener('keydown', listener);
};

export {isEscape, addEscapeListener, removeEscapeListener, showModal, hideModal};

