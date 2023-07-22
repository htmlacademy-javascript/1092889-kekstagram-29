import {debouncedRerenderThumbnails} from './thumbnails-handlers';
import {FilterType, getFilteredPhotos} from '../../core/storage/photos';

const imageFiltersContainer = document.querySelector<HTMLElement>('.img-filters')!;
const filterForm = imageFiltersContainer.querySelector<HTMLFormElement>('.img-filters__form')!;

const changePictureFilterListener = (evt: Event) => {
	const target = evt.target as HTMLElement;
	if (target.classList.contains('img-filters__button')) {
		const previousTarget = filterForm.querySelector('.img-filters__button--active')!;
		if (previousTarget.id === target.id){
			return;
		}
		previousTarget.classList.remove('img-filters__button--active');
		target.classList.add('img-filters__button--active');
		const filterType = target.id.split('-').pop() as FilterType;
		debouncedRerenderThumbnails(getFilteredPhotos(filterType));
	}
};

const showPictureFilters = () => {
	imageFiltersContainer.classList.remove('img-filters--inactive');
	filterForm.addEventListener('click', changePictureFilterListener);
};

const hidePictureFilters = () => {
	imageFiltersContainer.classList.add('img-filters--inactive');
	filterForm.removeEventListener('click', changePictureFilterListener);
};

export {showPictureFilters, hidePictureFilters};
