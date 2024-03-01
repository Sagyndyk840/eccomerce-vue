import { defineStore } from 'pinia'
import { api } from '@/boot/axios.js'
import {notifyError, notifyDefault} from '@/methods/notify.js'
import router from '@/router'

export const useAuthStore = defineStore({
    id: 'auth',
    state: () => ({
        loading: false,
    }),
    getters: {
    },
    actions: {
        async auth (url, form) {
            try {
                this.loading = true
                let response = await api.post(url, form)

                if (response.status === 200) {
                    notifyDefault(response.data.message)
                    sessionStorage.setItem('token', response.data.data.token)
                    sessionStorage.setItem('user', JSON.stringify(response.data.data.user))
                    console.log(response.data.data.user)
                    router.push({name: 'HomePage'})

                }
            } catch (e) {
                console.log(e)
                const errorData = e?.response?.data?.data;
                if (e?.response?.status === 403 && errorData) {
                    // const firstErrorKey = Object.keys(e?.response?.data.data)[0];
                    // const firstErrorMessage = e?.response?.data.data[firstErrorKey];
                    notifyError(errorData)
                } else {
                    notifyDefault('При регистрации произошла ошибка. Попробуйте позже.', 'error')
                }
            } finally {
                this.loading = false
            }
        },

        async logout () {
            try {
                this.loading = true
                let response = await api.post('logout')

                if (response.status === 200) {
                    notifyDefault(response.data.message)
                    sessionStorage.removeItem('token')
                    sessionStorage.removeItem('user')
                    router.push({name: 'HomePage'})
                }
            } catch (e) {

            } finally {
                this.loading = false
            }
        },

        async editProfile (data) {
            try {

            } catch (e) {

            } finally {

            }
        }

    }
})