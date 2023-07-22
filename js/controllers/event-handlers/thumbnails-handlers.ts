import {getPhotoById} from '../../core/storage/photos';
import {openBigPicture} from './big-picture/big-picture-handers';
import {debounce} from '../../utils/debounce';
import {Photo} from '../../contracts/common';
import {renderThumbnails} from '../renderers/render-thumbnails';

const enum Default {
	DEBOUNCE_TIME = 500
}

const thumbnailsContainer = document.querySelector('.pictures')! as HTMLDivElement;


const thumbnailsClickListener = (evt: Event) => {
	const target = evt.target! as HTMLElement;
	if (target.closest('.picture')){
		evt.preventDefault();
		const thumbnail = target.closest('.picture') as HTMLAnchorElement;
		const photoId = new URL(thumbnail.href).pathname.split('/').pop();
		const photo = getPhotoById(Number(photoId));
		openBigPicture(photo);
	}
};

const createThumbnailsListeners = () => {
	thumbnailsContainer.addEventListener('click',thumbnailsClickListener);
};

const removeThumbnailsListeners = () => {
	thumbnailsContainer.removeEventListener('click',thumbnailsClickListener);
};

const rerenderThumbnails = (photos: Array<Photo>) => {
	const pictures = Array.from(thumbnailsContainer.querySelectorAll<HTMLAnchorElement>('.picture'))!;
	if (pictures.length > 0) {
		pictures.forEach((el) => el.remove());
		removeThumbnailsListeners();
	}
	renderThumbnails(...photos);
	createThumbnailsListeners();
};

const debouncedRerenderThumbnails = debounce<Photo>(rerenderThumbnails, Default.DEBOUNCE_TIME);


export {debouncedRerenderThumbnails, createThumbnailsListeners};
