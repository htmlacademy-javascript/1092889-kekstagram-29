import {renderThumbnails} from './controllers/renderers/render-thumbnails';
import {createThumbnailsListeners} from './controllers/event-handlers/thumbnails-handlers';
import {getPhotos} from './core/storage/photos';
import {addImageUploadInputListener} from './controllers/event-handlers/img-upload-form';

renderThumbnails(getPhotos());
createThumbnailsListeners();
addImageUploadInputListener();

