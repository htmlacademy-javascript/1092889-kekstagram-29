import {getRandomArrayElement, getRandomInt} from './utils/randomizers.ts';
import {User, PhotoComment, Photo} from './contracts/types.ts';

enum Default {
	MinId = 1,
	MaxId = 25,
	MinPhotoAddress = 1,
	maxPhotoAddress = 25,
	MinLikes = 15,
	MaxLikes = 200,
	MinComments = 0,
	MaxComments = 200,
	MinAvatarId = 1,
	MaxAvatarId = 6
}

const TEMPLATE_MESSAGES = ['Всё отлично!',
	'В целом всё неплохо. Но не всё.',
	'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
	'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
	'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
	'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];

const NAMES = [
	'Андрей',
	'Борис',
	'Владимир',
	'Геннадий',
	'Дмитрий',
	'Евгений',
	'Женя'
];


const getGeneratedMocks = (amount: number):Photo[] => {
	const idStorage = {
		id: Default.MinId,
		getNewId: function():number {
			return this.id++;
		}
	};
	const _getGeneratedUser = ():User => ({
		avatar: `img/avatar-${getRandomInt(Default.MinAvatarId,Default.MaxAvatarId)}.svg`,
		name: getRandomArrayElement(NAMES),
		surname: getRandomArrayElement(NAMES)
	});

	const _getGeneratedComment = ():PhotoComment => {
		const user:User = _getGeneratedUser();
		return {
			avatar: user.avatar,
			id: idStorage.getNewId(),
			message: getRandomArrayElement(TEMPLATE_MESSAGES),
			name: user.name
		};
	};

	const getGeneratedPhoto = ():Photo => ({
		comments: Array.from({length: getRandomInt(Default.MinComments,Default.MaxComments)}, _getGeneratedComment),
		description: getRandomArrayElement(TEMPLATE_MESSAGES),
		id: idStorage.getNewId(),
		likes: getRandomInt(Default.MinLikes, Default.MaxLikes),
		url: `photos/${getRandomInt(Default.MinPhotoAddress,Default.maxPhotoAddress)}.jpg`
	});
	return Array.from({length: amount}, getGeneratedPhoto);
};

// eslint-disable-next-line no-console
console.log(getGeneratedMocks(Default.MaxId));

