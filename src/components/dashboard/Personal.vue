<script>
import Input from "@/components/Input.vue";
import Button from "@/components/Button.vue";
import {useAuthStore} from "@/stores/auth.js";
import {useVuelidate} from "@vuelidate/core";
import {email, helpers, minLength, required} from "@vuelidate/validators";

export default {
  name: "Personal",
  components: {Button, Input},
  setup () {
    const authStore = useAuthStore()

    return { v$: useVuelidate(), authStore }
  },
  data () {
    return {
      form: {
        fio: '',
        phone: '',
        email: '',
        address: '',
      }
    }
  },
  methods: {
    async editProfile () {
      this.v$.$validate()
      if (this.v$.$error) return
      await this.authStore.editProfile(this.form)
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
        fio: {
          required: helpers.withMessage('Пожалуйста, заполните обязательное поле', required),
          $autoDirty: true
        },
        phone: {
          required: helpers.withMessage('Пожалуйста, заполните обязательное поле', required),
          $autoDirty: true
        },
        address: {
          required: helpers.withMessage('Пожалуйста, заполните обязательное поле', required),
          $autoDirty: true
        },
      }
    }
  }
}
</script>

<template>
  <div class="personal">
    <div class="container">
      <div class="personal-title">
        Персональные данные:
      </div>
      <form @submit.prevent="editProfile">
        <div class="personal-group__first">
          <Input v-model:value="form.fio" class-name="" type="text" placeholder="Ваше ФИО" :errors="v$.form.fio.$errors"/>
          <Input v-model:value="form.email" class-name="" type="text" placeholder="Ваш e-mail" :errors="v$.form.email.$errors"/>
          <Input v-model:value="form.phone" class-name="" type="text" placeholder="Ваш телефон" :errors="v$.form.phone.$errors"/>
        </div>
        <div class="personal-title">
          Адрес доставки:
        </div>
        <div class="personal-group__second">
          <Input v-model:value="form.address" class-name="" type="text" placeholder="Ваш адрес" :errors="v$.form.address.$errors"/>
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
      grid-template-columns: 1fr 1fr 1fr;
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