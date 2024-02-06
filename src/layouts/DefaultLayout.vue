<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "DefaultLayout",
  components: {Footer, Header}
}
</script>

<template>
  <Header :global="true"/>
  <router-view></router-view>
  <Footer />
</template>

<style scoped lang="scss">

</style>