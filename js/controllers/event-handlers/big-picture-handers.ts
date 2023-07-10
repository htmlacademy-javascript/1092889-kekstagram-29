import {Photo} from '../../contracts/common.ts';
import {setBigPicture, unsetBigPicture} from '../renderers/render-big-picture.ts';
import {addEscapeListener, isEscape, removeEscapeListener} from './global-handlers.ts';


const openBigPicture = (photo:Photo) => {
	const bigPicture = setBigPicture(photo);
	const closeButton = bigPicture.querySelector<HTMLButtonElement>('.big-picture__cancel')!;
	bigPicture.classList.remove('hidden');
	addEscapeListener(escapeBigPictureListener);
	closeButton.addEventListener('click', closeBigPicture);
};

const closeBigPicture = () => {
	const bigPicture = unsetBigPicture();
	const closeButton = bigPicture.querySelector<HTMLButtonElement>('.big-picture__cancel')!;
	bigPicture.classList.add('hidden');
	removeEscapeListener(escapeBigPictureListener);
	bigPicture.removeEventListener('click',closeBigPicture);
	closeButton.removeEventListener('click', closeBigPicture);
};


const escapeBigPictureListener = ({key}: KeyboardEvent) => {
	if(isEscape(key)){
		closeBigPicture();
	}
};


export {openBigPicture, closeBigPicture};


