import { defineStore } from 'pinia'
import {api} from "@/boot/axios.js";
import {notifyDefault} from "@/methods/notify.js";

export const useCartStore = defineStore({
    id: 'cart',
    state: () => ({
        loading: false,
    }),
    getters: {
    },
    actions: {
        async addCart (data) {
            try {
                this.loading = true

                let response = await api.put('cart', data)

                if (response.status === 200) {
                    notifyDefault('Товар добавлен корзину', 'success')
                }
            } catch (e) {

            } finally {
                this.loading = false
            }
        },

        async removeCart (data) {
            try {
                this.loading = true

                let response = await api.delete('cart', data)

                if (response.status === 200) {
                    notifyDefault('Товар удален из корзины', 'success')
                }
            } catch (e) {

            } finally {
                this.loading = true
            }
        },

        async getCartItems () {
            try {

            } catch (e) {

            } finally {

            }
        }
    }
})