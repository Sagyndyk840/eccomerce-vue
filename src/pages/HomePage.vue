<script>
export default {
  name: "HomePage"
}
</script>

<template>
  <section class="hero" :style="{'background-image': 'url(' + require('../assets/images/png/hero.png') + ')'}">
    <div class="container">
      <div class="hero-inner">
        <h2 class="hero-title">
          Новая коллекция
        </h2>
        <a href="" class="hero-link">Смотреть Новинки</a>
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
</style>