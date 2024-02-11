<script>
export default {
  name: "ErrorMessage",
  props: {
    errors: {
      type: Array,
      required: true,
    },
    className: {
      type: String,
      required: false
    }
  }
}
</script>

<template>
  <p v-for="error of errors"
     :key="error.$uid" class="error-text">{{error.$message}}</p>
</template>

<style scoped lang="scss">
.error-text {
  color: #FFA4A4 !important;
  font-family: "Raleway", serif;
  font-size: 16px;
  font-weight: 200;
}
</style>