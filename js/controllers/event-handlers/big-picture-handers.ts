import {Photo} from '../../contracts/common';
import {setBigPicture, unsetBigPicture} from '../renderers/render-big-picture';
import {addEscapeListener, removeModal, isEscape, removeEscapeListener, addModal} from './global-handlers';
import {addComments, removeComments} from './comments-handlers';
import {bigPicture, closeButton} from '../elements/big-picture-elements';


closeButton.addEventListener('click', closeBigPicture);
const escapeBigPictureListener = (evt: KeyboardEvent) => {
	if(isEscape(evt)){
		closeBigPicture();
	}
};

const openBigPicture = (photo:Photo) => {
	setBigPicture(photo);
	bigPicture.classList.toggle('hidden');
	addEscapeListener(escapeBigPictureListener);
	addModal();
	addComments(photo);
};

function closeBigPicture() {
	unsetBigPicture();
	bigPicture.classList.toggle('hidden');
	removeEscapeListener(escapeBigPictureListener);
	removeModal();
	removeComments();
}

export {
	openBigPicture,
};


