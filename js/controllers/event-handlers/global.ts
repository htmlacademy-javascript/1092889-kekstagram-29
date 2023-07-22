const isEscape = ({key}: KeyboardEvent) => key === 'Escape';

const addModalState = () => document.body.classList.add('modal-open');
const removeModalState = () => document.body.classList.remove('modal-open');

const addEscapeListener = (listener: (evt: KeyboardEvent) => void) => {
	document.addEventListener('keydown',listener);
};

const removeEscapeListener = (listener: (evt: KeyboardEvent) => void) => {
	document.removeEventListener('keydown', listener);
};

export {isEscape, addEscapeListener, removeEscapeListener, addModalState, removeModalState};

