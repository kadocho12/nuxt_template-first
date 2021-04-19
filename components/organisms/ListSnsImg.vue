<template>
  <ul class="list list-sns-img js-scroll">
    <li v-for="(s, i) in sns" :key="i" class="list-item">
      <a
        aria-label="外部サイトへのリンク"
        :href="s.href"
        target="_blank"
        rel="noopener noreferrer"
        class="sns-pickup-link"
      >
        <figure class="sns-pickup-fig">
          <picture class="sns-pickup-fig-img">
            <!-- <source
              type="image/webp"
              :srcset="s.img + '.webp'"
              loading="lazy"
            /> -->
            <img :src="s.img" :alt="s.alt" loading="lazy" />
          </picture>
        </figure>
      </a>
    </li>
  </ul>
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

  &.js-scroll {
    > .list-item {
      opacity: 0;
      transform: translate3d(0, 24px, 0);
      transition: all 1.2s cubic-bezier(0, 0.55, 0.45, 1);

      @for $i from 1 through 9 {
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
