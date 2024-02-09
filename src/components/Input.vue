<script>
export default {
  name: "Input",
  props: {
    type: {
      default: "text",
      type: String,
      required: true
    },
    placeholder: {
      default: "",
      type: String,
    },
    className: {
      default: "w-443",
      type: String,
    },
    value: {
      default: "",
      type: String,
    }
  },
  methods: {
    updateInput(event) {
      this.$emit("update:value", event.target.value);
    }
  }
}
</script>

<template>
  <input :type="type" class="input" :class="className" :placeholder="placeholder" :value="value" @input="updateInput"/>
</template>

<style scoped lang="scss">
.input {
  border: 0.5px solid #252525;
  color: rgba(37, 37, 37, 0.50);
  font-family: "Raleway", serif;
  font-size: 16px;
  font-weight: 200;
  padding: 15px 20px;
  margin-bottom: 16px;
  box-sizing: border-box;

  &:focus {
    border: 1px solid #E0BEA2;
    color: #252525;
  }

  &::placeholder {
    color: rgba(37, 37, 37, 0.50);
  }

}

.error {
  border: 1px solid #FFA4A4 !important;
  color: #FFA4A4 !important;

  &::placeholder {
    color: #FFA4A4;
  }

}
</style>