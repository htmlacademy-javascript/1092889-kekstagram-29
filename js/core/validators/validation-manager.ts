import {updateHashtagValidator} from './hashtag';
import {updateDescriptionValidator} from './description';


type ValidationName = 'hashtag' | 'description'

interface ValidationEngine {
	validate:() => boolean,
	reset: () => void,
	addValidator: (arg0: HTMLElement, arg1: (value: string)=> boolean, arg3: () => string) => void
}

interface ValidatorObject {
	validator: (value: string) => boolean,
	error: () => string,
}

const validators: Map<ValidationName, ValidatorObject> = new Map();
let validationEngine: ValidationEngine;

const addValidator = (name: ValidationName, validatorObj: ValidatorObject) => {
	validators.set(name, validatorObj);
};

const updateValidators = () => {
	updateHashtagValidator();
	updateDescriptionValidator();
};

const addValidationEngine = (validationEngineRoot: ValidationEngine) => {
	validationEngine = validationEngineRoot;
};
const createValidation = (root: HTMLElement ,validationName: ValidationName) => {
	updateValidators();
	const validator = validators.get(validationName)!.validator;
	const error = validators.get(validationName)!.error;
	validationEngine.addValidator(root,validator, error);
};

const checkValidity = () => validationEngine.validate();

const resetValidity = () => {
	validationEngine.reset();
};


export {
	addValidator,
	createValidation,
	checkValidity,
	resetValidity,
	addValidationEngine
};
