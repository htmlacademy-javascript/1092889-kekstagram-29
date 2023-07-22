import {getPhotos, updatePhotosState} from './core/storage/photos';
import {addImageUploadInputListener} from './controllers/event-handlers/img-upload-form';
import {getData} from './core/api/api.ts';
import {addAlert} from './controllers/event-handlers/alerts-handlers';
import {renderThumbnails} from './controllers/renderers/render-thumbnails';
import {hidePictureFilters, showPictureFilters} from './controllers/event-handlers/picture-filters-handlers.ts';
import {createThumbnailsListeners} from './controllers/event-handlers/thumbnails-handlers';

try{
	await getData(updatePhotosState);
	renderThumbnails(getPhotos());
	createThumbnailsListeners();
	showPictureFilters();
} catch (err) {
	if (err instanceof Error) {
		addAlert('custom',err.message);
		hidePictureFilters();
	}
}

addImageUploadInputListener();
