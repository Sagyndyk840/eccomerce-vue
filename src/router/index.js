import { createRouter, createWebHistory } from 'vue-router'
import HomeLayout from "../layouts/HomeLayout.vue";
import HomePage from "../pages/HomePage.vue";
import AuthLayout from "../layouts/AuthLayout.vue";
import LoginPage from "../pages/LoginPage.vue";
import RegisterPage from "../pages/RegisterPage.vue";

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
        path: '/auth',
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
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router