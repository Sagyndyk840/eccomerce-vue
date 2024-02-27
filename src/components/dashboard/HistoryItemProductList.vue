<script>
import HistoryItemProduct from "@/components/dashboard/HistoryItemProduct.vue";

export default {
  name: "HistoryItemProductList",
  components: {HistoryItemProduct}
}
</script>

<template>
  <div class="history-item__bottom--products">
    <HistoryItemProduct />
    <HistoryItemProduct />
  </div>
</template>

<style scoped lang="scss">
.history-item__bottom--products {
  margin-top: 20px;
  margin-bottom: 20px;
  display: grid;
  gap: 20px;
}
</style>