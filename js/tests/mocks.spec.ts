import {describe, expect ,test} from 'vitest';
import {getGeneratedMocks} from '../main.ts';
import {Photo, PhotoComment} from '../contracts/common.ts';

describe('equality of unique ids', () => {
	const amount = 25;
	const getUniqueIds = (arr: Pick<Photo, 'id'>[]): number => new Set(arr.map(({id}) => id)).size;
	test('Photos unique ids should be equal', () => expect(getUniqueIds(getGeneratedMocks(amount))).toStrictEqual(amount)
	);
	const isUniqueLengthEqual = (arr: PhotoComment[]) => arr.length === getUniqueIds(arr);
	test('Comments unique ids should be equal', () => {
		expect(getGeneratedMocks(amount).flatMap((el) => el.comments)).toSatisfy(isUniqueLengthEqual);
	});
});
