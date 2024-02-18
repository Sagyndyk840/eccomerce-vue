import { defineStore } from 'pinia'
import { api } from '@/boot/axios.js'
import {notifyError, notifyDefault} from '@/methods/notify.js'
export const useAuthStore = defineStore({
    id: 'auth',
    state: () => ({
        loading: false,
        user: null,
        isLoggedIn: false,
    }),
    getters: {
        isAuthenticated (state) {
            return state.isLoggedIn
        },
    },
    actions: {
        async auth (url, form) {
            try {
                this.loading = true
                let response = await api.post(url, form, {
                    headers: {
                        'Accept': 'application/json'
                    }
                })

                if (response.status === 200) {
                    console.log(response.data)
                    notifyDefault(response.data.message)
                    sessionStorage.setItem('token', response.data.data.token)
                    this.$router.push({ name: 'HomePage' }); // Redirect to Home
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

        async refreshToken () {
            try {

            } catch (e) {

            } finally {

            }
        },

        async logout () {
            try {

            } catch (e) {

            } finally {

            }
        }

    }
})