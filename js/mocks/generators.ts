
import {Photo, PhotoComment, User} from '../contracts/common';
import {getRandomArrayElement, getRandomInt, getRandomUniqueInt} from '../utils/randomizers';
import {names, descriptions, messages} from './template-values.json';
export const enum Constants {
	MIN_ID = 1,
	MIN_PHOTO_ADDRESS = 1,
	MAX_PHOTO_ADDRESS = 25,
	MIN_LIKES = 15,
	MAX_LIKES = 200,
	MIN_COMMENTS = 0,
	MAX_COMMENTS = 30,
	MIN_AVATAR_ID = 1,
	MAX_AVATAR_ID = 6,
}

const getId = () => {
	let id = Constants.MIN_ID;
	return () => id++;
};


const getCommentId = getId();
const getPhotoId = getId();


const getGeneratedUser = ():User => ({
	avatar: `img/avatar-${getRandomInt(Constants.MIN_AVATAR_ID,Constants.MAX_AVATAR_ID)}.svg`,
	name: getRandomArrayElement(names)
});

const getGeneratedComment = ():PhotoComment => {
	const user:User = getGeneratedUser();
	return {
		...user,
		id: getCommentId(),
		message: Array.from({length: getRandomInt(1, 2)}, () => getRandomArrayElement(messages)).join(' '),
	};
};

const getGeneratedPhoto = ():Photo => ({
	comments: Array.from({length: getRandomInt(Constants.MIN_COMMENTS,Constants.MAX_COMMENTS)}, getGeneratedComment),
	description: Array.from({length: getRandomInt(1, 6)}, () => getRandomArrayElement(descriptions)).join(' ') ,
	id: getPhotoId(),
	likes: getRandomInt(Constants.MIN_LIKES, Constants.MAX_LIKES),
	url: `photos/${getRandomUniqueInt(Constants.MIN_PHOTO_ADDRESS,Constants.MAX_PHOTO_ADDRESS)}.jpg`
});
const getGeneratedMocks = (amount: number): Photo[] => Array.from({length: amount}, getGeneratedPhoto);

export {getGeneratedUser, getGeneratedComment, getGeneratedPhoto, getGeneratedMocks};
