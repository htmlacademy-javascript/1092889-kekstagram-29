import {validators} from './validation-manager.ts';

enum Default {
	MAX_LENGTH = 140
}
let descriptionError = '';
enum DESCRIPTION_ERROR {
	DESCRIPTION_LENGTH = 'Длина комментария не может составлять больше 140 символов;'
}

const isRequiredLength = (value: string) => value.length < Default.MAX_LENGTH;

const validateDescription = (value: string) => {
	if (value.length === 0) {
		return true;
	}

	if (!isRequiredLength(value)) {
		descriptionError = DESCRIPTION_ERROR.DESCRIPTION_LENGTH ;
		return false;
	}

	return true;
};
const updateDescriptionValidator = () => {
	validators.set('description',{validator: validateDescription, error: () => descriptionError});
};
export {updateDescriptionValidator};
