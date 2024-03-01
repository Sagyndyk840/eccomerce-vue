<script>
import HistoryList from "@/components/dashboard/HistoryList.vue";
import Personal from "@/components/dashboard/Personal.vue";
import {useAuthStore} from "@/stores/auth.js";

export default {
  name: "DashboardPage",
  components: {Personal, HistoryList},
  setup () {
    const authStore = useAuthStore();

    return {authStore}
  },
  data () {
    return {
      show: 'personal'
    }
  },
  methods: {
    useAuthStore,
    change (value) {
      this.show = value
    }
  }
}
</script>

<template>
  <section class="dashboard-navbar">
    <div class="container">
      <div class="dashboard-navbar__inner">
        <button @click="change('order')" class="dashboard-navbar__item" :class="{'active': show === 'order'}">История заказов</button>
        <button @click="change('personal')" class="dashboard-navbar__item" :class="{'active': show === 'personal'}">Личные данные</button>
        <button @click="authStore.logout()" class="dashboard-navbar__item">Выйти</button>
      </div>
    </div>
  </section>

  <HistoryList v-if="show === 'order'"/>
  <Personal v-else-if="show === 'personal'"/>
</template>

<style scoped lang="scss">
.dashboard-navbar {
  margin-top: 60px;
  margin-bottom: 20px;
  &__inner {
    border-bottom: 1px solid #252525;
    border-top: 1px solid #252525;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__item {
    color: #252525;
    font-family: "Raleway", serif;
    font-size: 16px;
    font-weight: 300;
    padding: 15px 50px;
    background: white;
    transition: .3s all ease;
    &:hover {
      background: #E0BEA2;
      color: #FFF;
    }

    &.active {
      background: #E0BEA2;
      color: #FFF;
    }
  }
}
</style>