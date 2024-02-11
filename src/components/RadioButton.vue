<script>
import Input from "@/components/Input.vue";

export default {
  name: "RadioButton",
  props: {
    nameId: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    checked: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<template>
  <div class="radio-item">
    <input :name="nameId" :id="nameId" type="radio" class="radio-item-input" :checked="checked" :disabled="disabled">
    <label :for="nameId" class="radio-item-title">
      {{ description }}
    </label>
  </div>
</template>

<style scoped lang="scss">
.radio-item {
  display: grid;
  grid-template-columns: 1fr 15fr;
  &-input {
    width: 18px;
    height: 18px;
    appearance: none;
    border: 1px solid #2525254c;
    border-radius: 50%;
    transform: translateY(-0.075em);
    place-content: center;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &::before {
      content: "";
      width: .40em;
      height: .40em;
      border-radius: 50%;
      transform: scale(0);
      transition: 120ms transform ease-in-out;
      background-color: #E0BEA2;
    }

    &:checked::before {
      transform: scale(1);
    }
  }

  &-title {
    color: #252525;
    font-variant-numeric: lining-nums proportional-nums;
    font-family: "Raleway", serif;
    font-size: 16px;
    font-weight: 300;
    margin-left: 10px;
  }

}
</style>