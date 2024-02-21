<script>
export default {
  name: "Header",
  props: ['global'],
}
</script>

<template>
  <header class="header" :class="global ? 'header-second' : 'header-first'">
    <div class="container">
      <div class="header-inner">
        <nav class="header-item header-menu">
          <ul>
            <li>
              <a href="">NEW</a>
            </li>
            <li>
              <router-link :to="{name: 'CategoryPage'}">КАТАЛОГ</router-link>
            </li>
            <li>
              <a href="">О НАС</a>
            </li>
          </ul>
        </nav>
        <router-link :to="{name: 'HomePage'}" class="logo">
          <img v-if="global" src="@assets/images/png/logo-22.png" alt="">
          <img v-else src="@assets/images/png/logo.png" alt="">
        </router-link>
        <ul class="header-icons">
          <li>
            <svg width="25" height="25"  xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#a)"><path d="M19.729 17.989 25 23.259 23.259 25l-5.27-5.271a11.026 11.026 0 0 1-6.913 2.423C4.962 22.152 0 17.19 0 11.076 0 4.962 4.962 0 11.076 0c6.114 0 11.076 4.962 11.076 11.076a11.026 11.026 0 0 1-2.423 6.913Zm-2.469-.913a8.587 8.587 0 0 0 2.43-6 8.612 8.612 0 0 0-8.614-8.615 8.612 8.612 0 0 0-8.615 8.615 8.612 8.612 0 0 0 8.615 8.615 8.587 8.587 0 0 0 6-2.43l.184-.185Z" fill="#fff"/></g><defs><clipPath id="a"><path  d="M0 0h25v25H0z"/></clipPath></defs></svg>
          </li>
          <li>
            <router-link :to="{name: 'LoginPage'}">
              <svg width="25" height="25" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#a)"><path d="M2.5 25a9.524 9.524 0 0 1 19.048 0h-2.381A7.143 7.143 0 0 0 4.88 25H2.5Zm9.524-10.714A7.14 7.14 0 0 1 4.88 7.143 7.14 7.14 0 0 1 12.024 0a7.14 7.14 0 0 1 7.143 7.143 7.14 7.14 0 0 1-7.143 7.143Zm0-2.381a4.76 4.76 0 0 0 4.762-4.762 4.76 4.76 0 0 0-4.762-4.762 4.76 4.76 0 0 0-4.762 4.762 4.76 4.76 0 0 0 4.762 4.762Z" fill="#fff"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h25v25H0z"/></clipPath></defs></svg>
            </router-link>
          </li>
          <li>
            <router-link :to="{name: 'FavoritePage'}">
              <svg width="25" height="25" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#a)"><path d="M12.501 3.161c2.936-2.636 7.474-2.549 10.302.285a7.5 7.5 0 0 1 .295 10.295l-10.6 10.615L1.902 13.74a7.5 7.5 0 0 1 10.6-10.58Zm8.532 2.051a4.997 4.997 0 0 0-6.862-.19l-1.669 1.497-1.67-1.497a4.999 4.999 0 0 0-6.867.193 4.999 4.999 0 0 0-.24 6.813l8.775 8.79 8.775-8.788a5 5 0 0 0-.242-6.818Z" fill="#fff"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h25v25H0z"/></clipPath></defs></svg>
            </router-link>
          </li>
          <li>
            <router-link :to="{name: 'CartPage'}">
              <svg width="25" height="25" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#a)"><path d="M3.817 5.48 0 1.666 1.665 0l3.816 3.817h17.937a1.177 1.177 0 0 1 1.128 1.514l-2.825 9.415a1.177 1.177 0 0 1-1.127.84H6.17v2.353h12.946v2.354H4.993a1.177 1.177 0 0 1-1.176-1.177V5.48Zm2.353.69v7.061h13.548l2.119-7.06H6.17ZM5.582 25a1.766 1.766 0 1 1 0-3.531 1.766 1.766 0 0 1 0 3.531Zm14.122 0a1.765 1.765 0 1 1 0-3.53 1.765 1.765 0 0 1 0 3.53Z" fill="#fff"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h25v25H0z"/></clipPath></defs></svg>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  &-first {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;

    a {
      color: #FFF;
    }

    svg {
      path {
        fill: white;
      }
      &:hover {
        path {
          fill: #E0BEA2;
        }
      }
    }
  }

  &-second {
    a {
      color: #252525;
    }

    svg {
      path {
        fill: #252525;
      }

      &:hover {
        path {
          fill: #E0BEA2;
        }
      }
    }
  }

  &-inner {
    display: flex;
    justify-content: space-between;
    align-items: center ;
    padding-top: 25px;
  }
  &-menu {
    ul {
      display: flex;
      li {
        margin-right: 25px;
        &:last-child {
          margin-right: 0;
        }

        a {
          font-family: 'Raleway', serif;
          font-size: 18px;
          font-weight: 300;
          transition: .3s all ease;
          text-transform: uppercase;
          &:hover {
            color: #E0BEA2;
          }
        }
      }
    }
  }
  &-icons {
    display: flex;
    li {
      margin-right: 25px;
      cursor: pointer;
      &:last-child {
        margin-right: 0;
      }
      svg {
        path {
          transition: .3s all ease;
        }

        &:hover {
          path {
            opacity: 0.7;
          }
        }
      }
    }
  }
}
</style>