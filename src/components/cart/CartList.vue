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
        <CartItem
            article="1589956"
            color="#E0BEA2"
            img="src/assets/images/png/single-product.png"
            price="9450"
            size="XL"
            title="Кремовое пальто" />
        <CartItem
            article="1589956"
            color="#E0BEA2"
            img="src/assets/images/png/single-product.png"
            price="9450"
            size="XL"
            title="Кремовое пальто" />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">

</style>