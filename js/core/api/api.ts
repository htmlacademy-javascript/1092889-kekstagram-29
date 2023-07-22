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

const load = (route: Route, errorText: FetchError, method = Method.GET, body?: BodyInit) =>
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


const getData = async (cb: CallableFunction) => {
	try {
		const result = await load(Route.REQUEST_URL, FetchError.GET_ERROR);
		cb(result);
	} catch (err) {
		if (err instanceof Error) {
			throw new Error(err.message);
		}
	}
};

const sendData = async (onSuccess: CallableFunction, onError: (error: Error) => void, data: BodyInit) => {
	try {
		await load(Route.RESPONSE_URL, FetchError.POST_ERROR, Method.POST, data);
		onSuccess();
	} catch (err) {
		if (err instanceof Error) {
			onError(err);
		}
	}
};

export {getData, sendData};
