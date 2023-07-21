import {Photo} from '../../contracts/common';
import {render} from '../../utils/render';
import {thumbnailTemplate} from '../elements/template-elements';

const picturesContainer = document?.querySelector('.pictures') as HTMLDivElement;
if (!picturesContainer) {
	throw new Error('Container');
}

const createThumbnailNode = (photo: Photo): HTMLElement => {

	const thumbnail = thumbnailTemplate.cloneNode(true) as HTMLAnchorElement;
	const pictureImg = thumbnail.querySelector('.picture__img') as HTMLImageElement;
	const pictureInfo = thumbnail.querySelector('.picture__info') as HTMLParagraphElement;
	const pictureComments = pictureInfo.querySelector('.picture__comments') as HTMLSpanElement;
	const pictureLikes = pictureInfo.querySelector('.picture__likes') as HTMLSpanElement;

	thumbnail.href = `photos/${photo.id}`;
	pictureImg.src = photo.url;
	pictureImg.alt = photo.description;
	pictureComments.textContent = photo.comments.length.toString();
	pictureLikes.textContent = photo.likes.toString();

	return thumbnail;
};
const renderThumbnails = (photos: Array<Photo>): void => {
	const thumbnails = photos.map(createThumbnailNode);
	render(picturesContainer, ...thumbnails);
};


export {renderThumbnails};

