<template>
  <article class="page page-news">
    <SectionNewsList :newses="newses" />
  </article>
</template>

<script>
export default {
  // async asyncData({ store }) {
  //   await store.dispatch('news/getNewses')

  //   return {
  //     newses: store.getters['news/newses'],
  //   }
  // },
  data() {
    return {
      newses: [
        {
          source_url: '/imgs/page/top/work-thumb.jpg',
        },
      ],
    }
  },
  head() {
    const title = 'NEWS | amity_sensei'
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
          content: 'https://amitysensei.com/news/',
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
          href: 'https://amitysensei.com/news/',
        },
      ],
    }
  },
}
</script>
