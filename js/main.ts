import {getPhotos, updatePhotosState} from './core/storage/photos';
import {addImageUploadInputListener} from './controllers/event-handlers/image-upload-form/img-upload-form-handlers';
import {getData} from './core/api/api';
import {addAlert} from './controllers/event-handlers/alerts-handlers';
import {renderThumbnails} from './controllers/renderers/render-thumbnails';
import {showContentFilters} from './controllers/event-handlers/content-filters-handlers';
import {createThumbnailsListeners} from './controllers/event-handlers/thumbnails-handlers';

addImageUploadInputListener();
getData(updatePhotosState)
	.then(() => renderThumbnails(...getPhotos()))
	.then(() => createThumbnailsListeners())
	.then(() => showContentFilters())
	.catch((err) => {
		if (err instanceof Error) {
			addAlert('custom',err.message);
		}
	});
