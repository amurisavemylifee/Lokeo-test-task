// Router Imports
import { createRouter, createWebHistory } from "vue-router";
// Components
import LoginIndex from "../views/LoginIndex.vue";
import PassesIndex from "../views/PassesIndex.vue";
import PassesCreate from "../views/PassesCreate.vue";

const routes = [
	{
		path: "/:pathMatch(.*)*",
		redirect: () => {
			if (
				localStorage.getItem("accessToken") !== null &&
				localStorage.getItem("refreshToken") !== null
			) {
				return { path: "/passes" };
			}
			return { path: "/login" };
		},
	},
	{
		path: "/login",
		name: "LoginIndex",
		component: LoginIndex,
		meta: {
			layout: "WithoutNav",
			auth: false,
		},
		beforeEnter: (to, from,next) => {
			if (
				localStorage.getItem("accessToken") !== null &&
				localStorage.getItem("refreshToken") !== null
			) {
				next("/passes")
			}
			next()
		},
	},
	{
		path: "/passes",
		name: "PassesIndex",
		component: PassesIndex,
		meta: {
			layout: "WithNav",
			auth: true,
		},
	},
	{
		path: "/passes/create",
		name: "PassesCreate",
		component: PassesCreate,
		meta: {
			layout: "WithNav",
			auth: true,
		},
	},
];
const router = createRouter({
	history: createWebHistory(),
	routes,
});
router.beforeEach((to, from, next) => {
	if (to.meta.auth) {
		if (
			localStorage.getItem("accessToken") !== null &&
			localStorage.getItem("refreshToken") !== null
		) {
			next();
		} else {
			next("/login");
		}
	} else {
		next();
	}
});
export default router;
