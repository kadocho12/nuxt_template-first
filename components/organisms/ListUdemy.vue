<template>
  <ul class="list list-udemy js-scroll">
    <ListItemUdemy v-for="u in udemy" :key="u.id" :udemy="u" />
  </ul>
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
.list-udemy {
  transform: translateX(-12px);
  display: flex;
  flex-wrap: wrap;
  width: calc(100% + 24px);

  @include mq(md) {
    transform: translateX(-8px);
    width: calc(100% + 16px);
  }

  > .list-item {
    width: 25%;
    padding: 12px;

    @include mq(md) {
      padding: 8px;
    }

    @include mq(sm) {
      width: calc(100% / 3);
    }

    @include mq(xs) {
      width: 50%;
    }
  }

  &.list-second {
    > .list-item {
      width: 50%;
    }
  }

  &.list-default-sm {
    @include mq(sm) {
      transform: translateX(-8px);
      width: calc(100% + 16px);
    }

    > .list-item {
      @include mq(sm) {
        width: calc(100% / 3);
        padding: 8px;
      }

      @include mq(xs) {
        width: 50%;
      }
    }
  }

  &.js-scroll {
    > .list-item {
      opacity: 0;
      transform: translate3d(0, 24px, 0);
      transition: all 1.2s cubic-bezier(0, 0.55, 0.45, 1);

      @for $i from 1 through 12 {
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

  &.list-last-sm-no > .list-item:last-child {
    display: block;

    @include mq(sm) {
      display: none;
    }

    @include mq(xs) {
      display: block;
    }
  }
}
</style>
