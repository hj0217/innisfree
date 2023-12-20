import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import PostDetailView from '@/views/posts/PostDetailView.vue';
import PostListView from '@/views/posts/PostListView.vue';
import PostEditView from '@/views/posts/PostEditView.vue';
import PromotionView from '@/views/posts/PromotionView.vue';
import NotFoundView from '@/views/NotFoundView.vue';
import MyPage from '@/views/MyPage.vue';
import MenuSpecialView from '@/views/menu/MenuSpecialView.vue';
//import MenuEventView from '@/views/menu/MenuEventView.vue';
//import MenuBestView from '@/views/menu/MenuBestView.vue';
import LoginView from '@/views/user/LoginView.vue';
import JoinView from '@/views/user/JoinView.vue';
import CartView from '@/views/user/CartView.vue';
import SpecialView from '@/views/nested/SpecialView.vue';
import EventView from '@/views/nested/EventView.vue';
import BestView from '@/views/nested/BestView.vue';
const routes = [
	{
		path: '/',
		name: 'Home',
		component: HomeView,
	},
	{
		path: '/posts',
		name: 'PostList',
		component: PostListView,
	},
	{
		path: '/posts/:id',
		name: 'PostDetail',
		component: PostDetailView,
		props: true,
		// props: route => ({ id: parseInt(route.params.id) }),
	},
	{
		path: '/posts/:id/edit',
		name: 'PostEdit',
		component: PostEditView,
	},
	{
		path: '/:pathMatch(.*)*',
		name: 'NotFound',
		component: NotFoundView,
	},
	{
		path: '/my',
		name: 'MyPage',
		component: MyPage,
		beforeEnter: [removeQueryString],
	},
	{
		path: '/promotion',
		name: 'Promotion',
		component: PromotionView,
	},
	{
		path: '/menu/:id',
		name: 'MenuSpecial',
		component: MenuSpecialView,
		props: true,
		children: [
			{
				path: 'special',
				name: 'Special',
				component: SpecialView,
				props: true,
			},
			{
				path: 'event',
				name: 'Event',
				component: EventView,
				props: true,
			},
			{
				path: 'best',
				name: 'Best',
				component: BestView,
				props: true,
			},
		],
	},
	// {
	// 	path: '/menu/:id',
	// 	name: 'MenuEvent',
	// 	component: MenuEventView,
	// 	props: true,
	// },
	// {
	// 	path: '/menu/:id',
	// 	name: 'MenuBest',
	// 	component: MenuBestView,
	// 	props: true,
	// },
	{
		path: '/user/login',
		name: 'Login',
		component: LoginView,
	},
	{
		path: '/user/join',
		name: 'Join',
		component: JoinView,
	},
	{
		path: '/user/cart',
		name: 'Cart',
		component: CartView,
	},
];
function removeQueryString(to) {
	if (Object.keys(to.query).length > 0) {
		return { path: to.path, query: {} };
	}
}
const router = createRouter({
	history: createWebHistory(),
	routes,
});

// router.beforeEach((to, from) => {
// 	// console.log('to: ', to);
// 	// console.log('from: ', from);
// 	if (to.name === 'MyPage') {
// 		// router.push({name: 'Home'})
// 		// return false;
// 		// return { name: 'Home' };
// 		return '/posts';
// 	}
// });

export default router;
