<template>
  <section class="section section-news-detail"></section>
</template>

<script>
export default {
  props: {
    news: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.section-news-detail {
  > .container {
    padding-bottom: 40px;

    > .news-fig {
      display: flex;

      @include mq(sm) {
        transform: translateX(-26px);
        width: calc(100% + 52px);
      }

      > .news-fig-img {
        display: contents;
      }
    }

    > .news-time {
      width: 100%;
      // margin-top: 64px;
      line-height: 1.2em;
      color: var(--color-font-gray);

      @include mq(sm) {
        // margin-top: 40px;
      }
    }

    > .news-ttl {
      margin-top: 64px;
      letter-spacing: 0;

      @include mq(sm) {
        margin-top: 32px;
        font-size: 20px;
      }
    }

    > .content {
      margin-top: 40px;

      @include mq(sm) {
        margin-top: 24px;
      }
    }
  }
}
</style>
