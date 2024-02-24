<script>
import ProductItem from "@/components/ProductItem.vue";
import {VueAwesomePaginate} from "vue-awesome-paginate";
import {useProductsStore} from "@/stores/products.js";
import {useFavoriteStore} from "@/stores/favorite.js";

export default {
  name: "FavoritePage",
  components: {VueAwesomePaginate, ProductItem},
  setup () {
    const productsStore = useProductsStore()
    const favoriteStore = useFavoriteStore()

    return {productsStore, favoriteStore};
  },
}
</script>

<template>
  <div class="favorite">
    <div class="container">
      <h2 class="title favorite-title">Избранное</h2>
      <div class="favorite-inner">
        <ProductItem
            v-for="product in favoriteStore.getFavorites" :key="product.id"
            @favorite="favoriteStore.toggleFavorite(product)"
            :title="product.title"
            img="src/assets/images/png/product-1.png"
            :new-product="false"
            :price="product.price"
            :favorite-active="favoriteStore.isFavorite(product)"
            :sizes="product.size"
            :colors="product.color"
            :router="{name: 'ProductPage', params: {id: product.id}}" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.favorite {
  margin-top: 70px;
  &-title {
    margin-bottom: 30px;
  }
  &-inner {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 15px;
  }
}
</style>