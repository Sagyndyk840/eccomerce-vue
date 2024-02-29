<script>
export default {
  name: "ProductItem",
  props: {
    img: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    newProduct: {
      type: Boolean,
      required: true
    },
    price: {
      type: String,
      required: true
    },
    sizes: {
      type: Array,
      required: true
    },
    colors: {
      type: Array,
      required: true
    },
    router: {
      type: String,
      required: true
    },
    favoriteActive: {
      type: Boolean,
      required: true
    }

  }
}
</script>

<template>
  <div class="product-item">
    <img :src="img" :alt="title" >
    <button @click="$emit('favorite')" class="product-favorite" :class="{
      'active': favoriteActive
    }">
      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
        <path d="M7.50061 1.89671C9.26233 0.314993 11.9848 0.367492 13.682 2.06771C15.3785 3.76868 15.437 6.47763 13.859 8.24459L7.49911 14.6135L1.14073 8.24459C-0.437237 6.47763 -0.377988 3.76418 1.31773 2.06771C3.01645 0.369742 5.73365 0.312743 7.50061 1.89671ZM12.62 3.12744C11.495 2.00096 9.68007 1.95521 8.50259 3.01269L7.50136 3.91118L6.49938 3.01344C5.31816 1.95446 3.50694 2.00096 2.37896 3.12894C1.26148 4.24642 1.20523 6.03514 2.23496 7.21711L7.49986 12.4903L12.7648 7.21786C13.7952 6.03514 13.739 4.24867 12.62 3.12744Z" fill="white"/>
      </svg>
    </button>
    <div class="product-wrapper">
      <router-link :to="router" class="product-title">{{ title }}</router-link>
      <div class="product-ex" v-if="newProduct">new</div>
    </div>
    <div class="product-price price">
      {{ price }} грн
    </div>
    <div class="product-sizes">
      <div v-for="size in sizes" :key="size" class="product-size size">{{ size.title }}</div>
    </div>
    <div class="product-colors">
      <div v-for="color in colors" :key="color" class="product-color color" :style="{
        'background-color': color.value
      }"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.product {
  &-item {
    position: relative;

    img {
      width: 100%;
      height: 360px;
      object-fit: cover;
    }
  }
  &-price {
    text-align: center;
    margin-top: 5px;
    margin-bottom: 5px;
  }

  &-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  &-title {
    color: #252525;
    text-align: center;
    font-family: "Raleway", serif;
    font-size: 16px;
    font-weight: 300;
  }

  &-ex {
    color: #E0BEA2;
    text-align: center;
    font-family: "Raleway", serif;
    font-size: 16px;
    font-weight: 300;
    margin-left: 10px;
  }
  &-sizes {
    display: flex;
    justify-content: center;
    flex-direction: row;
  }
  &-size {
    color: rgba(37, 37, 37, 0.50);
    text-align: center;
    font-family: "Raleway", serif;
    font-size: 16px;
    font-weight: 300;
    margin-right: 5px;

    &:last-child {
      margin-right: 0;
    }
  }

  &-favorite {
    border-radius: 0px 0px 0px 20px;
    background: #E0BEA2;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    right: 0;
    transition: .3s all ease;
    svg {
      path {
        fill: white;
      }
    }

    &:hover {
      background-color: #CCA88A;

    }

    &.active {
      background-color: #CCA88A;
    }
  }

  &-colors {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 5px;
  }

  &-color {
    height: 14px;
    width: 14px;
    border-radius: 50%;
    margin-right: 5px;
    border: 1px solid #2525254c;
    &:last-child {
      margin-right: 0;
    }
  }
}
</style>