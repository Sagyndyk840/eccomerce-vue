import axios from 'axios'


const local = 'https://market.it-hub.kz'
const production = 'https://market.it-hub.kz'
const api = axios.create({ baseURL: `${local}/api/` })

api.interceptors.request.use(function (config) {
    const token = sessionStorage.getItem('token')

    config.headers['Accept'] = 'application/json'

    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }

    return config;
})

export { api }

