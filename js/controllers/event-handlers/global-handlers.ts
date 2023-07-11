
const isEscape = ({key}: KeyboardEvent) => key === 'Escape';

const toggleModal = () => document.body.classList.toggle('modal-open');

const addEscapeListener = (listener: (evt: KeyboardEvent) => void) => {
	toggleModal();
	document.addEventListener('keydown',listener);
};

const removeEscapeListener = (listener: (evt: KeyboardEvent) => void) => {
	toggleModal();
	document.removeEventListener('keydown', listener);
};

export {isEscape, addEscapeListener, removeEscapeListener};

