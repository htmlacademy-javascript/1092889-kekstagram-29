import {Photo} from '../../contracts/common.ts';

const bigPicture = document.querySelector<HTMLElement>('.big-picture');
const bigPictureImg = bigPicture?.querySelector<HTMLImageElement>('.big-picture__img img');
const likesCount = bigPicture?.querySelector<HTMLSpanElement>('.likes-count');
const commentsCount = bigPicture?.querySelector<HTMLSpanElement>('.comments-count');
const pictureDescription = bigPicture?.querySelector<HTMLParagraphElement>('.social__caption');

if (!bigPicture || !bigPictureImg || !likesCount || !commentsCount || !pictureDescription) {
	throw new Error('Big picture not found');
}
const setBigPicture = ({url, likes, description}: Photo): HTMLElement=> {

	bigPictureImg.src = url;
	bigPictureImg.alt = description;
	likesCount.textContent = likes.toString();
	commentsCount.hidden = true;
	pictureDescription.textContent = description;

	return bigPicture;
};

const unsetBigPicture = (): HTMLElement => {

	bigPictureImg.src = '';
	bigPictureImg.alt = '';
	likesCount.textContent = '';
	commentsCount.textContent = '';
	pictureDescription.textContent = '';

	return bigPicture;
};

export {setBigPicture, unsetBigPicture};
