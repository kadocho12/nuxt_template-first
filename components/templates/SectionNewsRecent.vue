<template>
  <section class="section section-news-recent"></section>
</template>

<script>
export default {
  props: {
    newsesRecent: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.section-news-recent {
  > .container {
    padding-top: 40px;

    > .list {
      margin-top: 16px;
    }

    > .button-link {
      max-width: 200px;
      margin: 24px auto 0;
    }
  }
}
</style>
