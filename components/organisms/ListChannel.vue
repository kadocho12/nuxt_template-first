<template>
  <ul class="list list-channel js-scroll">
    <li v-for="ch in channels" :key="ch.name" class="list-item">
      <a
        :href="ch.href"
        target="_blank"
        rel="noopener noreferrer"
        class="ch-link"
      >
        <figure class="ch-fig">
          <picture class="ch-fig-img">
            <source
              type="image/webp"
              :srcset="ch.img + '.webp'"
              loading="lazy"
            />
            <img :src="ch.img" :alt="`${ch.name}のアイコン`" loading="lazy" />
          </picture>
        </figure>
        <div class="ch-info">
          <p class="ch-nm font-500">{{ ch.name }}</p>
          <p class="ch-bio">{{ ch.bio }}</p>
        </div>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      channels: [
        {
          href: 'https://www.youtube.com/channel/UCcXtyjK8wagT5LWS5bBgPPQ',
          img: '/imgs/amitysensei-ch-icon.jpg',
          name: 'amity_sensei',
          bio:
            'iPadのクリエイティブな使い方や裏ワザなどを発信しているメインのチャンネル。',
        },
        {
          href: 'https://www.youtube.com/channel/UC7wAqN3E_kX_VlQS8qZDtFQ',
          img: '/imgs/amitysensei-ch-icon-en.jpg',
          name: 'amity_sensei English',
          bio:
            'メインチャンネルの英語版。iPadのクリエイティブな使い方を海外に向けて発信中。',
        },
        {
          href: 'https://www.youtube.com/channel/UC_riYgHegV79m5QWEdxf8Cg',
          img: '/imgs/amitysensei-ch-icon-sub.jpg',
          name: 'あみてぃ',
          bio:
            'amity_senseiの愛用品やiPhoneのコアな使い方などを紹介しているサブチャンネル。',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.list-channel {
  > .list-item {
    margin-top: 24px;

    @include mq(sm) {
      margin-top: 16px;
    }

    &:first-child {
      margin-top: 0;
    }

    > .ch-link {
      align-items: center;

      > .ch-fig {
        position: relative;
        display: flex;
        width: 80px;
        border-radius: 50%;
        overflow: hidden;

        @include mq(sm) {
          width: 64px;
        }

        &::before {
          content: '';
          width: 100%;
          padding-top: 100%;
        }

        > .ch-fig-img {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          transform: scale(1);
          transition: all 0.16s cubic-bezier(0.11, 0, 0.5, 0);
        }
      }

      > .ch-info {
        flex: 1;
        padding-left: 16px;

        > .ch-nm {
          font-size: 16px;
          line-height: 1.2em;

          @include mq(sm) {
            font-size: 14px;
          }
        }

        > .ch-bio {
          margin-top: 4px;
          line-height: 1.4em;

          @include mq(sm) {
            font-size: 12px;
          }
        }
      }

      &:hover {
        > .ch-fig {
          > .ch-fig-img {
            transform: scale(1.12);
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

      @for $i from 1 through 3 {
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
