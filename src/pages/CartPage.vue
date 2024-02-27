<script>
import CartList from "@/components/cart/CartList.vue";
import OrderList from "@/components/order/OrderList.vue";
import {useCartStore} from "@/stores/cart.js";
import Skeleton from "@/components/Skeleton.vue";

export default {
  name: "CartPage",
  components: {Skeleton, OrderList, CartList},
  setup () {
    const cartStore = useCartStore();
    return {cartStore}
  },
  mounted() {
    this.cartStore.getCartItems()
  },
  methods: {
    cartProductLength () {
      return this.cartStore.cart.products && this.cartStore.cart.products.length ? 'Ваш заказ' : 'Добавляйте товары'
    }
  }
}
</script>

<template>
  <div class="cart">
    <div class="container">
      <h2 class="cart-title title">
        {{ cartProductLength() }}
        </h2>
    </div>
    <CartList :carts="cartStore.cart.products"  />
    <div class="container" v-if="cartStore.cart.products && cartStore.cart.products.length">
      <skeleton class="cart-total" width="100px" height="10px" v-if="cartStore.loading"/>
      <div class="cart-total" v-else>
        К оплате: <span>{{ cartStore.cart.amount }} грн</span>
      </div>
    </div>
  </div>

  <OrderList />
</template>

<style scoped lang="scss">
.cart  {
  margin-top: 70px;

  &-title {
    margin-bottom: 30px;
  }
  &-total {
    color: #252525;
    font-variant-numeric: lining-nums proportional-nums;
    font-family: "Raleway", serif;
    font-size: 16px;
    font-weight: 300;
    margin-top: 30px;
    display: flex;
    justify-content: end;
    span {
      color: #252525;
      font-family: "Raleway", serif;
      font-size: 16px;
      font-weight: 700;
      margin-left: 10px;
    }
  }
}
</style>