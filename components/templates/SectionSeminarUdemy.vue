<template>
  <section class="section section-seminar-udemy">
    <div class="bg bg-cover">
      <div class="bg-img"></div>
    </div>
    <div class="container js-scroll">
      <svg viewBox="0 0 24 24" class="udemy-icon">
        <use xlink:href="#i-udemy" />
      </svg>
      <h2 class="udemy-ttl txt-center">COURSES</h2>
      <p class="udemy-txt txt-center">
        <span class="inline-block">メンバーシップで配信した</span
        ><span class="inline-block">セミナーのアーカイブ動画は</span
        ><span class="inline-block">Udemyで個別販売をしています。</span><br />
        <span class="inline-block"
          >もっと詳しくアプリの使い方が知りたい方や</span
        ><span class="inline-block">繰り返し見たいセミナーがある場合は、</span
        ><span class="inline-block">Udemyで単品購入するのがおすすめです。</span>
      </p>
      <ButtonLinkBlank
        href="https://www.udemy.com/user/amity/"
        class="button-light"
      >
        セミナーを購入
      </ButtonLinkBlank>
      <ListUdemy :udemy="udemy" />
    </div>
  </section>
</template>

<script>
export default {
  props: {
    udemy: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.section-seminar-udemy {
  > .bg {
    > .bg-img {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-image: url('/imgs/page/seminar/amitysensei-seminar-udemy.jpg');
      background-position: center;
      background-size: cover;
    }
  }

  > .container {
    padding-top: 80px;
    padding-bottom: 80px;

    > .udemy-ttl,
    > .udemy-main-txt,
    > .udemy-txt {
      color: var(--color-font-white);
    }

    > .udemy-icon {
      display: block;
      width: 80px;
      margin: auto;
      fill: #ea5252;
      background-color: #edece6;
      border-radius: 16px;
      overflow: hidden;

      @include mq(sm) {
        width: 56px;
        border-radius: 8px;
      }
    }

    > .udemy-ttl {
      margin-top: 40px;

      @include mq(sm) {
        margin-top: 32px;
      }
    }

    > .udemy-txt {
      max-width: 524px;
      margin: 32px auto 0;

      @include mq(sm) {
        margin-top: 24px;
      }
    }

    > .button {
      max-width: 240px;
      margin: 48px auto 0;

      @include mq(sm) {
        margin-top: 40px;
      }
    }

    > .list {
      margin-top: 52px;

      @include mq(sm) {
        margin-top: 48px;
      }
    }

    &.js-scroll {
      opacity: 0;
      transform: translate3d(0, 24px, 0);
      transition: all 2.8s cubic-bezier(0, 0.55, 0.45, 1);

      &.js-scroll-active {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }
    }
  }
}
</style>
