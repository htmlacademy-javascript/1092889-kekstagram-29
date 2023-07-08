import {getGeneratedMocks} from './mocks/generators';
import {renderThumbnails} from './controllers/renderers/render-thumbnails';
const enum Default {
	AMOUNT = 25
}
const photos = getGeneratedMocks(Default.AMOUNT);
renderThumbnails(photos);
