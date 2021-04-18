<template>
  <div id="layout-default" class="layout layout-default">
    <NavHeader :class="{ 'header-open': isMenu }" @clickMenu="clickMenu()" />

    <transition name="menu">
      <NavMenu v-show="isMenu" @clickCloseMenu="clickCloseMenu()" />
    </transition>

    <main class="main" @click="clickCloseMenu()">
      <Nuxt />
    </main>

    <NavFooter />

    <Svgs />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenu: false,
    }
  },
  watch: {
    $route() {
      this.isMenu = false

      setTimeout(() => {
        this.checkScroll()
      }, 880)
    },
  },
  mounted() {
    window.addEventListener('scroll', this.checkScroll)
    this.checkScroll()
    setTimeout(() => {
      this.checkScroll()
    }, 640)
  },
  methods: {
    checkScroll() {
      const actionHight = (window.innerHeight * 7) / 9

      for (
        let i = 0;
        i < document.getElementsByClassName('js-scroll').length;
        i++
      ) {
        if (
          document
            .getElementsByClassName('js-scroll')
            [i].getBoundingClientRect().top < actionHight
        ) {
          document
            .getElementsByClassName('js-scroll')
            [i].classList.add('js-scroll-active')
        }
      }
    },
    clickMenu() {
      this.isMenu = !this.isMenu
    },
    clickCloseMenu() {
      this.isMenu = false
    },
  },
}
</script>

<style lang="scss" scoped>
.layout-default {
  position: relative;
  min-height: 100vh;
  overflow-x: hidden;

  > .nav-header {
    position: fixed;
    top: 16px;
    right: 0;
    left: 0;
    z-index: 7000;

    @include mq(md) {
      top: 0;
    }
  }

  > .nav-menu {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: calc(50% - 40px);
    max-width: 680px;
    min-width: 480px;
    z-index: 6000;

    @include mq(sm) {
      width: 280px;
      min-width: 280px;
    }
  }

  > .nav-footer {
    z-index: 5000;
  }

  .menu-enter-active {
    transition: all 0.56s cubic-bezier(0, 0.55, 0.45, 1);
  }

  .menu-leave-active {
    transition: all 0.4s cubic-bezier(0.5, 1, 0.89, 1);
  }

  .menu-enter,
  .menu-leave-to {
    transform: translateX(100%);
  }

  .menu-enter-to,
  .menu-leave {
    transform: translateX(0);
  }
}
</style>
