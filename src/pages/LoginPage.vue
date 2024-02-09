<script>
import Input from "@/components/Input.vue";
import Button from "@/components/Button.vue";

export default {
  name: "LoginPage",
  components: {Button, Input},
  data () {
    return {
      form: {
        email: '',
        password: '',
      }
    }
  },
  methods: {
    login () {
      console.log(this.form)
    }
  }
}
</script>

<template>
  <section class="auth">
    <div class="auth-image">
      <img src="@assets/images/png/login.png" alt="">
    </div>
    <div class="auth-right">
      <div class="auth-card w-443">
        <h2 class="title auth-title">Авторизация </h2>
        <Input type="text" class-name="w-443" placeholder="Ваш e-mail*" v-model:value="form.email"/>
        <Input type="text" class-name="w-443" placeholder="Ваш пароль*" v-model:value="form.password"/>
        <div class="auth-inner">
          <router-link :to="{name: 'HomePage'}" >Главная</router-link>
          <router-link :to="{name: 'RegisterPage'}" >Нет аккаунта?</router-link>
        </div>
        <Button @click="login" class-name="w-443 bg-yellow color-white" title="ВОЙТИ"/>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">

</style>