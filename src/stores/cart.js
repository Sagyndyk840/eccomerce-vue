import { defineStore } from 'pinia'
import {api} from "@/boot/axios.js";
import {notifyDefault} from "@/methods/notify.js";

export const useCartStore = defineStore({
    id: 'cart',
    state: () => ({
        loading: false,
        cart: {}
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

        async deleteCart (data) {
            try {
                this.loading = true

                let params = new URLSearchParams(data);

                let url = `cart?${params.toString()}`;

                let response = await api.delete(url)

                if (response.status === 200) {
                    notifyDefault('Товар удален из корзины', 'success')
                    await this.getCartItems()
                }
            } catch (e) {

            } finally {
                this.loading = true
            }
        },

        async getCartItems () {
            try {
                this.loading = true

                let response = await api.get('cart')
                this.cart = response.data.data
            } catch (e) {

            } finally {
                this.loading = false
            }
        }
    }
})