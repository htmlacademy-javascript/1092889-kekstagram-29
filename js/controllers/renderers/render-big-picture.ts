import {Photo} from '../../contracts/common.ts';

const bigPicture = document.querySelector<HTMLElement>('.big-picture');
const bigPictureImg = bigPicture?.querySelector<HTMLImageElement>('.big-picture__img img');
const likesCount = bigPicture?.querySelector<HTMLSpanElement>('.likes-count');
const commentsCount = bigPicture?.querySelector<HTMLSpanElement>('.comments-count');
const pictureDescription = bigPicture?.querySelector<HTMLParagraphElement>('.social__caption');
const commentsVisibleCount = document.querySelector<HTMLSpanElement>('.social__comment-count')!;

if (!bigPicture || !bigPictureImg || !likesCount || !commentsCount || !pictureDescription || !commentsVisibleCount) {
	throw new Error('Big picture not found');
}
const setBigPicture = ({url, likes, description, comments}: Photo): HTMLElement=> {

	bigPictureImg.src = url;
	bigPictureImg.alt = description;
	likesCount.textContent = likes.toString();
	commentsCount.textContent = comments.length.toString();
	pictureDescription.textContent = description;

	return bigPicture;
};

const unsetBigPicture = (): HTMLElement => {

	bigPictureImg.src = '';
	bigPictureImg.alt = '';
	commentsCount.textContent = '';
	likesCount.textContent = '';
	pictureDescription.textContent = '';

	return bigPicture;
};

const changeVisibleCommentsCount = (amount: number) => {
	commentsVisibleCount.childNodes[0].textContent = `${amount} из `;
};


export {setBigPicture, unsetBigPicture, changeVisibleCommentsCount};
