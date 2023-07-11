import {renderThumbnails} from './controllers/renderers/render-thumbnails';
import {createThumbnailsListeners} from './controllers/event-handlers/thumbnails-handlers';
import {getPhotos} from './core/storage/photos';


renderThumbnails(getPhotos());
createThumbnailsListeners();

