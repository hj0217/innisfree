import { posts } from '.';

export function getPosts() {
	return posts.get('/');
}

export function getPostById(id) {
	return posts.get(`/${id}`);
}

export function createPost(data) {
	return posts.post('', data);
}

export function updatePost(id, data) {
	return posts.put(`/${id}`, data);
}

export function deletePost(id) {
	return posts.delete(`/${id}`);
}
