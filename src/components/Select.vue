<script>
import ErrorMessage from "@/components/ErrorMessage.vue";

export default {
  name: "Select",
  components: {ErrorMessage},
  props: {
    className: {
      type: String,
    },
    options: {
      type: Array,
      required: true
    },
    value: {
      default: "",
      type: [String, Number],
    },
    errors: {
      type: Array,
      required: false,
    },
    width: {
      type: String
    }
  },
  methods: {
    handleSelectChange(event) {
      this.$emit("update:value", event.target.value);
    },
  },
}
</script>

<template>
  <div class="component-form" :style="{width: width}">
    <select @change="handleSelectChange"  class="select" :class="className">
      <option
          v-for="option in options"
          :key="option.value"
          :value="option.value"
          :selected="option.selected"
          :disabled="option.disabled"
      >{{ option.label }}</option>
    </select>
    <ErrorMessage :errors="errors" />
  </div>
</template>

<style scoped lang="scss">
.select {
  padding: 15px 20px;
  color: #252525;
  font-family: "Raleway", serif;
  font-size: 16px;
  font-weight: 200;
  border: 0.5px solid #252525;
  position: relative;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  outline: none;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="10" height="7" viewBox="0 0 10 7" fill="none"><path d="M5 3.88906L8.88906 1.32478e-08L10 1.11094L5 6.11094L1.32478e-08 1.11094L1.11094 1.06001e-07L5 3.88906Z" fill="%23252525"/></svg>') no-repeat center right;
  background-position-x: 98%;
  &:focus {
    border: 1px solid #E0BEA2;
    color: #252525;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M9 9.88906L12.8891 6L14 7.11094L9 12.1109L4 7.11094L5.11094 6L9 9.88906Z" fill="%23E0BEA2"/></svg>') no-repeat center right;
    background-position-x: 98%;
  }

}
</style>