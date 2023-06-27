import {describe, expect ,test} from 'vitest';
import {getGeneratedMocks} from '../mocks/generators.ts';
import {Photo, PhotoComment} from '../contracts/common.ts';

describe('equality of unique ids', () => {
	const AMOUNT = 25;
	const getUniqueIds = (arr: Pick<Photo, 'id'>[]): number => new Set(arr.map(({id}) => id)).size;
	test('Photos unique ids should be equal', () => expect(getUniqueIds(getGeneratedMocks(AMOUNT))).toStrictEqual(AMOUNT)
	);
	const isUniqueLengthEqual = (arr: PhotoComment[]) => arr.length === getUniqueIds(arr);
	test('Comments unique ids should be equal', () => {
		expect(getGeneratedMocks(AMOUNT).flatMap((el: Photo) => el.comments)).toSatisfy(isUniqueLengthEqual);
	});
});
