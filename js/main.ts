import {renderThumbnails} from './controllers/renderers/render-thumbnails';
import {createThumbnailsListeners} from './controllers/event-handlers/thumbnails-handlers.ts';
import {getPhotos} from './core/storage/photos.ts';


renderThumbnails(getPhotos());
createThumbnailsListeners();

