const contentFiltersContainer = document.querySelector<HTMLElement>('.img-filters')!;
const filterForm = contentFiltersContainer.querySelector<HTMLFormElement>('.img-filters__form')!;

if(!contentFiltersContainer) {
	throw new Error('Filter bar not found');
}

export {
	contentFiltersContainer,
	filterForm
};
