import {Photo, PhotoComment} from '../../contracts/common';
import {getCommentsPack} from '../../core/storage/comments';
import {createComments} from '../renderers/render-comments';
import {changeVisibleCommentsCount} from '../renderers/render-big-picture';

const commentsContainer = document.querySelector<HTMLUListElement>('.social__comments')!;
const loadCommentsButton = document.querySelector<HTMLButtonElement>('.social__comments-loader')!;

const enum Default {
	PACK_LENGTH = 5
}

let currentComments: Generator<Array<PhotoComment>>;
const addComments = ({id}: Photo) => {
	currentComments = getCommentsPack(id,Default.PACK_LENGTH) as Generator<Array<PhotoComment>>;
	commentsContainer.innerHTML = '';
	updateComments();
	loadCommentsButton.addEventListener('click',updateComments);
};

const removeComments = () => {
	loadCommentsButton.removeEventListener('click',updateComments);
	commentsContainer.innerHTML = '';
	loadCommentsButton.hidden = false;
};

function updateComments() {
	const nextComments = currentComments.next();

	if (nextComments.done) {
		loadCommentsButton.hidden = true;
	}
	createComments(commentsContainer,...nextComments.value!);
	changeVisibleCommentsCount(commentsContainer.children.length);
}

export {addComments, removeComments};
