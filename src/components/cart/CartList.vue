<script>
import CartItem from "@/components/cart/CartItem.vue";

export default {
  name: "CartList",
  components: {CartItem}
}
</script>

<template>
  <section class="cart-list">
    <div class="container">
      <div class="cart-list__inner">
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">

</style>