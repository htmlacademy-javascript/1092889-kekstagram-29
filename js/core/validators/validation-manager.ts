import {updateHashtagValidator} from './hashtag-validators.ts';
import {updateDescriptionValidator} from './description-validators.ts';


type ValidationName = 'hashtag' | 'description'

interface ValidationEngineRoot {
	validate:() => boolean,
	reset: () => void,
	addValidator: (arg0: HTMLElement, arg1: (value: string)=> boolean, arg3: string) => void
}
const validators = new Map();
let validationEngine: ValidationEngineRoot;

const updateValidators = () => {
	updateHashtagValidator();
	updateDescriptionValidator();
};

const addValidationEngine = (validationEngineRoot: ValidationEngineRoot) => {
	validationEngine = validationEngineRoot;
};
const createValidation = (root: HTMLElement ,validationName: ValidationName) => {
	updateValidators();
	const validator = validators.get(validationName).validator;
	const error = validators.get(validationName).error;
	validationEngine.addValidator(root,validator, error);
};

const checkValidity = () => validationEngine.validate();

const resetValidity = () => {
	validationEngine.reset();
};


export {validators, createValidation, checkValidity, resetValidity, addValidationEngine};
