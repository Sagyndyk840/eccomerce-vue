import { defineStore } from 'pinia'
import {api} from "@/boot/axios.js";
import {notifyDefault} from "@/methods/notify.js";
import {dynamicQueryParams} from "@/helpers/dynamic_query_params.js";

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
                    await this.getCartItems()
                }
            } catch (e) {

            } finally {
                this.loading = false
            }
        },

        async deleteCart (data) {
            try {
                this.loading = true

                let response = await api.delete(dynamicQueryParams(data, 'cart'))

                if (response.status === 200) {
                    notifyDefault('Товар удален из корзины', 'success')
                    await this.getCartItems()
                }
            } catch (e) {

            } finally {
                this.loading = false
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