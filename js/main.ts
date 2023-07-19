import {renderThumbnails} from './controllers/renderers/render-thumbnails';
import {createThumbnailsListeners} from './controllers/event-handlers/thumbnails-handlers';
import {getPhotos, updatePhotosState} from './core/storage/photos';
import {addImageUploadInputListener} from './controllers/event-handlers/img-upload-form';
import {getData} from './core/api/api.ts';
import {addAlert} from './controllers/event-handlers/alerts-handlers.ts';

try{
	await getData(updatePhotosState, addAlert);
	renderThumbnails(getPhotos());
	createThumbnailsListeners();
} catch (err) {
	if (err instanceof Error) {
		addAlert('custom',err.message);
	}
}
addImageUploadInputListener();


