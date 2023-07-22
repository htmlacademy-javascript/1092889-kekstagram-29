import {getPhotos, updatePhotosState} from './core/storage/photos';
import {addImageUploadInputListener} from './controllers/event-handlers/image-upload-form/img-upload-form';
import {getData} from './core/api/api';
import {addAlert} from './controllers/event-handlers/alerts';
import {renderThumbnails} from './controllers/renderers/thumbnails';
import {showContentFilters} from './controllers/event-handlers/thumbnails/thumbnails-filters';
import {addThumbnailsListeners} from './controllers/event-handlers/thumbnails/thumbnails';

addImageUploadInputListener();
getData(updatePhotosState)
	.then(() => renderThumbnails(...getPhotos()))
	.then(() => addThumbnailsListeners())
	.then(() => showContentFilters())
	.catch((err) => {
		if (err instanceof Error) {
			addAlert('custom',err.message);
		}
	});
