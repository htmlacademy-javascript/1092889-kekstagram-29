const bigPicture = document.querySelector<HTMLElement>('.big-picture')!;
const bigPictureImg = bigPicture.querySelector<HTMLImageElement>('.big-picture__img img')!;
const likesCount = bigPicture.querySelector<HTMLSpanElement>('.likes-count')!;
const commentsCount = bigPicture.querySelector<HTMLSpanElement>('.comments-count')!;
const pictureDescription = bigPicture.querySelector<HTMLParagraphElement>('.social__caption')!;
const commentsVisibleCount = bigPicture.querySelector<HTMLSpanElement>('.social__comment-count')!;
const closeButton = bigPicture.querySelector<HTMLButtonElement>('.big-picture__cancel')!;

if (!bigPicture) {
	throw new Error('Big picture not found');
}

export {
	bigPicture,
	bigPictureImg,
	likesCount,
	commentsCount,
	pictureDescription,
	commentsVisibleCount,
	closeButton
};
