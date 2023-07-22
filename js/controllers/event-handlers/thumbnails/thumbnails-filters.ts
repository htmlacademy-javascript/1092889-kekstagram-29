import {debouncedRerenderThumbnails} from './thumbnails';
import {FilterType, getFilteredPhotos} from '../../../core/storage/photos';
import {filterForm, contentFiltersContainer} from '../../elements/content-filters';

const changeContentFilterListener = (evt: Event) => {
	const target = evt.target as HTMLElement;

	if (target.classList.contains('img-filters__button')) {
		const previousTarget = filterForm.querySelector('.img-filters__button--active')!;

		if (previousTarget.id === target.id){
			return;
		}
		previousTarget.classList.remove('img-filters__button--active');
		target.classList.add('img-filters__button--active');

		const filterType = target.id.split('-').pop() as FilterType;
		debouncedRerenderThumbnails(...getFilteredPhotos(filterType));
	}
};

filterForm.addEventListener('click', changeContentFilterListener);

const showContentFilters = () => {
	contentFiltersContainer.classList.remove('img-filters--inactive');
};

export {showContentFilters};
