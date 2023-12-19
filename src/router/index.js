import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import PostDetailView from '@/views/posts/PostDetailView.vue';
import PostListView from '@/views/posts/PostListView.vue';
import PostEditView from '@/views/posts/PostEditView.vue';
import PromotionView from '@/views/posts/PromotionView.vue';
import NotFoundView from '@/views/NotFoundView.vue';
import MyPage from '@/views/MyPage.vue';
import MenuSpecialView from '@/views/menu/MenuSpecialView.vue';

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
		path: '/menu/special',
		name: 'MenuSpecial',
		component: MenuSpecialView,
		//props: true,
	},
];
function removeQueryString(to) {
	if (Object.keys(to.query).length > 0) {
		return { path: to.path, query: {} };
	}
}
const router = createRouter({
	history: createWebHistory(),
	// history: createWebHashHistory(),
	routes,
});

router.beforeEach((to, from) => {
	console.log('to: ', to);
	console.log('from: ', from);
	if (to.name === 'MyPage') {
		// router.push({name: 'Home'})
		// return false;
		// return { name: 'Home' };
		return '/posts';
	}
});

export default router;
