import {getRandomArrayElement, getRandomInt} from './utils/randomizers.ts';
import {User, PhotoComment, Photo} from './contracts/common.ts';
import {messages, names, descriptions} from './data/template-values.json';
import {Constants} from './data/constants.ts';

const enum Default {
	AMOUNT = 25
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
	url: `photos/${getRandomInt(Constants.MIN_PHOTO_ADDRESS,Constants.MAX_PHOTO_ADDRESS)}.jpg`
});
export const getGeneratedMocks = (amount: number): Photo[] => Array.from({length: amount}, getGeneratedPhoto);

getGeneratedMocks(Default.AMOUNT);

