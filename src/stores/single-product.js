import { defineStore } from 'pinia'
import {api} from "@/boot/axios.js";

export const useSingleProductStore = defineStore({
    id: 'singleProduct',
    state: () => ({
        product: {},
        loading: false,
    }),
    getters: {
    },
    actions: {
        async getSingleProduct (id) {
            try {
                this.loading = true

                let response = await api.get(`products/${id}`)

                if (response.status === 200) {
                    this.product = response.data.data
                }
            } catch (e) {

            } finally {
                this.loading = false
            }
        }
    }
})