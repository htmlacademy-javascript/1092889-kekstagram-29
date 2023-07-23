const thumbnailsContainer = document.querySelector<HTMLDivElement>('.pictures')!;
if (!thumbnailsContainer) {
	throw new Error('Thumbnails container not found');
}

export {
	thumbnailsContainer
};

