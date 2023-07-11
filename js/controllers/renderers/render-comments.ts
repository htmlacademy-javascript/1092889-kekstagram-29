import {PhotoComment} from '../../contracts/common.ts';
import {render} from '../../utils/render.ts';


const template = document.querySelector<HTMLTemplateElement>('#social__comment')!.content
	.querySelector<HTMLLIElement>('.social__comment');

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

const createComments = (root: HTMLUListElement, ...elements:Array<PhotoComment>) => {
	const commentNodes = elements.map(createCommentNode);
	render(root, ...commentNodes);
};

export {createComments};


