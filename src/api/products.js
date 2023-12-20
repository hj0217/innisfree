import { products } from '.';

export function getProducts() {
	return products.get(`/menu/:id/:tag`);
}
