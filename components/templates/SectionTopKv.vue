<template>
  <section class="section section-top-kv js-scroll">
    <h1 class="page-ttl">amity_senseiのコーポレートサイト</h1>
    <div class="bg bg-cover bg-hide">
      <div class="bg-img"></div>
    </div>
    <div class="container">
      <video id="kv-video" class="video" autoplay muted playsinline>
        <source src="/imgs/page/top/amitysensei-top-kv-icon.mp4.webm" />
        <source src="/imgs/page/top/amitysensei-top-kv-icon.mp4" />
        <source src="/imgs/page/top/amitysensei-top-kv-icon.mov" />
        <p>動画を再生するには、videoタグをサポートしたブラウザが必要です。</p>
      </video>
    </div>
  </section>
</template>

<script>
export default {
  mounted() {
    const el = document.getElementById('kv')
    const children = el.children
    el.style.height = window.innerHeight + 'px'
    children.forEach((child) => {
      child.style.height = window.innerHeight + 'px'
    })
    setTimeout(() => {
      document.getElementById('kv-video').play()
    }, 240)
  },
}
</script>

<style lang="scss" scoped>
.section-top-kv {
  position: relative;

  > .page-ttl {
    position: relative;
    z-index: -1;
  }

  > .bg {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;

    > .bg-img {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-image: url('/imgs/page/top/amitysensei-top-kv-icon.jpg');
      background-position: center;
      background-size: cover;

      @include mq(xs) {
        transform: scale(1.08);
        background-position: 8% -24px;
      }
    }
  }

  > .container {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: none;
    mix-blend-mode: lighten;

    > .video {
      max-width: 1200px;
      min-width: 480px;
    }
  }

  &.js-scroll {
    opacity: 0;
    transition: all 0.4s 0.4s cubic-bezier(0, 0.55, 0.45, 1);

    &.js-scroll-active {
      opacity: 1;
    }
  }
}
</style>
