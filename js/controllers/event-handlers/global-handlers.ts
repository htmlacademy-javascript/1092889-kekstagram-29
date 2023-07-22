const isEscape = ({key}: KeyboardEvent) => key === 'Escape';

const addModal = () => document.body.classList.add('modal-open');
const removeModal = () => document.body.classList.remove('modal-open');

const addEscapeListener = (listener: (evt: KeyboardEvent) => void) => {
	document.addEventListener('keydown',listener);
};

const removeEscapeListener = (listener: (evt: KeyboardEvent) => void) => {
	document.removeEventListener('keydown', listener);
};

export {isEscape, addEscapeListener, removeEscapeListener, addModal, removeModal};
