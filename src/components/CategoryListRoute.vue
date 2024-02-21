<script>
import {useCategoryStore} from "@/stores/categoies.js";
import {useProductsStore} from "@/stores/products.js";

export default {
  name: "CategoryListRoute",
  setup () {

    const categoryStore = useCategoryStore()
    const productsStore = useProductsStore()

    return {categoryStore, productsStore}
  },
  mounted() {
    this.categoryStore.getCategories()
  },
  methods: {
    changeCategory (categoryId) {
      this.productsStore.getProducts({
        'categoryId[eq]': categoryId
      })
    }
  }
}
</script>

<template>
  <h2 class="title catalog-left__title">Каталог</h2>
  <nav>
    <ul>
      <li @click="changeCategory(category.id)" v-for="category in categoryStore.categories" :key="category.id">
        {{ category.title }}
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
  li {
    cursor: pointer;
  }
</style>