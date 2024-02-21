import { defineStore } from 'pinia'
import {api} from "@/boot/axios.js";

export const useProductsStore = defineStore({
    id: 'products',
    state: () => ({
        loading: false,
        products: [],
        pagination: {}
    }),
    getters: {
    },
    actions: {

        async getProducts(filter) {
            try {
                this.loading = true

                let params = new URLSearchParams(filter);

                let url = `products?${params.toString()}`;

                let response = await api.get(url)

                if (response.status === 200) {
                    this.categories = response.data.data
                }
            } catch (e) {

            } finally {
                this.loading = true
            }
        }
    }
})