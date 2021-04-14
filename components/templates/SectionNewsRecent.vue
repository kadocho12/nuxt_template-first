<template>
  <section class="section section-news-recent">
    <div class="container js-scroll">
      <h2 class="section-ttl-small">RECENT NEWS</h2>
      <ListNews :newses="newsesRecent" />
      <ButtonLink to="/news/"> ALL NEWS </ButtonLink>
    </div>
  </section>
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

    &.js-scroll {
      opacity: 0;
      transform: translate3d(0, 24px, 0);
      transition: all 2.8s cubic-bezier(0, 0.55, 0.45, 1);

      &.js-scroll-active {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }
    }
  }
}
</style>
