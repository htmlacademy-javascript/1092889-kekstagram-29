import {getNumberFrom, isPalindrome, isShorterThan} from '../functions';
import {describe, expect ,test} from 'vitest';


describe('Is string require optimal length criteria', () => {
	const testCases = [
		{value: ['проверяемая строка', 20], result: true},
		{value: ['проверяемая строка', 18], result: true},
		{value: ['проверяемая строка', 10], result: false}
	];
	for (const testCase of testCases) {
		test(`Is string "${testCase.value[0]}" shorter than ${testCase.value[1]} symbols`,
			() => expect(isShorterThan(...testCase.value as [string,number])).toStrictEqual(testCase.result));
	}
});

describe('Is string a palindrome', () => {
	const testCases = [
		{value: 'топот', result: true},
		{value: 'ДовОд', result: true},
		{value: 'Кекс', result: false},
		{value: 'Лёша на полке клопа нашёл ', result: true}
	];
	for (const testCase of testCases) {
		test(`Is string "${testCase.value}" is a palindrome`,
			() => expect(isPalindrome(testCase.value)).toStrictEqual(testCase.result));
	}
});

describe('Extracting numbers from given value ', () => {
	const testCases = [
		{value: '2023 год', result: 2023},
		{value: 'ECMAScript 2022', result: 2022},
		{value: '1 кефир, 0.5 батона', result: 105},
		{value: 'агент 007', result: 7},
		{value: 'а я томат', result: NaN},
		{value: 2023, result: 2023},
		{value: -1, result: 1},
		{value: 1.5, result: 15},
	];
	for (const testCase of testCases) {
		test(`extracting numbers from "${testCase.value}" `,
			() => expect(getNumberFrom(testCase.value)).toStrictEqual(testCase.result));
	}
});


