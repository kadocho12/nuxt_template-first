<template>
  <section class="section section-works-list"></section>
</template>

<script>
export default {
  props: {
    works: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      query: 'page',
      limit: 6,
    }
  },
}
</script>

<style lang="scss" scoped>
.section-works-list {
  > .container {
    > .page-ttl {
      top: -62px;

      @include mq(sm) {
        top: -28px;
      }
    }

    > .list {
      margin-top: -16px;
    }

    > .item {
      margin-top: 32px;

      @include mq(md) {
        margin-top: 24px;
      }
    }
  }
}
</style>
