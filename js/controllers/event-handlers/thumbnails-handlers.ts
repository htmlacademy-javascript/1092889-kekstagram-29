//import {openBigPicture} from './thumbnails-handlers.ts';


import {getPhotoById} from '../../core/storage/photos.ts';
import {openBigPicture} from './big-picture-handers.ts';

const createThumbnailsListeners = () => {
	const thumbnailsContainer = document.querySelector('.pictures')! as HTMLDivElement;


	thumbnailsContainer.addEventListener('click',(evt) => {
		evt.preventDefault();
		const target = evt.target! as HTMLElement;
		if (target.closest('.picture')){
			const thumbnail = target.closest('.picture') as HTMLAnchorElement;
			const photoId = new URL(thumbnail.href).pathname.split('/').pop();
			const photo = getPhotoById(Number(photoId));
			openBigPicture(photo);
		}
	});

};

export {createThumbnailsListeners};
