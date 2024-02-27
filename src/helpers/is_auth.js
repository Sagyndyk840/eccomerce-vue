export const isAuth = (routes, role) => {
    return routes.includes(role) && sessionStorage.getItem('token');
}