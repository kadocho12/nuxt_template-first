<template>
  <ul class="list list-sns">
    <li v-for="s in snsList" :key="s.icon" class="sns">
      <a
        :aria-label="s.label"
        :href="s.href"
        target="_blank"
        rel="noopener noreferrer"
        class="sns-link"
      >
        <img :src="s.icon" class="sns-icon" alt="" />
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      snsList: [
        {
          label: 'YouTube',
          icon: '/imgs/page/top/youtube.svg',
          href: 'https://www.youtube.com/channel/UCcXtyjK8wagT5LWS5bBgPPQ',
        },
        {
          label: 'Twitter',
          icon: '/imgs/page/top/twitter.svg',
          href: 'https://twitter.com/amity_sensei',
        },
        {
          label: 'Instagram',
          icon: '/imgs/page/top/instagram.svg',
          href: 'https://www.instagram.com/amity_sensei/',
        },
        {
          label: 'facebook',
          icon: '/imgs/page/top/facebook.svg',
          href:
            'https://www.facebook.com/profile.php?id=113971883336522&ref=br_rs',
        },
        {
          label: 'note',
          icon: '/imgs/page/top/note.svg',
          href: 'https://note.com/ipadmate',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scopeds>
.list-sns {
  display: flex;
  margin-left: 2px;

  > .sns {
    margin-right: 2px;

    > .sns-link {
      padding: 8px;

      > .sns-icon {
        width: 24px;
        fill: var(--color-icon-default);
        transition: all 0.024s linear;
      }

      &:hover {
        > .sns-icon {
          fill: var(--color-icon-black-64);
        }
      }
    }
  }

  &.icon-large {
    > .sns {
      > .sns-link {
        > .sns-icon {
          width: 32px;

          @include mq(sm) {
            width: 24px;
          }
        }
      }
    }
  }
}
</style>
