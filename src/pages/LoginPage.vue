<script>
import Input from "@/components/Input.vue";
import Button from "@/components/Button.vue";
import { useVuelidate } from '@vuelidate/core'
import { required, email, helpers, minLength } from '@vuelidate/validators'
import {useAuthStore} from "@/stores/auth.js";
import ClipLoader from "vue-spinner/src/ClipLoader.vue";

export default {
  name: "LoginPage",
  components: {Button, Input, ClipLoader},
  setup () {

    const authStore = useAuthStore()

    return { v$: useVuelidate(), authStore }
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
    async login () {
      this.v$.$validate()
      if (this.v$.$error) return
      await this.authStore.auth('login', this.form)
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
          <Input :disabled="authStore.loading" type="text" class-name="w-443" placeholder="Ваш e-mail*" v-model:value="form.email" :errors="v$.form.email.$errors"/>
          <Input :disabled="authStore.loading" type="password" class-name="w-443" placeholder="Ваш пароль*" v-model:value="form.password" :errors="v$.form.password.$errors"/>
          <div class="auth-inner">
            <router-link :to="{name: 'HomePage'}" >Главная</router-link>
            <router-link :to="{name: 'RegisterPage'}" >Нет аккаунта?</router-link>
          </div>
          <Button :disabled="authStore.loading" :loader="authStore.loading" class-name="w-443 bg-yellow color-white" title="ВОЙТИ" type="submit">
            <template v-slot:loader>
              <clip-loader  :color="'white'"/>
            </template>
          </Button>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">

</style>