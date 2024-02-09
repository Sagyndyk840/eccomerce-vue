<script>
import Input from "@/components/Input.vue";
import Button from "@/components/Button.vue";
import { useVuelidate } from '@vuelidate/core'
import { required, email, helpers, minLength } from '@vuelidate/validators'

export default {
  name: "LoginPage",
  components: {Button, Input},
  setup () {
    return { v$: useVuelidate() }
  },
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
      this.v$.$validate()
      console.log(this.form)
    }
  },
  validations () {
    return {
      form: {
        email: {
          email : helpers.withMessage('Вы ввели неверный email', email),
          required: helpers.withMessage('Пожалуйста, заполните обязательное поле', required),
          $autoDirty: true
        },
        password: {
          required: helpers.withMessage('Пожалуйста, заполните обязательное поле', required),
          $autoDirty: true,
          minLength: helpers.withMessage(`Минимальная длина: 6 символа`, minLength(6))
        }
      }
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
        <form @submit.prevent="login">
          <Input type="text" class-name="w-443" placeholder="Ваш e-mail*" v-model:value="form.email" :errors="v$.form.email.$errors"/>
          <Input type="password" class-name="w-443" placeholder="Ваш пароль*" v-model:value="form.password" :errors="v$.form.password.$errors"/>
          <div class="auth-inner">
            <router-link :to="{name: 'HomePage'}" >Главная</router-link>
            <router-link :to="{name: 'RegisterPage'}" >Нет аккаунта?</router-link>
          </div>
          <Button  class-name="w-443 bg-yellow color-white" title="ВОЙТИ" type="submit"/>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">

</style>