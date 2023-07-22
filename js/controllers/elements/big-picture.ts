const bigPicture = document.querySelector<HTMLElement>('.big-picture')!;
const bigPictureImg = bigPicture.querySelector<HTMLImageElement>('.big-picture__img img')!;
const likesCount = bigPicture.querySelector<HTMLSpanElement>('.likes-count')!;
const commentsCount = bigPicture.querySelector<HTMLSpanElement>('.comments-count')!;
const pictureDescription = bigPicture.querySelector<HTMLParagraphElement>('.social__caption')!;
const commentsVisibleCount = bigPicture.querySelector<HTMLSpanElement>('.social__comment-count')!;
const closeButton = bigPicture.querySelector<HTMLButtonElement>('.big-picture__cancel')!;
const commentsContainer = bigPicture.querySelector<HTMLUListElement>('.social__comments')!;
const loadCommentsButton = bigPicture.querySelector<HTMLButtonElement>('.social__comments-loader')!;

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
	closeButton,
	commentsContainer,
	loadCommentsButton
};
