import { defineStore } from 'pinia'

export const useFavoriteStore = defineStore({
    id: 'favorite',
    state: () => ({
        favorites: JSON.parse(localStorage.getItem('favorites')) ?? []
    }),
    getters: {
        getFavorites (state) {
            console.log(state.favorites)
            return state.favorites
        },

        isFavorite(state) {
            return (product) => this.getFavorites.some((p) => p.id === product.id)
        },
    },
    actions: {
        toggleFavorite (product) {
            const index = this.favorites.findIndex((p) => p.id === product.id);
            if (index === -1) {
                // Если товар еще не в избранном - добавить
                this.favorites.push(product);
            } else {
                // Если товар уже в избранном - удалить
                this.favorites.splice(index, 1);
            }

            // Сохранить избранные товары в localStorage
            localStorage.setItem('favorites', JSON.stringify(this.favorites));
        },



    }
})