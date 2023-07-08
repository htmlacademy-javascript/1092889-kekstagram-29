import {describe, expect, test} from 'vitest';
import {isEnoughTime, TimeString} from '../utils/time-checker';


interface TimeMock {
	values: [TimeString,TimeString,TimeString,number],
	result: boolean
}
describe('checks if it\'s enough free time for meet' , () => {
	const TIME_MOCKS: TimeMock[] = [
		{values: ['08:00', '17:30', '14:00', 90], result: true},
		{values: ['8:00', '10:0', '8:00', 120], result: true},
		{values: ['08:00', '14:30', '14:00', 90], result: false},
		{values: ['14:00', '17:30', '08:0', 90], result: false},
		{values: ['8:00', '17:30', '08:00', 900], result: false},
		{values: ['8:00', '02:00', '10:0', 900], result: true}
	];
	test.each(TIME_MOCKS)('Should check if it\'s enough time for meeting', ({result, values}) => {
		expect(isEnoughTime(...(values))).toStrictEqual(result);
	});
});

