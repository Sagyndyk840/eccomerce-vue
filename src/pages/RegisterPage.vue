<script>
import Input from "@/components/Input.vue";
import Button from "@/components/Button.vue";

export default {
  name: "RegisterPage",
  components: {Button, Input},
  data () {
    return {
      form: {
        email: '',
        password: '',
        confirmPassword: '',
      }
    }
  },
  methods: {
    register () {
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
        <h2 class="title auth-title">Регистрация</h2>
        <Input type="text" class-name="w-443" placeholder="Ваш e-mail*" v-model:value="form.email"/>
        <Input type="text" class-name="w-443" placeholder="Ваш пароль*" v-model:value="form.password"/>
        <Input type="text" class-name="w-443" placeholder="Подтвердить пароль*" v-model:value="form.confirmPassword"/>
        <div class="auth-inner">
          <router-link :to="{name: 'HomePage'}" >Главная</router-link>
          <router-link :to="{name: 'LoginPage'}">Есть аккаунт?</router-link>
        </div>
        <Button @click="register" class-name="w-443 bg-yellow color-white" title="ЗАРЕГИСТРИРОВАТЬСЯ"/>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">

</style>