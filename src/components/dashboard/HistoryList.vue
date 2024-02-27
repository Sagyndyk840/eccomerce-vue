<script>
import HistoryItem from "@/components/dashboard/HistoryItem.vue";

export default {
  name: "HistoryList",
  components: {HistoryItem}
}
</script>

<template>
  <section class="history">
    <div class="container">
      <div class="history-inner">
        <HistoryItem />
        <HistoryItem />
        <HistoryItem />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">

</style>