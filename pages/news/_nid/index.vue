<template>
  <article class="page page-news-nid">
    nid
    <SectionNewsDetail :news="news" />

    <SectionNewsRecent :newses-recent="newsesRecent" />
  </article>
</template>

<script>
export default {
  data() {
    return {
      news: {
        content: {
          rendered: '',
        },
        title: {
          rendered: '',
        },
        date: '',
      },
      newsesRecent: [],
    }
  },
}
</script>
