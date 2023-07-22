import {Photo} from '../../contracts/common';
import {
	bigPictureImg, commentsContainer,
	commentsCount, commentsVisibleCount,
	likesCount,
	pictureDescription
} from '../elements/big-picture-elements';

const clearCommentsSection = () => {
	commentsContainer.innerHTML = '';
};

const setBigPicture = ({url, likes, description, comments}: Photo)=> {

	bigPictureImg.src = url;
	bigPictureImg.alt = description;
	likesCount.textContent = likes.toString();
	commentsCount.textContent = comments.length.toString();
	pictureDescription.textContent = description;
	clearCommentsSection();
};

const unsetBigPicture = () => {

	bigPictureImg.src = '';
	bigPictureImg.alt = '';
	commentsCount.textContent = '';
	likesCount.textContent = '';
	pictureDescription.textContent = '';
	clearCommentsSection();
};

const updateVisibleCommentsCount = (amount: number) => {
	commentsVisibleCount.childNodes[0].textContent = `${amount} из `;
};


export {setBigPicture, unsetBigPicture, updateVisibleCommentsCount};
