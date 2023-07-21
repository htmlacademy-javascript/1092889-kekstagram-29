const thumbnailTemplate = document.querySelector<HTMLTemplateElement>('#picture')!.content
	.querySelector('.picture')!;
const commentTemplate = document.querySelector<HTMLTemplateElement>('#social__comment')!.content
	.querySelector<HTMLLIElement>('.social__comment')!;
const successAlertTemplate = document.querySelector<HTMLTemplateElement>('#success')!.content
	.querySelector<HTMLElement>('.success')!;
const errorAlertTemplate = document.querySelector<HTMLTemplateElement>('#error')!.content
	.querySelector<HTMLElement>('.error')!;

if (!commentTemplate || !thumbnailTemplate || !successAlertTemplate || !errorAlertTemplate) {
	throw new Error('One or a few Templates are missing');
}

export {
	thumbnailTemplate,
	commentTemplate,
	successAlertTemplate,
	errorAlertTemplate,
};
