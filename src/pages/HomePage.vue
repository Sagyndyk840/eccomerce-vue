<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

export default {
  setup () {
  },
  components: {
    Swiper,
    SwiperSlide,
  },
}
</script>

<template>
  <section class="hero" style="background-image: url('src/assets/images/png/hero.png')">
    <div class="container">
      <div class="hero-inner">
        <h2 class="hero-title">
          Новая коллекция
        </h2>
        <a href="" class="hero-link">Смотреть Новинки</a>
      </div>
    </div>
  </section>
  <section class="catalog">
    <div class="container">
      <div class="catalog-inner">
        <div class="catalog-title section-title">Категории</div>
          <swiper
              class="catalog-group"
              :slides-per-view="4"
              :space-between="15"
          >
            <swiper-slide>
              <a href="" class="catalog-item">
                <img src="@assets/images/png/catalog-item.png" alt="">
                <div class="catalog-item__title">Куртки</div>
              </a>
            </swiper-slide>
            <swiper-slide>
              <a href="" class="catalog-item">
                <img src="@assets/images/png/catalog-item.png" alt="">
                <div class="catalog-item__title">Куртки</div>
              </a>
            </swiper-slide>
            <swiper-slide>
              <a href="" class="catalog-item">
                <img src="@assets/images/png/catalog-item.png" alt="">
                <div class="catalog-item__title">Куртки</div>
              </a>
            </swiper-slide>
            <swiper-slide>
              <a href="" class="catalog-item">
                <img src="@assets/images/png/catalog-item.png" alt="">
                <div class="catalog-item__title">Куртки</div>
              </a>
            </swiper-slide>
            <swiper-slide>
              <a href="" class="catalog-item">
                <img src="@assets/images/png/catalog-item.png" alt="">
                <div class="catalog-item__title">Куртки</div>
              </a>
            </swiper-slide>
            <swiper-slide>
              <a href="" class="catalog-item">
                <img src="@assets/images/png/catalog-item.png" alt="">
                <div class="catalog-item__title">Куртки</div>
              </a>
            </swiper-slide>
          </swiper>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.hero {
  height: 100vh;
  min-width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center top;
  display: flex;
  justify-content: center;
  align-items: center;

  &-title {
    color: #FFF;
    text-align: center;
    font-family: 'Raleway',serif;
    font-size: 46px;
    font-weight: 300;
    position: relative;

    &::after {
      content: '';
      width: 120px;
      height: 1px;
      background-color: white ;
      margin-bottom: 20px;
      display: flex;
      justify-content: center;
      margin-top: 20px;
      transform: translateX(100%);
    }
  }

  &-link {
    color: #FFF;
    text-align: center;
    font-family: 'Raleway',serif;
    display: block;
    font-size: 16px;
    font-weight: 300;
    text-transform: uppercase;
    transition: .3s all ease;
    &:hover {
      padding-left: 20px;
      color: #E0BEA2;
      opacity: 0.9;
    }
  }
}

.catalog {
  margin-top: 100px;
  margin-bottom: 100px;
  &-title {
    margin-bottom: 50px;
  }

  &-group {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 15px;
  }

  &-item {
    position: relative;
    width: 100%;
    &__title {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background: rgba(224, 190, 162, 0.75);
      backdrop-filter: blur(3px);
      padding-top: 8px;
      padding-bottom: 8px;
      color: #FFF;
      text-align: center;
      font-family: 'Raleway',serif;
      font-size: 20px;
      font-weight: 300;
      position: absolute;
      bottom: 0;
    }
  }
}
</style>