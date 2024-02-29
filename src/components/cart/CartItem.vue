<script>
import {useCartStore} from "@/stores/cart.js";

export default {
  name: "CartItem",
  props: {
    cart: {
      type: Object,
      required: true
    }
  },
  setup () {
    const cartStore = useCartStore();
    return {cartStore}
  },
  data () {
    return {
      counter: this.cart.pivot.count
    }
  },
  methods: {
    async increment () {
      if (this.counter >= 99) return
      this.counter++
      await this.addCart()
    },
    async decrement () {
      if (this.counter <= 0) return
      this.counter--
      await this.addCart()
    },
    async addCart () {
      await this.cartStore.addCart({
        product_id: this.cart.id,
        color_id: this.cart.pivot.color_id,
        size_id: this.cart.pivot.size_id,
        count: this.counter,
      })
    }

  }
}
</script>

<template>
  <div class="cart-item">
    <div class="cart-item__first">
      <div class="cart-item__image">
        <img :src="cart.image" :alt="cart.title">
      </div>
      <div class="cart-item__title">
        <div class="cart-item__title--top">арт. {{ cart.article }}</div>
        <div class="cart-item__title--bottom">{{ cart.id }}</div>
      </div>
    </div>
    <div class="cart-item__colors">
      <div class="cart-item__color" :style="{'background-color': cart.color.find(item => item.id === cart.pivot.color_id).value}">
      </div>
    </div>
    <div class="cart-item__size">
      {{ cart.size.find(item => item.id === cart.pivot.size_id).title }}
    </div>
    <div class="cart-item__counter">
      <button @click="decrement">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
          <g clip-path="url(#clip0_1_1168)">
            <path d="M14 8.28577H9.71429H8.28571H4V9.71434H8.28571H9.71429H14V8.28577Z" fill="#E0BEA2"/>
          </g>
          <defs>
            <clipPath id="clip0_1_1168">
              <rect width="18" height="18" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      </button>
      <input v-model="counter" type="number" min="1" max="100" >
      <button @click="increment">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
          <g clip-path="url(#clip0_1_1165)">
            <path d="M8.28571 8.28571V4H9.71429V8.28571H14V9.71429H9.71429V14H8.28571V9.71429H4V8.28571H8.28571Z" fill="#E0BEA2"/>
          </g>
          <defs>
            <clipPath id="clip0_1_1165">
              <rect width="18" height="18" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      </button>
    </div>
    <div class="cart-item__price">
      {{ cart.price }} грн
    </div>
    <div class="cart-item__delete">
      <button @click="$emit('delete')">
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
          <g clip-path="url(#clip0_1_1177)">
            <path d="M18.7503 5H25.0003V7.5H22.5003V23.75C22.5003 24.0815 22.3686 24.3995 22.1342 24.6339C21.8998 24.8683 21.5818 25 21.2503 25H3.75031C3.41878 25 3.10084 24.8683 2.86642 24.6339C2.632 24.3995 2.50031 24.0815 2.50031 23.75V7.5H0.000305176V5H6.25031V1.25C6.25031 0.918479 6.382 0.600537 6.61642 0.366116C6.85084 0.131696 7.16878 0 7.50031 0H17.5003C17.8318 0 18.1498 0.131696 18.3842 0.366116C18.6186 0.600537 18.7503 0.918479 18.7503 1.25V5ZM20.0003 7.5H5.00031V22.5H20.0003V7.5ZM8.75031 11.25H11.2503V18.75H8.75031V11.25ZM13.7503 11.25H16.2503V18.75H13.7503V11.25ZM8.75031 2.5V5H16.2503V2.5H8.75031Z" fill="#E0BEA2"/>
          </g>
          <defs>
            <clipPath id="clip0_1_1177">
              <rect width="25" height="25" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.cart-item {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #252525;
  margin-bottom: 10px;
  padding-bottom: 10px;
  align-items: center;
  &:last-child {
    margin-bottom: 0;
  }

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
    justify-content: center;
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
    border: 0.5px solid #252525;
    padding: 15px 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto;
  }

  &__counter {
    border: 0.5px solid #252525;
    padding: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    button {
      background-color: transparent;
    }

    input {
      color: #252525;
      font-variant-numeric: lining-nums proportional-nums;
      font-family: "Raleway", serif;
      font-size: 16px;
      font-weight: 300;
      margin-left: 10px;
      margin-right: 10px;
      appearance: none;
      width: 20px;
      text-align: center;

    }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    input[type=number] {
      -moz-appearance: textfield;
    }

  }

  &__price {
    color: #252525;
    font-family: "Raleway", serif;
    font-size: 16px;
    font-weight: 700;
  }

  &__delete {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    button {
      background-color: transparent;

      svg {
        transition: .5s all ease;

        &:hover {
          path {
            fill: #252525;
          }
        }
      }

    }
  }
}
</style>