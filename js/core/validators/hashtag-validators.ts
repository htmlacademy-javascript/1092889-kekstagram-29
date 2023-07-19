import {addValidator} from './validation-manager';

const enum Default {
	MAX_HASHTAG_COUNT = 5,
	MAX_HASHTAG_LENGTH = 20
}

const enum HASHTAG_ERRORS {
	MAX_COUNT = 'Хэш-тэгов должно быть не больше пяти',
	NON_UNIQUE = 'Хэш-теги повторяются',
	HASH_START = 'Хэш-тег должен начинаться с решётки',
	HASH_LENGTH = 'Максимальная длина хэш-тега 20 символов включая решётку',
	HASH_CHARACTERS = 'Cтрока после решётки должна состоять из букв и чисел и не может содержать пробелы, спецсимволы (#, @, $ и т. п.), символы пунктуации (тире, дефис, запятая и т. п.), эмодзи и т. д.',
	ONLY_HASH = 'Хэш-тег не может состоять из одной решётки'
}

let hashtagsError = '';


const HASHTAG_TEMPLATE = new RegExp(/^#[a-zа-яё0-9]{1,19}$/);

const isStartsWithHashtag = (value: string) => value.startsWith('#');

const isValidHashtag = (value: string) => HASHTAG_TEMPLATE.test(value);

const isRequiredLength = (value: string) => value.length <= Default.MAX_HASHTAG_LENGTH;

const isUniqueHashtags = (value: Array<string>) => value.length === new Set(value).size;
const isMaxCount = (value: Array<string>) => value.length <= Default.MAX_HASHTAG_COUNT;

const validateHashtags = (value: string) => {

	if(value.length === 0) {
		return true;
	}

	const hashtags = value.trim().toLocaleLowerCase().split(/\s+/);

	if(!isUniqueHashtags((hashtags))) {
		hashtagsError = HASHTAG_ERRORS.NON_UNIQUE;
		return false;
	}
	if(!isMaxCount(hashtags)) {
		hashtagsError = HASHTAG_ERRORS.MAX_COUNT;
		return false;
	}

	return hashtags.every((hashtag) => {
		if (!isStartsWithHashtag(hashtag)) {
			hashtagsError = HASHTAG_ERRORS.HASH_START;
			return false;
		}

		if (hashtag === '#') {
			hashtagsError = HASHTAG_ERRORS.ONLY_HASH;
			return false;
		}

		if (!isRequiredLength(hashtag)) {
			hashtagsError = HASHTAG_ERRORS.HASH_LENGTH;
			return false;
		}
		if (!isValidHashtag(hashtag)) {
			hashtagsError = HASHTAG_ERRORS.HASH_CHARACTERS;
			return false;
		}

		return true;
	});
};

const updateHashtagValidator = () => {
	addValidator('hashtag',{validator: validateHashtags, error: () => hashtagsError});
};


export {updateHashtagValidator};
