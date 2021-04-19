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
          rendered:
            'amity_senseiの初の書籍。iPadとApple Pencilがあれば、日常がもっと鮮やかに、豊かになる」をテーマに、普通のiPad本には載ってないようなiPadチュートリアルや裏技を全190ページにわたり紹介。(約50以上のチュートリアル集)   発売前から予約が殺到し、発売初日に重版が決定。3度の重版を繰り返し現在好評発売中。',
        },
        title: {
          rendered: 'Note更新。GoodNotes5をもっと使いこなす裏ワザ公開!!」',
          text: '',
        },
        date: '2020.12.31',
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
