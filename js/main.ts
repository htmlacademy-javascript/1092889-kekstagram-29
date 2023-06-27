import {getGeneratedMocks} from './mocks/generators.ts';


const enum Default {
	AMOUNT = 25
}
getGeneratedMocks(Default.AMOUNT);
