<script>
export default {
  name: "Button",
  props: {
    className: {
      default: "w-443 bg-yellow color-white",
      type: String,
    },
    title: {
      default: "Кнопка",
      type: String,
    },
    type: {
      default: "button",
      type: String,
    },
    disabled: {
      default: false,
      type: Boolean,
    }
  }
}
</script>

<template>
    <button class="btn" :class="className" :type="type" :disabled="disabled">{{title}}</button>
</template>

<style scoped lang="scss">
.btn {
  text-align: center;
  font-family: "Raleway", serif;
  font-size: 16px;
  font-weight: 300;
  text-transform: uppercase;
  padding: 16px 20px;
  transition: .3s all ease;
  &:hover {
    filter: drop-shadow(0px 5px 7px rgba(37, 37, 37, 0.15));
  }
}
</style>