<template>
  <article class="page page-works">
    <SectionWorksList :works="works" />
  </article>
</template>

<script>
export default {
  head() {
    const title = 'WORKS | amity_sensei'
    // const desc = ''
    // const thumb = '/ogp.png'

    return {
      title,
      meta: [
        // {
        //   hid: 'description',
        //   name: 'description',
        //   content: desc,
        // },
        // {
        //   hid: 'og:image',
        //   property: 'og:image',
        //   content: thumb,
        // },
        {
          hid: 'og:title',
          property: 'og:title',
          content: title,
        },
        // {
        //   hid: 'og:description',
        //   property: 'og:description',
        //   content: desc,
        // },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'article',
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://amitysensei.com/works/',
        },
        {
          hid: 'twitter:card',
          property: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          hid: 'twitter:title',
          property: 'twitter:title',
          content: title,
        },
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: 'https://amitysensei.com/works/',
        },
      ],
    }
  },
}
</script>

<style lang="scss">
.page-index {
  padding-top: 0;
  padding-bottom: 0;

  > .sections {
    position: relative;
    padding-top: 80px;
    padding-bottom: 88px;
    background-color: var(--color-bg-default);

    @include mq(sm) {
      padding-bottom: 72px;
    }
  }
}

.js-header-logo.nuxt-link-exact-active {
  opacity: 0;
  transition: all 0.64s cubic-bezier(0, 0.55, 0.45, 1);

  &.js-header-logo-active {
    opacity: 1;
  }
}
</style>
