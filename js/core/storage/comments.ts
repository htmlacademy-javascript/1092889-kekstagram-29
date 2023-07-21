import {getCommentsByPhotoId} from './photos';
import {PhotoComment} from '../../contracts/common';

const packsFromArray = (photoComments: Array<PhotoComment>, packLength: number): Array<Array<PhotoComment>> => {
	const packs = [];
	let lastElementIndex = 0;
	while(lastElementIndex < photoComments.length){
		packs.push(photoComments.slice(lastElementIndex, lastElementIndex + packLength));
		lastElementIndex += packLength;
	}
	return packs;
};
function* generateIterablePacks(arr: Array<PhotoComment>, packLength: number) {
	const iterableArray = arr.slice();
	const insufficientElements = arr.length % packLength || packLength;
	const lastElements = iterableArray.splice(-insufficientElements,insufficientElements);

	yield* packsFromArray(iterableArray,packLength);
	return lastElements;
}

const getCommentsPack = (id: number, packLength: number): Generator<Array<PhotoComment>> | Generator<PhotoComment> => {
	const comments = getCommentsByPhotoId(id);
	return generateIterablePacks(comments, packLength);
};


export {
	getCommentsPack
};

