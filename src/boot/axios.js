import axios from 'axios'


const api = axios.create({ baseURL: 'https://market.it-hub.kz/api/' })

api.interceptors.request.use(function (config) {
    const token = sessionStorage.getItem('token')
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }

    return config;
})

export { api }

