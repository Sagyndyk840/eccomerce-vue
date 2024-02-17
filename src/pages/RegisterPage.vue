<script>
import Input from "@/components/Input.vue";
import Button from "@/components/Button.vue";
import {useVuelidate} from "@vuelidate/core";
import { required, email, helpers, minLength, sameAs } from '@vuelidate/validators'
import {useAuthStore} from "@/stores/auth.js";
export default {
  name: "RegisterPage",
  components: {Button, Input},
  setup () {

    const authStore = useAuthStore()

    return { v$: useVuelidate(), authStore }
  },
  data () {
    return {
      form: {
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
      }
    }
  },
  methods: {
    async register () {
      this.v$.$validate()
      if (this.v$.$error) return
      await this.authStore.auth('register', this.form)
    }
  },
  validations () {
    return {
      form: {
        name: {
          required: helpers.withMessage('Пожалуйста, заполните обязательное поле', required),
          $autoDirty: true
        },
        email: {
          email : helpers.withMessage('Вы ввели неверный email', email),
          required: helpers.withMessage('Пожалуйста, заполните обязательное поле', required),
          $autoDirty: true
        },
        password: {
          required: helpers.withMessage('Пожалуйста, заполните обязательное поле', required),
          $autoDirty: true,
          minLength: helpers.withMessage(`Минимальная длина: 8 символа`, minLength(8))
        },
        password_confirmation: {
          required: helpers.withMessage('Пожалуйста, заполните обязательное поле', required),
          $autoDirty: true,
          minLength: helpers.withMessage(`Минимальная длина: 8 символа`, minLength(8)),
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
        <Input :disabled="authStore.loading" type="text" class-name="w-443" placeholder="Ваш фио*" v-model:value="form.name" :errors="v$.form.name.$errors"/>
        <Input :disabled="authStore.loading" type="text" class-name="w-443" placeholder="Ваш e-mail*" v-model:value="form.email" :errors="v$.form.email.$errors"/>
        <Input :disabled="authStore.loading" type="password" class-name="w-443" placeholder="Ваш пароль*" v-model:value="form.password" :errors="v$.form.password.$errors"/>
        <Input :disabled="authStore.loading" type="password" class-name="w-443" placeholder="Подтвердить пароль*" v-model:value="form.password_confirmation" :errors="v$.form.password_confirmation.$errors"/>
        <div class="auth-inner">
          <router-link :to="{name: 'HomePage'}" >Главная</router-link>
          <router-link :to="{name: 'LoginPage'}">Есть аккаунт?</router-link>
        </div>
        <Button @click="register" :disabled="authStore.loading" class-name="w-443 bg-yellow color-white" title="ЗАРЕГИСТРИРОВАТЬСЯ"/>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">

</style>