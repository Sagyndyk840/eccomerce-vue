<script>
import ProductItem from "@/components/ProductItem.vue";
import CategoryListRoute from "@/components/CategoryListRoute.vue";
import {VueAwesomePaginate} from "vue-awesome-paginate";
import {useProductsStore} from "@/stores/products.js";
import {useFavoriteStore} from "@/stores/favorite.js";

export default {
  name: "CategoryPage",
  components: {VueAwesomePaginate, CategoryListRoute, ProductItem},
  setup () {
    const productsStore = useProductsStore()
    const favoriteStore = useFavoriteStore()

    return {productsStore, favoriteStore};
  },
  data () {
    return {
    }
  },
  methods: {
    async paginate () {
      await this.productsStore.getProducts({
        page: this.productsStore.currentPaginate
      })
    },
    favoriteProduct () {}
  },
  mounted () {
    this.productsStore.getProducts({
      page: 1
    })
  }
}
</script>

<template>
  <section class="catalog-page">
    <div class="container">
      <div class="catalog-inner">
        <div class="catalog-left">
          <CategoryListRoute />
        </div>
        <div class="catalog-right">
          <div class="filter"></div>
          <div class="catalog-products">
            <ProductItem
                v-for="product in productsStore.products" :key="product.id"
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
          <vue-awesome-paginate
              :total-items="productsStore.pagination.total"
              v-model="productsStore.currentPaginate"
              :max-pages-shown="2"
              :on-click="paginate"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style  lang="scss">
.catalog-page {
  margin-top: 70px;

  .catalog-inner {
    display: grid;
    grid-template-columns: 1fr 5fr;
    gap: 30px;
  }

  .catalog-left {

    &__title {
      margin-bottom: 30px;
    }
    nav {
      ul {
        li {
          margin-bottom: 20px;
          &:last-child {
            margin-bottom: 0;
          }
          a {
            color: #252525;
            font-family: "Raleway", serif;
            font-size: 16px;
            font-weight: 300;
            transition: .3s all ease;
            &:hover {
              color: #CCA88A;
            }
          }
        }
      }
    }
  }

  .catalog-products {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 15px;
  }
}
</style>