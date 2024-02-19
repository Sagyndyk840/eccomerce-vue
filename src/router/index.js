import {createRouter, createWebHistory} from 'vue-router'
import HomeLayout from "../layouts/HomeLayout.vue";
import HomePage from "../pages/HomePage.vue";
import AuthLayout from "../layouts/AuthLayout.vue";
import LoginPage from "../pages/LoginPage.vue";
import RegisterPage from "../pages/RegisterPage.vue";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import CategoryPage from "@/pages/category/CategoryPage.vue";
import FavoritePage from "@/pages/FavoritePage.vue";
import ProductPage from "@/pages/product/ProductPage.vue";
import CartPage from "@/pages/CartPage.vue";

const routes = [
    {
        path: '/',
        component: HomeLayout,
        meta: {roles: ['guest', 'auth']},
        children: [
            {
                path: '',
                component: HomePage,
                name: 'HomePage',
            }
        ]
    },
    {
        path: '/',
        component: AuthLayout,
        meta: {roles: ['guest']},
        children: [
            {
                path: '/login',
                component: LoginPage,
                name: 'LoginPage',
            },
            {
                path: '/register',
                component: RegisterPage,
                name: 'RegisterPage',
            }
        ]
    },
    {
        path: '/',
        component: DefaultLayout,
        children: [
            {
                path: '/category',
                component: CategoryPage,
                name: 'CategoryPage',
                meta: {roles: ['guest', 'auth']},
            },
            {
                path: '/favorite',
                component: FavoritePage,
                name: 'FavoritePage',
                meta: {roles: ['guest', 'auth']},
            },
            {
                path: '/product',
                component: ProductPage,
                name: 'ProductPage',
                meta: {roles: ['guest', 'auth']},
            },
            {
                path: '/cart',
                component: CartPage,
                name: 'CartPage',
                meta: {roles: ['auth']},
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})


router.beforeEach((to, from, next) => {
    let token = sessionStorage.getItem("token");

    const allowedRoles = to.meta.roles; // Получение разрешенных ролей для маршрута

    if (allowedRoles.includes("guest") && !token) {
        return next()
    }
    else if (allowedRoles.includes("auth") && token) {
        return next()
    }

});

export default router