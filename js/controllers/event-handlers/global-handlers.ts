
const isEscape = (key: string) => key === 'Escape';

const toggleModal = () => document.body.classList.toggle('modal-open');

const addEscapeListener = (listener: (evt: Event) => void) => {
	toggleModal();
	document.addEventListener('keydown',listener);
};

const removeEscapeListener = (listener: (evt: Event) => void) => {
	toggleModal();
	document.removeEventListener('keydown', listener);
};

export {isEscape, addEscapeListener, removeEscapeListener};

