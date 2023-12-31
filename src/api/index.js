import axios from 'axios';

function create(baseURL, options) {
	const instance = axios.create(Object.assign({ baseURL }, options));
	return instance;
}

export const posts = create(`${import.meta.env.VITE_APP_API_URL}posts/`);
export const menu = create(`${import.meta.env.VITE_APP_API_URL}menu/`);
export const products = create(`${import.meta.env.VITE_APP_API_URL}menu/`);
// development : http://localhost:5000/posts/
// production : http://localhost:5001/posts/
