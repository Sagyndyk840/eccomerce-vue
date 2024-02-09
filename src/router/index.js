import { createRouter, createWebHistory } from 'vue-router'
import HomeLayout from "../layouts/HomeLayout.vue";
import HomePage from "../pages/HomePage.vue";
import AuthLayout from "../layouts/AuthLayout.vue";
import LoginPage from "../pages/LoginPage.vue";
import RegisterPage from "../pages/RegisterPage.vue";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import CatalogPage from "@/pages/catalog/CatalogPage.vue";

const routes = [
    {
        path: '/',
        component: HomeLayout,
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
                path: '/catalog',
                component: CatalogPage,
                name: 'CatalogPage',
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router