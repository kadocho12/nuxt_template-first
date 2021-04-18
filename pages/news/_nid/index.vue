<template>
  <article class="page page-news-nid">
    <SectionNewsDetail :news="news" />

    <SectionNewsRecent :newses-recent="newsesRecent" />
  </article>
</template>

<script>
export default {
  data() {
    return {
      // news: {
      //   img: {
      //     img: '/imgs/page/news/_newsId/work-thumb.jpg',
      //   },
      //   content: {
      //     rendered: '',
      //   },
      //   title: {
      //     rendered: '',
      //     text: '',
      //   },
      //   // date: '',
      // },
      newsesRecent: {
        // content: {
        //   rendered: '',
        // },
        // title: {
        //   rendered: '',
        // },
      },
    }
  },
}
</script>
