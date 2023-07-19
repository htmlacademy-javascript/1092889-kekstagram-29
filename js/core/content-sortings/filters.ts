import {Photo} from '../../contracts/common';
import {getRandomUniqueArray} from '../../utils/randomizers';

const enum Default {
	RANDOM_IMAGES_COUNT = 10
}
const compareDiscussed = (a: Photo, b: Photo) => b.comments.length - a.comments.length;

const filterByRandom = (photos: Array<Photo>) => getRandomUniqueArray(photos.slice()).slice(0, Default.RANDOM_IMAGES_COUNT);


const filterByDiscussed = (photos: Array<Photo>) => [...photos].sort(compareDiscussed);


export {filterByRandom, filterByDiscussed};
