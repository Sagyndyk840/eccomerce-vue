import {notifyDefault} from "@/methods/notify.js";

export const isAuth = (routes, role) => {
    return routes.includes(role) && sessionStorage.getItem('token') !== null && sessionStorage.getItem('token') !== undefined
}

export const isAddCartAuth = (routes, role) => {
    if (!isAuth(routes, role)) {
        notifyDefault('Чтобы добавить товар в корзину, пожалуйста, авторизуйтесь', 'warning');

        return true;
    }
    return false
}