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
    },
    name: {
      default: "",
      type: String,
    },
    errors: {
      type: Array,
      required: false,
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
  <input :name="name" :type="type" class="input" :class="[className, {'error' : errors && errors.length}]" :placeholder="placeholder" :value="value" @input="updateInput"/>
  <p v-for="error of errors"
     :key="error.$uid" class="error-text">{{error.$message}}</p>
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
.error-text {
  color: #FFA4A4 !important;
  font-family: "Raleway", serif;
  font-size: 16px;
  font-weight: 200;
  margin-bottom: 16px;
}

.error {
  border: 1px solid #FFA4A4 !important;
  color: #FFA4A4 !important;

  &::placeholder {
    color: #FFA4A4;
  }

}
</style>