<script>
import Button from "@/components/Button.vue";
import Input from "@/components/Input.vue";
import RadioButton from "@/components/RadioButton.vue";
import {useVuelidate} from "@vuelidate/core";
import {required, email, helpers, minLength, sameAs} from '@vuelidate/validators'
import ErrorMessage from "@/components/ErrorMessage.vue";

export default {
  name: "OrderList",
  components: {ErrorMessage, RadioButton, Input, Button},
  setup () {
    return { v$: useVuelidate() }
  },
  data () {
    return {
      changeAddress: '',
      changePayment: '',
      order: {
        fio: '',
        email: '',
        phone: '',
        city: '',
        addressPost: ''
      }
    }
  },
  methods: {
    send () {
      this.v$.$validate()
      if (this.v$.$error) return
      console.log(this.form)
    }
  },
  validations () {
    return {
      order: {
        email: {
          email : helpers.withMessage('Вы ввели неверный email', email),
          required: helpers.withMessage('Пожалуйста, заполните обязательное поле', required),
          $autoDirty: true
        },
        fio: {
          required: helpers.withMessage('Пожалуйста, заполните обязательное поле', required),
          $autoDirty: true
        },
        phone: {
          required: helpers.withMessage('Пожалуйста, заполните обязательное поле', required),
          $autoDirty: true
        },
        city: {
          required: helpers.withMessage('Пожалуйста, заполните обязательное поле', required),
          $autoDirty: true
        },
        addressPost: {
          required: helpers.withMessage('Пожалуйста, заполните обязательное поле', required),
          $autoDirty: true
        },
      },
      changeAddress: {
        required: helpers.withMessage('Пожалуйста, выберите обязательное поле', required),
        $autoDirty: false
      },
      changePayment: {
        required: helpers.withMessage('Пожалуйста, выберите обязательное поле', required),
        $autoDirty: false
      },
    }
  }
}
</script>

<template>
  <section class="order">
    <div class="container">
      <h2 class="title order-title">Оформление заказа</h2>
      <form @submit.prevent="send">
        <div class="order-inner">
          <div class="order-left">
            <h2 class="order-left__title">
              Персональные данные:
            </h2>
            <div class="order-left__personal">
              <Input type="text"  placeholder="Ваше ФИО*" v-model:value="order.fio" :errors="v$.order.fio.$errors"/>
              <Input type="text"  placeholder="Ваш e-mail*" v-model:value="order.email" :errors="v$.order.email.$errors"/>
              <Input type="text"  placeholder="Ваш телефон*" v-model:value="order.phone" :errors="v$.order.phone.$errors"/>
            </div>
            <h2 class="order-left__title">
              Способ доставки:
            </h2>
            <div class="order-left__personal">
              <RadioButton
                  value="address"
                  v-model:value="changeAddress"
                  description="Самовывоз - вул. Большая Васильковская 14(м. Льва Толстого)"
                  name="address"  id="address"/>
              <RadioButton
                  value="post"
                  v-model:value="changeAddress"
                  description="Украпочта / 1-3 недели / 30$"
                  name="address" id="post"/>
              <RadioButton
                  value="new-post"
                  v-model:value="changeAddress"
                  description="Новая Почта"
                  name="address" id="new-post"/>
              <RadioButton
                  value="dhl"
                  v-model:value="changeAddress"
                  description="DHL / 3-7 дней / 60$"
                  name="address" id="dhl"/>
            </div>
            <ErrorMessage :errors="v$.changeAddress.$errors"/>
            <h2 class="order-left__title"  v-if="changeAddress === 'address'">
              Адрес доставки:
            </h2>
            <div class="order-left__personal" v-if="changeAddress === 'address'">
              <Input v-model:value="order.city"  :errors=" v$.order.city.$errors" type="text"  placeholder="Город*" />
              <Input v-model:value="order.addressPost" :errors="v$.order.addressPost.$errors" type="text"  placeholder="Отделение почты*" />
            </div>
            <h2 class="order-left__title">
              Вы можете оплатить покупку одним из ниже перечисленных способов:
            </h2>
            <div class="order-left__personal">
              <RadioButton
                  value="privat-payment"
                  v-model:value="changePayment"
                  description="Полная предоплата через Приват 24"
                  name="payment" id="privat-payment"/>
              <RadioButton
                  value="visa-payment"
                  v-model:value="changePayment"
                  description="Денежным переводом  Visa/MasterCard"
                  name="payment" id="visa-payment"/>
              <RadioButton
                  value="new-post-payment"
                  v-model:value="changePayment"
                  description="Наложенным платежом в отделении Новой Почты"
                  name="payment" id="new-post-payment"/>
            </div>
            <ErrorMessage :errors="v$.changePayment.$errors"/>

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

            <Button type="submit" class-name="bg-yellow color-white btn-cart" title="ОФОРМИТЬ ЗАКАЗ"></Button>
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