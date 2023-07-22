import {Photo, PhotoComment} from '../../contracts/common.ts';

type PhotoState = [() => Array<Photo>, (arg0: Array<Photo>) => void]

const getPhotosState = (): PhotoState => {
	let photosState:Photo[] = [];
	const updatePhotosState = (newState: Array<Photo>): void => {
		photosState = newState;
	};
	const getPhotos = (): Array<Photo> => photosState;
	return [getPhotos, updatePhotosState];
};

const [getPhotos, updatePhotosState] = getPhotosState();

const throwPhotoError = (message: string) => {
	throw new Error(message);
};

const getPhotoById = (id: number): Photo => getPhotos().find((photo) => photo.id === id) ?? throwPhotoError(`There is no requested photoId = ${id} in storage`);

const getCommentsByPhotoId = (id: number): Array<PhotoComment> => getPhotoById(id).comments ?? throwPhotoError(`There is no comments for requested photoId =  ${id}`);

export {getPhotos, getPhotoById, getCommentsByPhotoId, updatePhotosState};
