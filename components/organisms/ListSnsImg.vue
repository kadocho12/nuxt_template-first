<template>
  <ul class="list list-sns-img"></ul>
</template>

<script>
export default {
  props: {
    sns: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.list-sns-img {
  display: flex;
  flex-wrap: wrap;

  > .list-item {
    width: calc(100% / 3);

    > .sns-pickup-link {
      display: flex;

      > .sns-pickup-fig {
        position: relative;
        display: flex;
        width: 100%;
        overflow: hidden;

        &::before {
          content: '';
          width: 100%;
          padding-top: 100%;
        }

        > .sns-pickup-fig-img {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          transform: scale(1);
          transition: all 0.16s cubic-bezier(0.11, 0, 0.5, 0);
        }
      }

      &:hover {
        > .sns-pickup-fig {
          > .sns-pickup-fig-img {
            transform: scale(1.08);
          }
        }
      }
    }
  }
}
</style>
