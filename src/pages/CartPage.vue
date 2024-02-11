<script>
import CartList from "@/components/cart/CartList.vue";
import OrderList from "@/components/order/OrderList.vue";

export default {
  name: "CartPage",
  components: {OrderList, CartList},
}
</script>

<template>
  <div class="cart">
    <div class="container">
      <h2 class="cart-title title">Ваш заказ</h2>
    </div>
    <CartList />
    <div class="container">
      <div class="cart-total">
        К оплате: <span>15250 грн</span>
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