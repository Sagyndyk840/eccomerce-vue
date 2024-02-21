import {createRouter, createWebHistory} from 'vue-router'
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
        component: () => import('@/layouts/HomeLayout.vue'),
        meta: {roles: ['guest', 'auth']},
        children: [
            {
                path: '',
                component: () => import('@/pages/HomePage.vue'),
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
                component: () => import('@/pages/LoginPage.vue'),
                name: 'LoginPage',
            },
            {
                path: '/register',
                component: () => import('@/pages/RegisterPage.vue'),
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
                props: true,
                name: 'CategoryPage',
                component: () => import('@/pages/category/CategoryPage.vue'),
                meta: {roles: ['guest', 'auth']},
            },
            {
                path: '/favorite',
                component: () => import('@/pages/FavoritePage.vue'),
                name: 'FavoritePage',
                meta: {roles: ['guest', 'auth']},
            },
            {
                path: '/product',
                component: () => import('@/pages/product/ProductPage.vue'),
                name: 'ProductPage',
                meta: {roles: ['guest', 'auth']},
            },
            {
                path: '/cart',
                component: () => import('@/pages/CartPage.vue'),
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

    if (allowedRoles && allowedRoles.includes("guest") && !token) {
        return next()
    }
    else if (allowedRoles && allowedRoles.includes("auth") && token) {
        return next()
    }

});

export default router