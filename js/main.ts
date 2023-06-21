import {getGeneratedMocks} from './mock-data/generators.ts';


const enum Default {
	AMOUNT = 25
}
getGeneratedMocks(Default.AMOUNT);
