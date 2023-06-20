import {getRandomArrayElement, getRandomInt} from './utils/randomizers.ts';
import {User, PhotoComment, Photo} from './contracts/common.ts';
import {messages, names, descriptions} from './data/template-values.json';
enum Default {
	MinId = 1,
	MaxId = 25,
	MinPhotoAddress = 1,
	MaxPhotoAddress = 25,
	MinLikes = 15,
	MaxLikes = 200,
	MinComments = 0,
	MaxComments = 30,
	MinAvatarId = 1,
	MaxAvatarId = 6
}

export const getGeneratedMocks = (amount: number):Photo[] => {
	const getId = () => {
		let id = Default.MinId;
		return () => id++;
	};
	const getCommentId = getId();
	const getPhotoId = getId();
	const _getGeneratedUser = ():User => ({
		avatar: `img/avatar-${getRandomInt(Default.MinAvatarId,Default.MaxAvatarId)}.svg`,
		name: getRandomArrayElement(names)
	});

	const _getGeneratedComment = ():PhotoComment => {
		const user:User = _getGeneratedUser();
		return {
			avatar: user.avatar,
			id: getCommentId(),
			message: Array.from({length: getRandomInt(1, 2)}, () => getRandomArrayElement(messages)).join(' '),
			name: user.name
		};
	};

	const _getGeneratedPhoto = ():Photo => ({
		comments: Array.from({length: getRandomInt(Default.MinComments,Default.MaxComments)}, _getGeneratedComment),
		description: Array.from({length: getRandomInt(1, 6)}, () => getRandomArrayElement(descriptions)).join(' ') ,
		id: getPhotoId(),
		likes: getRandomInt(Default.MinLikes, Default.MaxLikes),
		url: `photos/${getRandomInt(Default.MinPhotoAddress,Default.MaxPhotoAddress)}.jpg`
	});
	return Array.from({length: amount}, _getGeneratedPhoto);
};

getGeneratedMocks(Default.MaxId);

