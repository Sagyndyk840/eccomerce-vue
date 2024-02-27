<script>
export default {
  name: "Skeleton",
  props: {
    height: {
      type: String,
      required: false,
      default: 100
    },
    width: {
      type: String,
      required: false,
      default: 100
    },
    css: {
      type: Object,
    }
  }
}
</script>

<template>
  <div class="placeholder wave">
    <div :style="[{'height': height, 'width': width}, css]"></div>
  </div>
</template>

<style scoped lang="scss">
.placeholder {
  &.pulse div {
    animation: pulse 1s infinite ease-in-out;
    -webkit-animation: pulse 1s infinite ease-in-out;
  }

  &.wave div {
    animation: wave 1s infinite linear forwards;
    -webkit-animation: wave 1s infinite linear forwards;
    background: #f6f7f8;
    background: linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);
    background-size: 800px 104px;
  }

  div {
    background: #E8E8E8;
  }
}


@keyframes pulse {
  0% {
    background-color: rgba(165, 165, 165, .1);
  }
  50% {
    background-color: rgba(165, 165, 165, .3);
  }
  100% {
    background-color: rgba(165, 165, 165, .1);
  }
}

@-webkit-keyframes pulse {
  0% {
    background-color: rgba(165, 165, 165, .1);
  }
  50% {
    background-color: rgba(165, 165, 165, .3);
  }
  100% {
    background-color: rgba(165, 165, 165, .1);
  }
}

@keyframes wave {
  0% {
    background-position: -468px 0
  }
  100% {
    background-position: 468px 0
  }
}

@-webkit-keyframes wave {
  0% {
    background-position: -468px 0
  }
  100% {
    background-position: 468px 0
  }
}

</style>