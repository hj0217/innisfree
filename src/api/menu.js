import { menu } from '.';

export function getMenu(id) {
	return menu.get(`/${id}`);
}
