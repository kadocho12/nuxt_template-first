<template>
  <section class="section section-about-profile"></section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.section-about-profile {
  > .container {
    padding-bottom: 40px;

    > .prof-fig {
      position: relative;
      display: flex;

      &::before {
        content: '';
        width: 100%;
        padding-top: 51.851851851%;
      }

      > .prof-fig-img {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      }
    }

    > .prof-nm {
      margin-top: 32px;
      letter-spacing: 0;
      text-align: left;

      @include mq(sm) {
        margin-top: 24px;
        font-size: 24px;
      }

      @include mq(xs) {
        text-align: center;
      }
    }

    > .prof-position {
      margin-top: 8px;
      text-align: left;

      @include mq(sm) {
        margin-top: 4px;
      }

      @include mq(xs) {
        text-align: center;
      }
    }

    > .prof-hr {
      width: 32%;
      max-width: 240px;
      min-width: 160px;
      margin-top: 32px;
      margin-bottom: 0;
      border-color: var(--color-stroke-gray);

      @include mq(sm) {
        margin-top: 24px;
      }

      @include mq(xs) {
        margin: 24px auto 0;
      }
    }

    > .prof-bio {
      max-width: 960px;
      margin-top: 40px;
      padding-right: 40px;

      @include mq(sm) {
        margin-top: 24px;
        padding-right: 0;
      }
    }
  }
}
</style>
