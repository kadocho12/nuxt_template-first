<template>
  <ul v-if="totalPage > 1" class="item item-pagination"></ul>
</template>

<script>
export default {
  props: {
    totalPage: {
      type: Number,
      required: true,
    },
    query: {
      type: String,
      required: true,
    },
    now: {
      type: Number,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.item-pagination {
  display: flex;
  justify-content: center;
  align-items: center;

  > .item {
    margin: 0 6px;

    > .item-link {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 40px;
      height: 40px;
      background-color: var(--color-bg-gray);
      opacity: 1;
      transition: all 0.024s linear;

      &:hover {
        opacity: 0.64;
      }

      @include mq(sm) {
        width: 32px;
        height: 32px;
      }

      > .icon {
        width: 24px;
      }

      &.current {
        color: var(--color-font-white);
        background-color: var(--color-bg-black);
      }

      &.inactive {
        opacity: 0;
      }

      &.item-dot,
      &.prev,
      &.next {
        background-color: transparent;
      }

      &.prev {
        > .icon {
          transform: scale(-1, 1);
        }
      }
    }
  }
}
</style>
