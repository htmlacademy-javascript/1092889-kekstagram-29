import {Photo} from '../../contracts/common';
import {
	bigPictureImg,
	commentsCount, commentsVisibleCount,
	likesCount,
	pictureDescription
} from '../elements/big-picture-elements';

const setBigPicture = ({url, likes, description, comments}: Photo)=> {

	bigPictureImg.src = url;
	bigPictureImg.alt = description;
	likesCount.textContent = likes.toString();
	commentsCount.textContent = comments.length.toString();
	pictureDescription.textContent = description;
};

const unsetBigPicture = () => {

	bigPictureImg.src = '';
	bigPictureImg.alt = '';
	commentsCount.textContent = '';
	likesCount.textContent = '';
	pictureDescription.textContent = '';
};

const changeVisibleCommentsCount = (amount: number) => {
	commentsVisibleCount.childNodes[0].textContent = `${amount} из `;
};


export {setBigPicture, unsetBigPicture, changeVisibleCommentsCount};
