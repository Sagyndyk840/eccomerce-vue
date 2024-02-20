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
<!--        <router-link :to="{ name: 'CategoryPage', query: { id: 1 }}">{{ category.title }}</router-link>-->
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">

</style>