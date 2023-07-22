import {Photo, PhotoComment} from '../../../contracts/common';
import {getCommentsPack} from '../../../core/storage/comments';
import {renderComments} from '../../renderers/render-comments';
import {updateVisibleCommentsCount} from '../../renderers/render-big-picture';
import {commentsContainer, loadCommentsButton} from '../../elements/big-picture-elements';


const enum Default {
	PACK_LENGTH = 5
}

let currentComments: Generator<Array<PhotoComment>>;

const getComments = ({id}: Photo) => {
	currentComments = getCommentsPack(id,Default.PACK_LENGTH) as Generator<Array<PhotoComment>>;
};
const setComments = (photo: Photo) => {
	getComments(photo);
	addComments();
	loadCommentsButton.addEventListener('click',addComments);
};

const unsetComments = () => {
	loadCommentsButton.removeEventListener('click',addComments);
	loadCommentsButton.hidden = false;
};

const getNextComments = () => {
	const nextComments = currentComments.next();

	if (nextComments.done) {
		loadCommentsButton.hidden = true;
	}
	return nextComments.value!;
};


function addComments() {
	renderComments(...getNextComments());
	updateVisibleCommentsCount(commentsContainer.children.length);
}

export {setComments, unsetComments};
