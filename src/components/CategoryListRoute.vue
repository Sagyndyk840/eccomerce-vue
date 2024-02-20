<script>
import {useCategoryStore} from "@/stores/categoies.js";

export default {
  name: "CategoryListRoute",
  setup () {

    const categoryStore = useCategoryStore()

    return {categoryStore}
  },
  mounted() {
    this.categoryStore.getCategories()
  }
}
</script>

<template>
  <h2 class="title catalog-left__title">Каталог</h2>
  <nav>
    <ul>
      <li v-for="category in categoryStore.categories" :key="category.id">
        <a href="">{{ category.title }}</a>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">

</style>