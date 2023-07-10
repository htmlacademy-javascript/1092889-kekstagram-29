import {Photo} from '../../contracts/common.ts';
import {setBigPicture, unsetBigPicture} from '../renderers/render-big-picture.ts';
import {addEscapeListener, isEscape, removeEscapeListener} from './global-handlers.ts';
import {addCommentsListener, removeCommentsListener} from './comments-handlers.ts';
const escapeBigPictureListener = ({key}: KeyboardEvent) => {
	if(isEscape(key)){
		closeBigPicture();
	}
};

function openBigPicture(photo:Photo) {
	const bigPicture = setBigPicture(photo);
	const closeButton = bigPicture.querySelector<HTMLButtonElement>('.big-picture__cancel')!;
	bigPicture.classList.remove('hidden');
	addEscapeListener(escapeBigPictureListener);
	closeButton.addEventListener('click', closeBigPicture);
	addCommentsListener();
}

function closeBigPicture() {
	const bigPicture = unsetBigPicture();
	const closeButton = bigPicture.querySelector<HTMLButtonElement>('.big-picture__cancel')!;
	bigPicture.classList.add('hidden');
	removeEscapeListener(escapeBigPictureListener);
	bigPicture.removeEventListener('click',closeBigPicture);
	closeButton.removeEventListener('click', closeBigPicture);
	removeCommentsListener();
}

export {
	openBigPicture,
};


