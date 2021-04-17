<template>
  <section class="section section-top-seminar">
    <div class="bg bg-cover">
      <div class="bg-img"></div>
    </div>
    <div class="container js-scroll">
      <div class="seminar-txts">
        <h2 class="seminar-ttl">SEMINAR</h2>
        <p class="seminar-main-txt font-500">
          オンラインにてiPadセミナーを配信中<br />
          実践的なテクニックを
        </p>
        <p class="seminar-txt">
          iPadを今よりももっと使いこなしたい方に向けて、有料のオンラインセミナーを開催・販売しています。YouTubeのメンバーシップでは、ライブ配信形式で月に3回以上セミナーを開催。オンラインで参加者とコミュニケーションを取りながら楽しく行っています。また、繰り返し見たい方や気になるセミナーだけを見たい方向けに、Udemyにてセミナー動画の個別販売もしています。
        </p>
        <ButtonLink to="/seminar/" class="button-light">
          ALL SEMINAR
        </ButtonLink>
      </div>
      <div class="udemy">
        <ListUdemy
          :udemy="udemy"
          class="list-second list-default-sm list-last-sm-no list-last-xs-on"
        />
      </div>
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
.section-top-seminar {
  > .bg {
    > .bg-img {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-image: url('/imgs/page/top/amitysensei-top-kv-icon.jpg');
      background-position: center;
      background-size: cover;
    }
  }

  > .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 80px;
    padding-bottom: 80px;

    @include mq(sm) {
      display: block;
      padding-bottom: 88px;
    }

    > .seminar-txts {
      width: 46%;
      max-width: 476px;

      @include mq(sm) {
        width: 100%;
        max-width: none;
        text-align: center;
      }

      > .seminar-ttl {
        color: var(--color-font-white);
      }

      > .seminar-main-txt {
        margin-top: 32px;
        font-size: 20px;
        line-height: 1.6em;
        color: var(--color-font-white);

        @include mq(sm) {
          margin-top: 24px;
          font-size: 16px;
        }
      }

      > .seminar-txt {
        margin-top: 32px;
        color: var(--color-font-white);

        @include mq(sm) {
          margin-top: 24px;
        }
      }

      > .button {
        max-width: 200px;
        margin-top: 48px;

        @include mq(sm) {
          margin: 24px auto 0;
        }
      }
    }

    > .udemy {
      width: 50%;

      @include mq(sm) {
        width: 100%;
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
