enum Default {
	MAX_LENGTH = 140
}
enum DescriptionError {
	DESCRIPTION_LENGTH = 'Длина комментария не может составлять больше 140 символов;'
}

let descriptionError = '';

const getDescriptionError = () => descriptionError;

const isRequiredLength = (value: string) => value.length < Default.MAX_LENGTH;

const validateDescription = (value: string) => {
	if (value.length === 0) {
		return true;
	}

	if (!isRequiredLength(value)) {
		descriptionError = DescriptionError.DESCRIPTION_LENGTH ;
		return false;
	}

	return true;
};

export {validateDescription, getDescriptionError};
