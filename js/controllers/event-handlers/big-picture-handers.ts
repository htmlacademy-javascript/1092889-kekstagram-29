import {Photo} from '../../contracts/common';
import {setBigPicture, unsetBigPicture} from '../renderers/render-big-picture';
import {addEscapeListener, hideModal, isEscape, removeEscapeListener, showModal} from './global-handlers';
import {addComments, removeComments} from './comments-handlers';

const closeButton = document.querySelector<HTMLButtonElement>('.big-picture__cancel')!;
closeButton.addEventListener('click', closeBigPicture);

const escapeBigPictureListener = (evt: KeyboardEvent) => {
	if(isEscape(evt)){
		closeBigPicture();
	}
};

function openBigPicture(photo:Photo) {
	const bigPicture = setBigPicture(photo);
	bigPicture.classList.toggle('hidden');
	addEscapeListener(escapeBigPictureListener);
	showModal();
	addComments(photo);
}

function closeBigPicture() {
	const bigPicture = unsetBigPicture();
	bigPicture.classList.toggle('hidden');
	removeEscapeListener(escapeBigPictureListener);
	hideModal();
	bigPicture.removeEventListener('click',closeBigPicture);
	removeComments();
}

export {
	openBigPicture,
};


