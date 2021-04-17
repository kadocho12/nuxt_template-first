<template>
  <article class="page page-seminar">
    <SectionSeminarMembership />

    <SectionSeminarUdemy :udemy="udemy" />
  </article>
</template>

<script>
export default {
  data() {
    return {
      udemy: [],
    }
  },
  head() {
    const title = 'SEMINAR | amity_sensei'
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
          content: 'https://amitysensei.com/seminar/',
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
          href: 'https://amitysensei.com/seminar/',
        },
        {
          rel: 'preload',
          href:
            'https://amitysensei.com/imgs/page/seminar/amitysensei-seminar-membership.jpg.webp',
          as: 'image',
        },
        {
          rel: 'preload',
          href:
            'https://amitysensei.com/imgs/page/seminar/amitysensei-seminar-membership.jpg',
          as: 'image',
        },
        {
          rel: 'preload',
          href: 'https://amitysensei.com/imgs/amitysensei-ch-icon.jpg.webp',
          as: 'image',
        },
        {
          rel: 'preload',
          href: 'https://amitysensei.com/imgs/amitysensei-ch-icon.jpg',
          as: 'image',
        },
        {
          rel: 'preload',
          href:
            'https://amitysensei.com/imgs/page/seminar/amitysensei-seminar-membership-1.jpg.webp',
          as: 'image',
        },
        {
          rel: 'preload',
          href:
            'https://amitysensei.com/imgs/page/seminar/amitysensei-seminar-membership-1.jpg',
          as: 'image',
        },
        {
          rel: 'preload',
          href:
            'https://amitysensei.com/imgs/page/seminar/amitysensei-seminar-membership-2.jpg.webp',
          as: 'image',
        },
        {
          rel: 'preload',
          href:
            'https://amitysensei.com/imgs/page/seminar/amitysensei-seminar-membership-2.jpg',
          as: 'image',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.page-seminar {
  padding-bottom: 0;
}
</style>
