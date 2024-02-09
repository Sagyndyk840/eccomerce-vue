<script>
import Input from "@/components/Input.vue";
import Button from "@/components/Button.vue";
import {useVuelidate} from "@vuelidate/core";
import { required, email, helpers, minLength, sameAs } from '@vuelidate/validators'

export default {
  name: "RegisterPage",
  components: {Button, Input},
  setup () {
    return { v$: useVuelidate() }
  },
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
      this.v$.$validate()
      if (this.v$.$error) return
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
        },
        confirmPassword: {
          required: helpers.withMessage('Пожалуйста, заполните обязательное поле', required),
          $autoDirty: true,
          minLength: helpers.withMessage(`Минимальная длина: 6 символа`, minLength(6)),
          sameAsPassword: helpers.withMessage(`Пароли не совпадают`, sameAs(this.form.password))
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
        <h2 class="title auth-title">Регистрация</h2>
        <Input type="text" class-name="w-443" placeholder="Ваш e-mail*" v-model:value="form.email" :errors="v$.form.email.$errors"/>
        <Input type="password" class-name="w-443" placeholder="Ваш пароль*" v-model:value="form.password" :errors="v$.form.password.$errors"/>
        <Input type="password" class-name="w-443" placeholder="Подтвердить пароль*" v-model:value="form.confirmPassword" :errors="v$.form.confirmPassword.$errors"/>
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