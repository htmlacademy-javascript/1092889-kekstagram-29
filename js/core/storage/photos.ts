import {getGeneratedMocks} from '../../mocks/generators.ts';
import {Photo, PhotoComment} from '../../contracts/common.ts';

const enum DEFAULT {
	AMOUNT = 25
}

const photosState:Photo[] = getGeneratedMocks(DEFAULT.AMOUNT);

const throwPhotoError = (message: string) => {
	throw new Error(message);
};

const getPhotos = (): Array<Photo> => photosState;

const getPhotoById = (id: number): Photo => photosState.find((photo) => photo.id === id) ?? throwPhotoError(`There is no requested photoId = ${id} in storage`);

const getCommmentsByPhotoId = (id: number): Array<PhotoComment> => getPhotoById(id).comments ?? throwPhotoError(`There is no comments for requested photoId =  ${id}`);

export {getPhotos, getPhotoById, getCommmentsByPhotoId};
