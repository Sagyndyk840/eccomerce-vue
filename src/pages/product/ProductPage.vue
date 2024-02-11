<script>
import Button from "@/components/Button.vue";
import Select from "@/components/Select.vue";
import {useVuelidate} from "@vuelidate/core";

export default {
  name: "ProductPage",
  components: {Select, Button},
  setup () {
    return { v$: useVuelidate() }
  },
  data () {
    return {
      selectOptions: [
        { value: 'size', label: 'Выберите размер', disabled: true, selected: true },
        { value: 'XS', label: 'XS' },
        { value: 'S', label: 'S' },
        { value: 'M', label: 'M' },
      ],
      colors: [
        {
          id: 1,
          color: '#F1DDAA',
          title: 'Цвет: Кофе с молоком меланж'
        },
        {
          id: 2,
          color: '#6F83A4',
          title: 'Цвет: Синый'
        },
        {
          id: 3,
          color: 'white',
          title: 'Цвет: Белый'
        }
      ],
      form: {
        selectSize: '',
        changeColor: '',
      }
    }
  },
}
</script>

<template>
  <section class="single-product">
    <div class="container">
      <div class="single-product__inner">
        <div class="single-product__left">
          <img src="@assets/images/png/single-product.png" alt="">
        </div>
        <div class="single-product__right">
          <h2 class="single-product__title title">
            Кремовое пальто
          </h2>
          <div class="single-product__price price">3150 грн</div>
          <div class="colors-radio single-product__colors">
            <input v-model="form.changeColor" v-for="color in colors" :key="color.id"
                   type="radio"
                   :value="color"
                   name="color"
                   class="color-radio single-product__color"
                   :style="{backgroundColor: color.color}">
          </div>
          <div v-for="color in colors" :key="color.id" class="">
            <div v-if="color.id === form.changeColor.id" class="color-title">{{ color.title }}</div>
          </div>
          <Select v-model:value="form.selectSize" :options="selectOptions"  class-name="single-product__select m-t-10" width="100%"/>
          <div class="single-product__group--btns">
            <Button class-name="bg-yellow color-white" title="В КОРЗИНУ"/>
            <Button class-name="bg-white color-black" title="В ИЗБРАННОЕ"/>
          </div>
          <div class="single-product__information">
            <div class="single-product__information--item">
              <div class="single-product__information--title">Подробности</div>
              <div class="single-product__information--content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur distinctio optio sint perferendis voluptatum eveniet aspernatur ea veritatis tempore ipsa at, vero autem! Quas repudiandae quos enim. Vitae, provident eveniet.
              </div>
            </div>
            <div class="single-product__information--item">
              <div class="single-product__information--title">Обмеры и описание</div>
              <div class="single-product__information--content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur distinctio optio sint perferendis voluptatum eveniet aspernatur ea veritatis tempore ipsa at, vero autem! Quas repudiandae quos enim. Vitae, provident eveniet.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione vel tempore praesentium magni, quis minima dignissimos vitae. Culpa, vitae, ut voluptatem neque assumenda officia rem et alias adipisci sapiente, incidunt tempora magni nihil delectus dolor laborum ipsum saepe praesentium repudiandae sequi aliquid omnis. Fugiat modi qui ut cum! Voluptatem numquam repellendus repellat assumenda vel quasi repudiandae, dolores dolor sequi culpa totam aspernatur necessitatibus dicta magnam, iste maiores et? Deserunt, expedita eos, repudiandae odit consequuntur autem assumenda molestiae atque obcaecati quaerat provident rerum in architecto! Voluptates fuga sit vitae ab debitis unde, exercitationem eaque, numquam odit odio voluptatum consequuntur natus. Pariatur facere sit repellendus. Inventore, dignissimos. Sint magnam assumenda, explicabo necessitatibus ab laudantium cum ut temporibus vitae officiis vero amet commodi eligendi pariatur aliquid ex provident voluptatem quisquam facilis ullam sequi dolorem suscipit odio? Repellendus, sit ea maiores dicta temporibus possimus iusto minima omnis, nostrum aliquid libero repudiandae explicabo delectus laborum! Consectetur iusto quisquam consequuntur voluptatibus quod, magnam illo nostrum doloribus sunt natus minima blanditiis laudantium inventore doloremque optio nulla facilis quaerat illum, sed libero provident mollitia laboriosam esse eligendi? Cum, rem nihil reiciendis, qui ad ipsam repellendus expedita ipsa porro libero ullam sit exercitationem ea non cupiditate! Illo ipsum eius repellat nisi! Voluptate deserunt distinctio, quisquam illum impedit assumenda aliquam porro rem accusantium odio necessitatibus vel nesciunt tenetur non nostrum nobis rerum nemo dolor atque voluptas at eum eligendi itaque! Quam consequuntur ipsum soluta voluptas inventore voluptate. Atque laborum cupiditate quam blanditiis numquam delectus, reprehenderit debitis at. Libero provident perferendis iusto eos similique natus assumenda eligendi repellat optio, velit deserunt blanditiis saepe quod. Repellat dolore rerum sit magnam impedit? Dignissimos unde ab dolorem alias fuga, saepe, quo eligendi nam voluptatem doloremque sit cum blanditiis harum temporibus sapiente. Omnis consequatur rerum quas dolore, illum, ut iure quidem, tempore odit maiores ad possimus excepturi? Suscipit blanditiis in quae esse numquam voluptatem ea est voluptas itaque dicta vitae natus enim, modi porro quaerat illo cupiditate quo eaque velit nostrum, explicabo rem aliquid! Doloribus dolorem accusantium expedita eligendi exercitationem aut vitae facilis sequi, hic maxime voluptate incidunt ullam facere odio optio dicta distinctio unde officiis fugit a. Sit maiores consequatur hic laudantium distinctio impedit voluptas, excepturi eum, ut cupiditate quia assumenda dolores, voluptatem et! Minus, nam eveniet! Libero laborum provident vero consequuntur expedita, nisi error natus ipsum eius nemo maxime deleniti magni quae. Fuga eos vero molestiae? Enim fugit dolor, quo qui culpa consequatur.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.single-product {
  margin-top: 70px;

  &__inner {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;
  }
  &__left {
    img {
      width: 100%;
    }
  }
  &__right {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  &__price {
    margin-top: 20px;
    margin-bottom: 20px;
  }
  &__colors {
    display: flex;
  }
  &__color {
    height: 20px;
    width: 20px;
    margin: 0 5px 0 0;

    &:last-child {
      margin-right: 0;
    }

  }
  &__color[type="radio"] {
    appearance: none;
    border: 1px solid #2525254c;
    border-radius: 50%;
    transform: translateY(-0.075em);
    place-content: center;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &::before {
      content: "";
      width: 0.65em;
      height: 0.65em;
      border-radius: 50%;
      transform: scale(0);
      transition: 120ms transform ease-in-out;
      background-color: #2525254c;
    }

    &:checked::before {
      transform: scale(1);
    }
  }
  .color-title {
    color: #E0BEA2;
    text-align: center;
    font-family: 'Raleway', serif;
    font-size: 14px;
    font-weight: 300;
    margin-top: 10px;
    margin-bottom: 20px;
  }
  &__select {
    width: 100%;
  }
  &__group--btns {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 20px;
    width: 100%;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  &__information {
    &--item {
      margin-bottom: 10px;
      &:last-child {
        margin-bottom: 0;
      }
    }
    &--title {
      color: #252525;
      font-family: "Raleway", serif;
      font-size: 16px;
      font-weight: 300;
      margin-bottom: 10px;
    }
    &--content {
      color: #252525;
      font-family: "Raleway", serif;
      font-size: 14px;
      font-weight: 200;
    }
  }
}
</style>