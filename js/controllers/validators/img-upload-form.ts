import {validateHashtags, getHashtagError} from './hashtag';
import {validateDescription, getDescriptionError} from './description';
import {description, form, hashtags} from '../elements/img-upload-form';
import Pristine from 'pristinejs';

const pristine = new Pristine(form, {
	classTo: 'img-upload__field-wrapper',
	errorTextParent: 'img-upload__field-wrapper'});

pristine.addValidator(hashtags, validateHashtags, getHashtagError);
pristine.addValidator(description, validateDescription, getDescriptionError);

const checkValidity = () => pristine.validate();

const resetValidity = () => pristine.reset();

export {
	checkValidity,
	resetValidity,
};
