import {Photo, PhotoComment} from '../../contracts/common';
import {filterByDiscussed, filterByRandom} from '../content-filters/filters';

type FilterType ='default' | 'random' | 'discussed';

type PhotoState = [() => Array<Photo>, (newState: Array<Photo>) => void]

const filtersByFilterType: Map<Omit<FilterType, 'default'>, (photos: Array<Photo>) => Array<Photo>> = new Map([
	['random', filterByRandom],
	['discussed', filterByDiscussed]
]
);

const getPhotosState = (): PhotoState => {
	let photosState:Photo[] = [];
	const updatePhotosState = (newState: Array<Photo>): void => {
		photosState = newState;
	};
	const getPhotos = (): Array<Photo> => photosState;
	return [getPhotos, updatePhotosState];
};

const [getPhotos, updatePhotosState] = getPhotosState();

const getFilteredPhotos = (filterType:FilterType = 'default') => {
	const photos = getPhotos();
	if (filterType === 'default') {
		return getPhotos();
	}
	return filtersByFilterType.get(filterType)!(photos);
};

const getPhotoById = (id: number): Photo => getPhotos().find((photo) => photo.id === id)!;

const getCommentsByPhotoId = (id: number): Array<PhotoComment> => getPhotoById(id).comments!;

export {getPhotos, getPhotoById, getCommentsByPhotoId, updatePhotosState, getFilteredPhotos};
export type {FilterType};
