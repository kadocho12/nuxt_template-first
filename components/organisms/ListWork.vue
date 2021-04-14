<template>
  <ul class="list list-work js-scroll">
    <ListItemWork v-for="work in works" :key="work.id" :work="work" />
  </ul>
</template>

<script>
export default {
  props: {
    works: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.list-work {
  transform: translateX(-12px);
  display: flex;
  flex-wrap: wrap;
  width: calc(100% + 24px);

  @include mq(md) {
    transform: translateX(-8px);
    width: calc(100% + 16px);
  }

  > .list-item {
    width: calc(100% / 3);
    padding: 16px 12px;

    @include mq(md) {
      padding: 16px 8px;
    }

    @include mq(xs) {
      width: 50%;
    }
  }

  &.js-scroll {
    > .list-item {
      opacity: 0;
      transform: translate3d(0, 24px, 0);
      transition: all 1.2s cubic-bezier(0, 0.55, 0.45, 1);

      @for $i from 1 through 6 {
        &:nth-child(#{$i}) {
          transition-delay: $i * 0.24s;
        }
      }
    }

    &.js-scroll-active {
      > .list-item {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }
    }
  }
}
</style>
