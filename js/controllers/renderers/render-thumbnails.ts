import {Photo} from '../../contracts/common';
import {render} from '../../utils/render';


const template = document.querySelector<HTMLTemplateElement>('#picture')?.content as DocumentFragment;
const picturesContainer = document?.querySelector('.pictures') as HTMLDivElement;
if (!template || !picturesContainer) {
	throw new Error('Missing template or container');
}

const createPictureNode = (photo: Photo): HTMLElement => {

	const thumbnail = template.querySelector('.picture')!.cloneNode(true) as HTMLAnchorElement;
	const pictureImg = thumbnail.querySelector('.picture__img') as HTMLImageElement;
	const pictureInfo = thumbnail.querySelector('.picture__info') as HTMLParagraphElement;
	const pictureComments = pictureInfo.querySelector('.picture__comments') as HTMLSpanElement;
	const pictureLikes = pictureInfo.querySelector('.picture__likes') as HTMLSpanElement;

	thumbnail.href = `photos/${photo.id}`;
	pictureImg.src = photo.url;
	pictureComments.textContent = photo.comments.length.toString();
	pictureLikes.textContent = photo.likes.toString();

	return thumbnail;
};
const renderThumbnails = (photos: Array<Photo>): void => {
	const thumbnails = photos.map(createPictureNode);
	render(picturesContainer, ...thumbnails);
};


export {renderThumbnails};

