<script>
import CartItem from "@/components/cart/CartItem.vue";
import {useCartStore} from "@/stores/cart.js";

export default {
  name: "CartList",
  setup () {
    const cartStore = useCartStore();
    return {cartStore}
  },
  components: {CartItem},
  props: {
    carts: {
      type: [Array],
      required: true
    }
  },
  methods: {
    async deleteCart(data) {
      await this.cartStore.deleteCart({
        product_id: data.id,
        color_id: data.pivot.color_id,
        size_id: data.pivot.size_id
      })
    },
  }
}
</script>

<template>
  <section class="cart-list">
    <div class="container">
      <div class="cart-list__inner">
        <CartItem
            v-for="cart in carts"
            @delete="deleteCart(cart)"
            :key="cart.id"
            :cart="cart"
        />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">

</style>