import {PhotoComment} from '../../contracts/common.ts';


const template = document.querySelector<HTMLLIElement>('#social__comment');
if (!template) {
	throw new Error('Template for comments not found');
}

const createCommentNode = ({message, name, avatar}:PhotoComment): HTMLLIElement => {
	const comment = template.cloneNode(true) as HTMLLIElement;
	const commentAvatar = comment.querySelector<HTMLImageElement>('.social__picture')!;
	const commentText = comment.querySelector<HTMLParagraphElement>('.social__text')!;

	commentAvatar.src = avatar;
	commentAvatar.alt = name;
	commentText.textContent = message;

	return comment;
};

export {createCommentNode};


