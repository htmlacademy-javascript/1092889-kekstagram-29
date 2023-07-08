const render = (root: HTMLElement,...elements: Array<HTMLElement>):void => {
	const fragment = document.createDocumentFragment() as DocumentFragment;
	fragment.append(...elements);
	root.append(fragment);
};

export {render};
