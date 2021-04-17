<template>
  <article class="page page-works-wid">
    <SectionWorksDetail :work="work" />
  </article>
</template>

<script>
export default {
  data() {
    return {
      work: {},
    }
  },
  head() {
    // @ts-ignore
    const title = this.work.title.rendered
    // @ts-ignore
    const desc = this.work.excerpt.rendered
      .replace(/[(<p>)|(</p>)]/g, '')
      .replace(/\[&helli;\]/, '')
    const thumb = // @ts-ignore
      this.work._embedded['wp:featuredmedia'] && // @ts-ignore
      this.work._embedded['wp:featuredmedia'][0] && // @ts-ignore
      this.work._embedded['wp:featuredmedia'][0].source_url // @ts-ignore
        ? this.work._embedded['wp:featuredmedia'][0].source_url
        : 'https://amitysensei.com/ogp.png'
    const thumb2 = // @ts-ignore
      this.work._embedded['wp:featuredmedia'] && // @ts-ignore
      this.work._embedded['wp:featuredmedia'][0] && // @ts-ignore
      this.work._embedded['wp:featuredmedia'][0].source_url // @ts-ignore
        ? this.work._embedded['wp:featuredmedia'][0].source_url + '.webp'
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
          content: 'https://amitysensei.com/works/' + this.$route.params.wid,
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
          href: 'https://amitysensei.com/works/' + this.$route.params.wid,
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
