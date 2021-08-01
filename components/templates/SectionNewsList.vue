<template>
  <section class="section section-news-list"></section>
</template>

<script>
export default {
  props: {
    newses: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      query: 'page',
      limit: 12,
    }
  },
}
</script>

<style lang="scss" scoped>
.section-news-list {
  > .container {
    > .page-ttl {
      top: -62px;

      @include mq(md) {
        top: -66px;
      }

      @include mq(sm) {
        top: -36px;
      }

      @include mq(xs) {
        top: -32px;
      }
    }

    > .list {
      margin-top: -16px;

      @include mq(md) {
        margin-top: -12px;
      }

      @include mq(sm) {
        margin-top: -8px;
      }

      @include mq(xs) {
        margin-top: -12px;
      }
    }

    > .item {
      margin-top: 28px;

      @include mq(md) {
        margin-top: 32px;
      }
    }
  }
}
</style>
