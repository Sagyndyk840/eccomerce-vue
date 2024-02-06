<script>
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";

export default {
  name: "HomeLayout",
  components: {Header, Footer}
}
</script>

<template>
  <Header :global="false"/>
  <router-view></router-view>
  <Footer />
</template>

<style scoped lang="scss">

</style>