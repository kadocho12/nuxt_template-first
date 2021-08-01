<template>
  <footer class="nav nav-footer"></footer>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.nav-footer {
  background-color: var(--color-bg-default);
  border-top: 1px solid var(--color-stroke-gray);

  > .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-top: 32px;
    padding-bottom: 24px;

    @include mq(xs) {
      display: block;
      padding-top: 40px;
    }

    > .pages {
      flex: 1;
      transform: translateX(-12px);
      display: flex;
      flex-wrap: wrap;
      max-width: 440px;
      margin-right: 24px;

      @include mq(xs) {
        width: calc(100% + 24px);
        max-width: none;
        margin-right: 0;
      }

      > .page {
        width: 33.33%;
        min-width: 140px;
        padding: 8px 12px;
        line-height: 120%;
        transition: all 0.024s linear;

        @include mq(xs) {
          width: 40%;
          font-size: 16px;
        }

        @include mq(xxs) {
          width: 100%;
        }

        &:hover {
          color: var(--color-font-black-64);
        }
      }
    }

    > .sns-mail {
      transform: translateX(10px);
      margin-top: 0;

      @include mq(xs) {
        transform: translateX(-10px);
        margin-top: 24px;
      }

      > .mail {
        padding: 6px 8px;
        line-height: 1.4em;
        transition: all 0.024s linear;

        &:hover {
          color: var(--color-font-black-64);
        }
      }
    }

    > .copyright {
      width: 100%;
      margin-top: 40px;
      text-align: center;

      @include mq(xs) {
        margin-top: 32px;
      }
    }
  }
}
</style>
