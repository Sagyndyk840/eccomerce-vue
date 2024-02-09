<script>
import ProductItem from "@/components/ProductItem.vue";
import {VueAwesomePaginate} from "vue-awesome-paginate";

export default {
  name: "FavoritePage",
  components: {VueAwesomePaginate, ProductItem},
  data () {
    return {
      currentPage: 1
    }
  },
}
</script>

<template>
  <div class="favorite">
    <div class="container">
      <h2 class="title favorite-title">Избранное</h2>
      <div class="favorite-inner">
        <ProductItem  title="Белая куртка" img="src/assets/images/png/product-1.png" :new-product="false" price="2900"
                     :sizes="['XS', 'XL', 'SM', 'MD']"
                     :colors="['#871212', '#F1DDAA']" :router="{name: 'HomePage'}"/>
        <ProductItem  title="Белая куртка" img="src/assets/images/png/product-1.png" :new-product="false" price="2900"
                     :sizes="['XS', 'XL', 'SM', 'MD']"
                     :colors="['#871212', '#F1DDAA']" :router="{name: 'HomePage'}"/>
        <ProductItem  title="Белая куртка" img="src/assets/images/png/product-1.png" :new-product="false" price="2900"
                      :sizes="['XS', 'XL', 'SM', 'MD']"
                      :colors="['#871212', '#F1DDAA']" :router="{name: 'HomePage'}"/>
        <ProductItem  title="Белая куртка" img="src/assets/images/png/product-1.png" :new-product="false" price="2900"
                      :sizes="['XS', 'XL', 'SM', 'MD']"
                      :colors="['#871212', '#F1DDAA']" :router="{name: 'HomePage'}"/>
        <ProductItem  title="Белая куртка" img="src/assets/images/png/product-1.png" :new-product="false" price="2900"
                      :sizes="['XS', 'XL', 'SM', 'MD']"
                      :colors="['#871212', '#F1DDAA']" :router="{name: 'HomePage'}"/>
      </div>
      <vue-awesome-paginate
          :total-items="50"
          :items-per-page="5"
          :max-pages-shown="5"
          v-model="currentPage"

      />
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