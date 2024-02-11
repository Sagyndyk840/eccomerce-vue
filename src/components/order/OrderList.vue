<script>
import Button from "@/components/Button.vue";
import Input from "@/components/Input.vue";
import RadioButton from "@/components/RadioButton.vue";

export default {
  name: "OrderList",
  components: {RadioButton, Input, Button}
}
</script>

<template>
  <section class="order">
    <div class="container">
      <h2 class="title order-title">Оформление заказа</h2>
      <form action="">
        <div class="order-inner">
          <div class="order-left">
            <h2 class="order-left__title">
              Персональные данные:
            </h2>
            <div class="order-left__personal">
              <Input type="text"  placeholder="Ваше имя*" />
              <Input type="text"  placeholder="Ваша фамилия*" />
              <Input type="text"  placeholder="Ваш e-mail*" />
              <Input type="text"  placeholder="Ваш телефон*" />
            </div>
            <h2 class="order-left__title">
              Способ доставки:
            </h2>
            <div class="order-left__personal">
              <RadioButton
                  description="Самовывоз - вул. Большая Васильковская 14(м. Льва Толстого)"
                  name="address"  id="address"/>
              <RadioButton
                  description="Украпочта / 1-3 недели / 30$"
                  name="address" id="post"/>
              <RadioButton
                  description="Новая Почта"
                  name="address" id="new-post"/>
              <RadioButton
                  description="DHL / 3-7 дней / 60$"
                  name="address" id="dhl"/>
            </div>
            <h2 class="order-left__title">
              Адрес доставки:
            </h2>
            <div class="order-left__personal">
              <Input type="text"  placeholder="Город*" />
              <Input type="text"  placeholder="Отделение почты*" />
            </div>
            <h2 class="order-left__title">
              Вы можете оплатить покупку одним из ниже перечисленных способов:
            </h2>
            <div class="order-left__personal">
              <div class="radio-item">
                <input name="payment" type="radio" class="radio-item-input">
                <h2 class="radio-item-title">
                  Полная предоплата через Приват 24
                </h2>
              </div>
              <div class="radio-item">
                <input name="payment" type="radio" class="radio-item-input">
                <h2 class="radio-item-title">
                  Денежным переводом  Visa/MasterCard
                </h2>
              </div>
              <div class="radio-item">
                <input name="payment" type="radio" class="radio-item-input">
                <h2 class="radio-item-title">
                  Наложенным платежом в отделении Новой Почты
                </h2>
              </div>
            </div>
          </div>
          <div class="order-right">
            <ul>
              <li>
                <a href="">УСЛОВИЯ ДОСТАВКИ</a>
              </li>
              <li>
                <a href="">УСЛОВИЯ ОБМЕНА И ВОЗВРАТА</a>
              </li>
              <li>
                <a href="">ИНФОРМАЦИЯ ОБ ОПЛАТЕ</a>
              </li>
            </ul>

            <div class="order-right__inner">
              <div class="order-right__item">
                <div class="order-right__item--light">ДОСТАВКА:</div>
                <div class="order-right__item--strong">По тарифам перевозчика</div>
              </div>
              <div class="order-right__item">
                <div class="order-right__item--light">ИТОГО:</div>
                <div class="order-right__item--strong">15250 грн</div>
              </div>
            </div>

            <Button class-name="bg-yellow color-white btn-cart" title="ОФОРМИТЬ ЗАКАЗ"></Button>
            <div class="policy-text">
              Нажимая на кнопку «оплатить заказ», я принимаю условия <a href="">публичной оферты и политики конфиденциальности</a>
            </div>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<style scoped lang="scss">
.order {
  margin-top: 55px;

  &-title {
    margin-bottom: 30px;
  }

  &-inner {
    display: grid;
    grid-template-columns: 8fr 3.2fr;
    column-gap: 20px;
  }

  &-left {
    &__title {
      color: #252525;
      font-family: "Raleway", serif;
      font-size: 16px;
      font-weight: 300;
      margin-bottom: 20px;
    }
    &__personal {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      margin-bottom: 20px;
      input {
        margin-bottom: 0 !important;
      }
    }
  }

  &-right {
    ul {
      li {
        a {
          color: #252525;
          font-family: "Raleway", serif;
          font-size: 16px;
          font-weight: 300;
          text-decoration-line: underline;
          text-transform: uppercase;
        }
        margin-bottom: 20px;

        &:last-child {
          margin-bottom: 0;
        }
      }
    }
    &__inner {
      margin-top: 30px;
    }
    &__item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 15px;
      &:last-child {
        margin-bottom: 0;
      }
      &--light {
        color: #252525;
        font-family: "Raleway", serif;
        font-size: 16px;
        font-weight: 300;
        text-align: start;
      }
      &--strong {
        color: #252525;
        font-family: "Raleway", serif;
        font-size: 16px;
        font-weight: 700;
        text-align: end;
      }
    }

    .btn-cart {
      margin-top: 15px;
      margin-bottom: 15px;
      width: 100%;
    }

    .policy-text {
      color: #252525;
      font-family: "Raleway", serif;
      font-size: 14px;
      font-weight: 300;
      a {
        color: #252525;
        font-family: "Raleway", serif;
        font-size: 14px;
        font-weight: 300;
        text-decoration-line: underline;
      }
    }
  }
}
</style>