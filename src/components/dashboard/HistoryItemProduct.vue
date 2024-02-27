<script>
export default {
  name: "HistoryItemProduct"
}
</script>

<template>
  <div class="history-item__product">
    <div class="history-item__product__first">
      <div class="history-item__product__image">
        <img src="../images/dist/single-product.png" alt="">
      </div>
      <div class="history-item__product__title">
        <div class="history-item__product__title--top">арт. 1589956</div>
        <div class="history-item__product__title--bottom">Кремовое пальто</div>
      </div>
    </div>
    <div class="history-item__product__colors">
      <div class="history-item__product__color" style="background-color: #F1DDAA;">
      </div>
    </div>
    <div class="history-item__product__size">
      Размер: L
    </div>
    <div class="history-item__product__count">
      Количество: 3
    </div>
    <div class="history-item__product__price">
      9450 грн
    </div>
  </div>
</template>

<style scoped lang="scss">
.history-item__product {
  display: grid;
  grid-template-columns: 2.6fr 1fr 2fr 2fr 1fr;
  align-items: center;
  &__first {
    display: flex;
  }
  &__image {
    width: 95px;
    height: 110px;
    margin-right: 10px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  &__title {
    &--top {
      color: #E0BEA2;
      font-family: "Raleway", serif;
      font-size: 14px;
      font-weight: 300;
      margin-bottom: 30px;
    }
    &--bottom {
      color: #252525;
      font-family: "Raleway", serif;
      font-size: 16px;
      font-weight: 300;
    }
  }
  &__colors {
    display: flex;
    align-items: center;
  }
  &__color {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    padding: 2px;
    border: 1px solid #2525256a;
  }
  &__size {
    color: #252525;
    font-family: "Raleway", serif;
    font-size: 16px;
    font-weight: 300;
  }
  &__count {
    color: #252525;
    font-family: "Raleway", serif;
    font-size: 16px;
    font-weight: 300;

  }
  &__price {
    color: #252525;
    font-family: "Raleway", serif;
    font-size: 16px;
    font-weight: 700;
    display: flex;
    justify-content: flex-end;
  }

}
</style>