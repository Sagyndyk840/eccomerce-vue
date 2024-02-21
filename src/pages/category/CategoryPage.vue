<script>
import ProductItem from "@/components/ProductItem.vue";
import CategoryListRoute from "@/components/CategoryListRoute.vue";
import {VueAwesomePaginate} from "vue-awesome-paginate";
import {useCategoryStore} from "@/stores/categoies.js";
import {useProductsStore} from "@/stores/products.js";

export default {
  name: "CategoryPage",
  components: {VueAwesomePaginate, CategoryListRoute, ProductItem},
  setup () {
    const productsStore = useProductsStore()

    return {productsStore};
  },
  data () {
    return {
      currentPage: 1
      // filter: {
      //   page: 1,
      //   // 'category[eq]':
      // }
    }
  },
  methods: {
    async paginate () {
      await this.productsStore.getProducts({
        page: this.currentPage
      })
    }
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
<!--          <CategoryListRoute />-->
        </div>
        <div class="catalog-right">
          <div class="filter"></div>
          <div class="catalog-products">
            <ProductItem @favorite="product" title="Белая куртка" img="src/assets/images/png/product-1.png" :new-product="false" price="2900"
                         :sizes="['XS', 'XL', 'SM', 'MD']"
                         :colors="['#871212', '#F1DDAA']" :router="{name: 'HomePage'}"/>
            <ProductItem @favorite="product" title="Белая куртка" img="src/assets/images/png/product-1.png" :new-product="false" price="2900"
                         :sizes="['XS', 'XL', 'SM', 'MD']"
                         :colors="['#871212', '#F1DDAA']" :router="{name: 'HomePage'}"/>
            <ProductItem @favorite="product" title="Белая куртка" img="src/assets/images/png/product-1.png" :new-product="false" price="2900"
                         :sizes="['XS', 'XL', 'SM', 'MD']"
                         :colors="['#871212', '#F1DDAA']" :router="{name: 'HomePage'}"/>
            <ProductItem @favorite="product" title="Белая куртка" img="src/assets/images/png/product-1.png" :new-product="false" price="2900"
                         :sizes="['XS', 'XL', 'SM', 'MD']"
                         :colors="['#871212', '#F1DDAA']" :router="{name: 'HomePage'}"/>
            <ProductItem @favorite="product" title="Белая куртка" img="src/assets/images/png/product-1.png" :new-product="false" price="2900"
                         :sizes="['XS', 'XL', 'SM', 'MD']"
                         :colors="['#871212', '#F1DDAA']" :router="{name: 'HomePage'}"/>
            <ProductItem @favorite="product" title="Белая куртка" img="src/assets/images/png/product-1.png" :new-product="false" price="2900"
                         :sizes="['XS', 'XL', 'SM', 'MD']"
                         :colors="['#871212', '#F1DDAA']" :router="{name: 'HomePage'}"/>
          </div>
          <vue-awesome-paginate
              :total-items="50"
              :items-per-page="5"
              :max-pages-shown="5"
              v-model="currentPage"
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