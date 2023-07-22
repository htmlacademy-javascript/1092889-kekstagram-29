import {PhotoComment} from '../../contracts/common';
import {render} from '../../utils/render';
import {commentTemplate} from '../elements/template-elements';
import {commentsContainer} from '../elements/big-picture-elements';

const createCommentNode = ({message, name, avatar}:PhotoComment): HTMLLIElement => {
	const comment = commentTemplate.cloneNode(true) as HTMLLIElement;
	const commentAvatar = comment.querySelector<HTMLImageElement>('.social__picture')!;
	const commentText = comment.querySelector<HTMLParagraphElement>('.social__text')!;

	commentAvatar.src = avatar;
	commentAvatar.alt = name;
	commentText.textContent = message;

	return comment;
};

const renderComments = (...comments:Array<PhotoComment>) => {
	const commentNodes = comments.map(createCommentNode);
	render(commentsContainer, ...commentNodes);
};

export {renderComments};


