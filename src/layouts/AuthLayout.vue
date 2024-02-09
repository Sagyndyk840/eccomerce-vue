<script>
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";

export default {
  name: "AuthLayout",
  components: {Header, Footer}
}
</script>

<template>
  <router-view></router-view>
</template>

<style  lang="scss">
.auth {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 50px;
  &-image {
    img {
      width: 100%;
      height: 100vh;
      object-fit: cover;
      background-position: center;
    }
  }

  &-right {
    display: flex;
    height: 100%;
    align-items: center;
  }

  &-title {
    margin-bottom: 30px;
  }



  &-inner {
    display: flex;
    justify-content: space-between;
    margin: 16px 0;

    a {
      color: #252525;
      font-family: "Raleway", serif;
      font-size: 16px;
      font-weight: 300;
      text-decoration-line: underline;
    }
  }
}
</style>