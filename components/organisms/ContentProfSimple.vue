<template>
  <div class="content content-prof-simple"></div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.content-prof-simple {
  > .prof-fig {
    position: relative;
    display: flex;
    justify-content: center;
    width: 160px;
    margin: auto;
    border-radius: 50%;
    overflow: hidden;

    @include mq(md) {
      width: 120px;
    }

    @include mq(sm) {
      width: 100px;
    }

    @include mq(xs) {
      width: 88px;
    }

    &::before {
      content: '';
      width: 100%;
      padding-top: 100%;
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
    margin-top: 16px;
    letter-spacing: 0;

    @include mq(sm) {
      font-size: 24px;
    }
  }

  > .prof-position {
    margin-top: 14px;

    @include mq(sm) {
      font-size: 12px;
    }
  }

  > .prof-bio {
    margin-top: 8px;

    @include mq(sm) {
      margin-top: 16px;
    }

    @include mq(xxs) {
      letter-spacing: -0.01em;
    }
  }

  > .sns-more {
    display: flex;
    flex-direction: column;

    > .list {
      order: 1;
      width: 100%;
      margin-top: 16px;
      justify-content: center;

      @include mq(md) {
        order: 2;
        margin-top: 20px;
      }
    }

    > .button-link {
      order: 2;
      width: 100%;
      max-width: 200px;
      margin: 24px auto 0;

      @include mq(md) {
        order: 1;
      }
    }
  }
}
</style>
