<template>
  <article class="page page-about">
    <SectionAboutProfile />

    <SectionAboutCareer />
  </article>
</template>

<script>
export default {
  head() {
    const title = 'ABOUT | amity_sensei'
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
          content: 'website',
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://amitysensei.com/about/',
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
          href: 'https://amitysensei.com/about/',
        },
        {
          rel: 'preload',
          href:
            'https://amitysensei.com/imgs/page/about/amitysensei-about-prof.jpg.webp',
          as: 'image',
        },
        {
          rel: 'preload',
          href:
            'https://amitysensei.com/imgs/page/about/amitysensei-about-prof.jpg',
          as: 'image',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.page-about {
  @include mq(sm) {
    padding-bottom: 80px;
  }
}
</style>
