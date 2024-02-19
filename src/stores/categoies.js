import { defineStore } from 'pinia'
import {api} from "@/boot/axios.js";
import {notifyDefault} from "@/methods/notify.js";
import router from "@/router/index.js";

export const useCategoryStore = defineStore({
    id: 'category',
    state: () => ({
        loading: false,
        categories: [],
        pagination: {}
    }),
    getters: {
    },
    actions: {
        async getCategories(page = 1) {
            try {
                this.loading = true

                let response = await api.get(`categories?page=${page}`)

                if (response.status === 200) {
                    this.categories = response.data.data
                    this.pagination = response.data.meta
                }
            } catch (e) {

            } finally {
                this.loading = true
            }
        }
    }
})