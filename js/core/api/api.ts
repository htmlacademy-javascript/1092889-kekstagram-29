import {Photo} from '../../contracts/common';

const enum Method {
	GET = 'GET',
	POST = 'POST'
}
const enum Address {
	BASE_URL = 'https://29.javascript.pages.academy/kekstagram',
}

const enum Route {
	RESPONSE_URL = '/',
	REQUEST_URL = '/data',
}

const enum FetchError {
	GET_ERROR = 'Данные не загруженны с сервера',
	POST_ERROR = 'Данные не загруженны на сервер'
}

const load = (route: Route, errorText: FetchError, method = Method.GET, body: FormData | null = null) =>
	fetch(`${Address.BASE_URL}${route}`, {
		method: method,
		body: body
	})
		.then((response) => {
			if(response.ok) {
				return response.json();
			}
			throw new Error();
		})
		.catch(() => {
			throw new Error(errorText);
		});


const getData = async (onSuccess: (response: Array<Photo>) => void) => {
	try {
		const res = await load(Route.REQUEST_URL, FetchError.GET_ERROR);
		onSuccess(res);
	} catch (err) {
		if (err instanceof Error) {
			throw new Error(err.message);
		}
	}
};

const sendData = async (onSuccess: (response: Response) => void, onError: (error: Error) => void, formData: FormData) => {
	try {
		const res = await load(Route.RESPONSE_URL, FetchError.POST_ERROR, Method.POST, formData);
		onSuccess(res);
	} catch (err) {
		if (err instanceof Error) {
			onError(err);
		}
	}
};

export {getData, sendData};
