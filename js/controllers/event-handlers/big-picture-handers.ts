import {Photo} from '../../contracts/common.ts';
import {setBigPicture, unsetBigPicture} from '../renderers/render-big-picture.ts';
import {addEscapeListener, isEscape, removeEscapeListener} from './global-handlers.ts';
import {addComments, removeComments} from './comments-handlers.ts';

const closeButton = document.querySelector<HTMLButtonElement>('.big-picture__cancel')!;
closeButton.addEventListener('click', closeBigPicture);

const escapeBigPictureListener = (evt: KeyboardEvent) => {
	if(isEscape(evt)){

		closeBigPicture();
	}
};

function openBigPicture(photo:Photo) {
	const bigPicture = setBigPicture(photo);
	bigPicture.classList.remove('hidden');
	addEscapeListener(escapeBigPictureListener);
	addComments(photo);
}

function closeBigPicture() {
	const bigPicture = unsetBigPicture();
	bigPicture.classList.add('hidden');
	removeEscapeListener(escapeBigPictureListener);
	bigPicture.removeEventListener('click',closeBigPicture);
	removeComments();
}

export {
	openBigPicture,
};


