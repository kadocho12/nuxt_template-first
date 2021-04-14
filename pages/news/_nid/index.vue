<template>
  <article class="page page-news-nid">
    <SectionNewsDetail :news="news" />

    <SectionNewsRecent :newses-recent="newsesRecent" />
  </article>
</template>

<script>
export default {
  async asyncData({ store, params }) {
    await store.dispatch('news/getNews', { slug: params.nid })
    await store.dispatch('news/getNewses', { label: 'newsesRecent', length: 4 })

    return {
      news: store.getters['news/news'],
      newsesRecent: store.getters['news/newsesRecent'],
    }
  },
  data() {
    return {
      news: {},
    }
  },
  head() {
    // @ts-ignore
    const title = this.news.title.rendered
    // @ts-ignore
    const desc = this.news.excerpt.rendered
      .replace(/[(<p>)|(</p>)]/g, '')
      .replace(/\[&helli;\]/, '')
    const thumb = // @ts-ignore
      this.news._embedded['wp:featuredmedia'] && // @ts-ignore
      this.news._embedded['wp:featuredmedia'][0] && // @ts-ignore
      this.news._embedded['wp:featuredmedia'][0].source_url // @ts-ignore
        ? this.news._embedded['wp:featuredmedia'][0].source_url
        : 'https://amitysensei.com/ogp.png'
    const thumb2 = // @ts-ignore
      this.news._embedded['wp:featuredmedia'] && // @ts-ignore
      this.news._embedded['wp:featuredmedia'][0] && // @ts-ignore
      this.news._embedded['wp:featuredmedia'][0].source_url // @ts-ignore
        ? this.news._embedded['wp:featuredmedia'][0].source_url + '.webp'
        : 'https://amitysensei.com/ogp.png'

    return {
      title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: desc,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: thumb,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: title,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: desc,
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'article',
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://amitysensei.com/news/' + this.$route.params.nid,
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
          href: 'https://amitysensei.com/news/' + this.$route.params.nid,
        },
        {
          rel: 'preload',
          href: thumb2,
          as: 'image',
        },
        {
          rel: 'preload',
          href: thumb,
          as: 'image',
        },
      ],
    }
  },
}
</script>
