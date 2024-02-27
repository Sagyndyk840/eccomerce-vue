<script>
import Input from "@/components/Input.vue";
import Button from "@/components/Button.vue";

export default {
  name: "Personal",
  components: {Button, Input}
}
</script>

<template>
  <div class="personal">
    <div class="container">
      <div class="personal-title">
        Персональные данные:
      </div>
      <form>
        <div class="personal-group__first">
          <Input class-name="" type="text" placeholder="Ваше имя" />
          <Input class-name="" type="text" placeholder="Ваша фамилия" />
          <Input class-name="" type="text" placeholder="Ваш e-mail" />
          <Input class-name="" type="text" placeholder="Ваш телефон" />
        </div>
        <div class="personal-title">
          Адрес доставки:
        </div>
        <div class="personal-group__second">
          <Input class-name="" type="text" placeholder="Ваш адрес" />
        </div>
        <Button class-name="bg-yellow color-white btn-personal" title="ВОЙТИ" type="submit"/>
      </form>
    </div>
  </div>
</template>

<style scoped lang="scss">
.personal {
  margin-top: 20px;

  &-title {
    color: #252525;
    font-family: "Raleway", serif;
    font-size: 16px;
    font-weight: 300;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  input {
    margin-bottom: 0 !important;
  }
  &-group {
    &__first {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      gap: 20px;
    }


    &__second {
      display: grid;
      grid-template-columns: 1fr 1fr ;
      gap: 20px;
    }

  }
  .btn-personal {
    width: 100%;
    margin-top: 20px;
  }
}
</style>