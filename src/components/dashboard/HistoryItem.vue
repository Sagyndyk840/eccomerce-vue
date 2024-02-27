<script>
import HistoryItemProductList from "@/components/dashboard/HistoryItemProductList.vue";

export default {
  name: "HistoryItem",
  components: {HistoryItemProductList}
}
</script>

<template>
  <div class="history-item">
    <div class="history-item__top">
      <div class="history-item__top--id">№ 235 от 03.05.21</div>
      <div class="history-item__top--status history-item__top--double">
        <div class="light history-item__top--status__light">Статус:</div>
        <div class="strong history-item__top--status__strong">Отменён</div>
      </div>
      <div class="history-item__top--price history-item__top--double">
        <div class="light history-item__top--status__light">Сумма заказа:</div>
        <div class="strong history-item__top--status__strong">13682 грн</div>
      </div>
      <div class="history-item__top--btn__inner">
        <div class="history-item__top--btn"></div>
      </div>
    </div>
    <div class="history-item__bottom active">
      <HistoryItemProductList />
      <div class="history-item__bottom--contacts">
        <div class="history-item__bottom--contacts__item">
          <div class="history-item__bottom--contacts__item--top">
            Имя Фамилия:
            <span>Елизаветта Станиславчук</span>
          </div>
          <div class="history-item__bottom--contacts__item--bottom">
            Способ доставки:
            <span>Доставка Новой Почтой</span>
          </div>
        </div>
        <div class="history-item__bottom--contacts__item">
          E-mail:
          <span>ella.s97@gmail.com</span>
        </div>
        <div class="history-item__bottom--contacts__item">
          <div class="history-item__bottom--contacts__item--top">
            Номер телефона:
            <span>+38(067)470 20 66</span>
          </div>
          <div class="history-item__bottom--contacts__item--bottom">
            Способ оплаты:
            <span>Оплата при получении</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@mixin rotate($angle) {
  -moz-transform: rotate($angle);
  -ms-transform: rotate($angle);
  -webkit-transform: rotate($angle);
  transform: rotate($angle);
}

@mixin arrow($arrowSize: 20px, $arrowBorderSize: 3px, $arrowBarWidth: 2px, $arrowBarHeight: 18px) {
  display: inline-block;
  height: $arrowSize;
  position: relative;
  width: $arrowSize;

  &::after {
    border-bottom-style: solid;
    border-bottom-width: $arrowBorderSize;
    border-right-style: solid;
    border-right-width: $arrowBorderSize;
    content: '';
    display: inline-block;
    height: $arrowSize;
    left: 0;
    position: absolute;
    top: 0;
    width: $arrowSize;
  }

}

@mixin arrowColor($color) {
  &,
  .arrow {
    &::after {
      border-color: $color;
    }

    &.is-triangle::after {
      border-color: transparent;
      border-bottom-color: $color;
    }

    &::before {
      background-color: $color;
    }
  }
}


.history {
  &-item {
    margin-top: 20px;
    border-bottom: 1px solid #252525;
    padding-bottom: 20px;
    &__top {
      width: 100%;
      font-family: "Raleway", serif;
      color: #252525;
      font-size: 16px;
      display: grid;
      grid-template-columns: 2.5fr 3fr 1.7fr 1fr;
      justify-content: space-between;
      align-items: center;
      &--id {}
      &--status {
        &__light {
          font-weight: 300;
          margin-bottom: 5px;
        }
        &__strong {
          font-weight: 700;
        }
      }
      &--price {}
      &--double {
        display: flex;
        flex-direction: column;
      }
      &--id {}
      .light {}
      .strong {}
      &--btn {
        @include arrow(12px, 2px, 2px, 20px);
        @include arrowColor(#E0BEA2);
        @include rotate(45deg);
        cursor: pointer;
        margin-right: 5px;
        &.active {
          @include rotate(225deg);
        }

        &__inner {
          display: flex;
          justify-content: flex-end;
        }
      }
    }
    &__bottom {
      display: none;

      &.active {
        display: block;
      }
      &--contacts {
        display: flex;
        justify-content: space-between;

        &__item {
          color: #252525;
          font-family: "Raleway", serif;
          font-size: 16px;
          font-weight: 300;
          span {
            font-weight: 200;
          }
        }
      }
    }
  }
}
</style>