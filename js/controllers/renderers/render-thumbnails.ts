import {Photo} from '../../contracts/common';
import {render} from '../../utils/render';
import {thumbnailTemplate} from '../elements/template-elements';

const thumbnailsContainer = document.querySelector('.pictures')! as HTMLDivElement;
if (!thumbnailsContainer) {
	throw new Error('Thumbnails container not found');
}

const createThumbnailNode = (photo: Photo): HTMLElement => {

	const thumbnail = thumbnailTemplate.cloneNode(true) as HTMLAnchorElement;
	const thumbnailImg = thumbnail.querySelector('.picture__img') as HTMLImageElement;
	const thumbnailInfo = thumbnail.querySelector('.picture__info') as HTMLParagraphElement;
	const thumbnailComments = thumbnailInfo.querySelector('.picture__comments') as HTMLSpanElement;
	const thumbnailLikes = thumbnailInfo.querySelector('.picture__likes') as HTMLSpanElement;

	thumbnail.href = `photos/${photo.id}`;
	thumbnailImg.src = photo.url;
	thumbnailImg.alt = photo.description;
	thumbnailComments.textContent = photo.comments.length.toString();
	thumbnailLikes.textContent = photo.likes.toString();

	return thumbnail;
};
const renderThumbnails = (...photos: Array<Photo>): void => {
	const thumbnails = photos.map(createThumbnailNode);
	render(thumbnailsContainer, ...thumbnails);
};


export {renderThumbnails};

