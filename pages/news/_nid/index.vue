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
      news: {
        img: {
          img: '/imgs/page/top/work-thumb.jpg',
        },
        content: {
          rendered: '',
        },
        title: {
          rendered: '',
          text: '',
        },
        // date: '',
      },
      newsesRecent: [
        {
          text: '',
          title: {
            rendered: '',
          },
          source_url: '',
        },
      ],
    }
  },
}
</script>
