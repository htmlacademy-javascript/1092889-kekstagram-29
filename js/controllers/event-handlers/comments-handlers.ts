
const commentsContainer = document.querySelector<HTMLUListElement>('.social__comments')!;
const loadCommentsButton = document.querySelector<HTMLButtonElement>('.social__comments-loader')!;

//Заглушка
const addCommentsListener = () => {
	commentsContainer.hidden = true;
	loadCommentsButton.hidden = true;
};
//Заглушка
const removeCommentsListener = ()=> {
	commentsContainer.hidden = false;
	loadCommentsButton.hidden = false;
};
export {addCommentsListener, removeCommentsListener};
