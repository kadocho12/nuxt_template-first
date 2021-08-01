<template>
  <section class="section section-work-detail"></section>
</template>

<script>
export default {
  props: {
    work: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.section-work-detail {
  > .container {
    > .work-fig {
      display: flex;

      @include mq(sm) {
        transform: translateX(-26px);
        width: calc(100% + 52px);
      }

      > .work-fig-img {
        display: contents;
      }
    }

    > .work-time {
      width: 100%;
      margin-top: 64px;
      line-height: 1.2em;
      color: var(--color-font-gray);

      @include mq(sm) {
        margin-top: 40px;
      }
    }

    > .work-ttl {
      margin-top: 4px;
      letter-spacing: 0;

      @include mq(sm) {
        margin-top: 0;
        font-size: 20px;
      }
    }

    > .work-client {
      font-size: 16px;

      @include mq(sm) {
        font-size: 14px;
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
