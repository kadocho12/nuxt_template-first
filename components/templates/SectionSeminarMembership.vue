<template>
  <section class="section section-seminar-membership">
    <div class="container">
      <h1 class="page-ttl">SEMINAR</h1>
      <div class="membership-intro">
        <div class="membership-intro-txts">
          <h2 class="membership-intro-ttl section-ttl">MEMBERSHIP</h2>
          <p class="membership-intro-txt">
            YouTubeのメンバーシップでは、月に3回以上iPadセミナー（ライブ配信）を開催しています。メインチャンネルの動画は比較的簡単な内容ですが、メンバーシップのセミナーは「アプリのコアな使い方」「他では知れない意外な裏ワザ」「アプリの組み合わせ技」など、しっかりと作り込んでいるので、実践的にiPadを使ってクリエイティブなことをしたい方におすすめです。<br />
            <br />
            また、amity_senseiのグッズ割引特典やデザインアセットの共有、iPadの役立ち情報なども投稿していくのでお見逃しなく！
          </p>
        </div>
        <figure class="membership-intro-fig">
          <picture class="membership-intro-fig-img">
            <source
              type="image/webp"
              srcset="
                /imgs/page/seminar/amitysensei-seminar-membership.jpg.webp
              "
            />
            <img
              src="/imgs/page/seminar/amitysensei-seminar-membership.jpg"
              alt="amity_senseiのメンバーシップの画像"
            />
          </picture>
        </figure>
      </div>
      <div class="membership-yt">
        <div class="container js-scroll">
          <div class="membership-yt-txts">
            <div class="membership-yt-ch">
              <figure class="membership-yt-ch-fig">
                <picture class="membership-yt-ch-fig-img">
                  <source
                    type="image/webp"
                    srcset="/imgs/amitysensei-ch-icon.jpg.webp"
                    loading="lazy"
                  />
                  <img
                    src="/imgs/amitysensei-ch-icon.jpg"
                    alt="amity_senseiのアイコン"
                    loading="lazy"
                  />
                </picture>
              </figure>
              <div class="membership-yt-ch-info">
                <p class="membership-yt-ch-nm font-500">amity_sensei</p>
                <h2 class="membership-yt-ch-ttl">
                  YouTubeメンバーシッププラン
                </h2>
              </div>
            </div>
            <ul class="membership-yt-plans">
              <li class="membership-yt-plan">
                <h3 class="membership-yt-plan-ttl">
                  <svg viewBox="0 0 24 24" class="icon">
                    <use xlink:href="#i-youtube" />
                  </svg>
                  amity_sensei Pro
                </h3>
                <ul class="membership-yt-plan-infos">
                  <li class="membership-yt-plan-info">
                    iPadセミナーライブの参加
                  </li>
                  <li class="membership-yt-plan-info">
                    過去アーカイブ ３回分視聴可能
                  </li>
                </ul>
                <hr class="membership-yt-plan-hr" />
                <p class="membership-yt-plan-pay">
                  <span class="money font-500">￥1,780</span> / 月
                </p>
              </li>
              <li class="membership-yt-plan">
                <h3 class="membership-yt-plan-ttl">
                  <svg viewBox="0 0 24 24" class="icon">
                    <use xlink:href="#i-youtube" />
                  </svg>
                  amity_sensei Pro Max
                </h3>
                <ul class="membership-yt-plan-infos">
                  <li class="membership-yt-plan-info">
                    iPadセミナーライブの参加
                  </li>
                  <li class="membership-yt-plan-info">
                    過去アーカイブ 全て視聴可能
                  </li>
                  <li class="membership-yt-plan-info">
                    amity_senseiからの宿題
                  </li>
                </ul>
                <hr class="membership-yt-plan-hr" />
                <p class="membership-yt-plan-pay">
                  <span class="money font-500">￥6,000</span> / 月
                </p>
              </li>
            </ul>
            <ButtonLinkBlank
              href="https://www.youtube.com/channel/UCcXtyjK8wagT5LWS5bBgPPQ/join"
            >
              メンバーシップ入会
            </ButtonLinkBlank>
          </div>
          <div class="membership-yt-imgs">
            <figure class="membership-yt-fig">
              <picture class="membership-yt-fig-img">
                <source
                  type="image/webp"
                  srcset="
                    /imgs/page/seminar/amitysensei-seminar-membership-1.jpg.webp
                  "
                />
                <img
                  src="/imgs/page/seminar/amitysensei-seminar-membership-1.jpg"
                  alt="amity_senseiのメンバーシップの画像１"
                  loading="lazy"
                />
              </picture>
            </figure>
            <figure class="membership-yt-fig">
              <picture class="membership-yt-fig-img">
                <source
                  type="image/webp"
                  srcset="
                    /imgs/page/seminar/amitysensei-seminar-membership-2.jpg.webp
                  "
                />
                <img
                  src="/imgs/page/seminar/amitysensei-seminar-membership-2.jpg"
                  alt="amity_senseiのメンバーシップの画像２"
                  loading="lazy"
                />
              </picture>
            </figure>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.section-seminar-membership {
  > .container {
    padding-bottom: 120px;

    @include mq(sm) {
      padding-bottom: 80px;
    }

    > .membership-intro {
      display: flex;
      justify-content: space-between;
      align-items: center;

      @include mq(sm) {
        flex-direction: column-reverse;
      }

      > .membership-intro-txts {
        width: 46%;
        max-width: 476px;
        margin-top: 0;

        @include mq(sm) {
          width: 100%;
          max-width: none;
          margin-top: 24px;
        }

        > .membership-intro-txt {
          margin-top: 16px;
        }
      }

      > .membership-intro-fig {
        position: relative;
        display: flex;
        width: 50%;

        @include mq(sm) {
          width: 100%;
        }

        &::before {
          content: '';
          width: 100%;
          padding-top: 59.86685185%;
        }

        > .membership-intro-fig-img {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
        }
      }
    }

    > .membership-yt {
      margin-top: 80px;
      padding: 32px 24px;
      background-color: var(--color-bg-gray);

      @include mq(sm) {
        margin-top: 40px;
        padding: 32px 26px 40px;
      }

      @include mq(xxs) {
        padding-right: 24px;
        padding-left: 24px;
      }

      > .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        max-width: 960px;
        margin: auto;

        @include mq(sm) {
          display: block;
        }

        > .membership-yt-txts {
          width: 58%;
          max-width: 520px;
          padding-right: 16px;

          @media screen and (max-width: 896px) {
            padding-right: 8px;
          }

          @include mq(sm) {
            width: 100%;
            max-width: 480px;
            padding-right: 0;
          }

          @include mq(xs) {
            max-width: none;
          }

          > .membership-yt-ch {
            display: flex;
            align-items: center;

            @include mq(xs) {
              justify-content: center;
            }

            @include mq(xxs) {
              display: block;
              width: 100%;
              max-width: 280px;
              margin: 0 auto;
            }

            > .membership-yt-ch-fig {
              position: relative;
              display: flex;
              width: 80px;
              border-radius: 50%;
              overflow: hidden;

              @include mq(sm) {
                width: 64px;
              }

              &::before {
                content: '';
                width: 100%;
                padding-top: 100%;
              }

              > .membership-yt-ch-fig-img {
                position: absolute;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
              }
            }

            > .membership-yt-ch-info {
              margin-top: 0;
              padding-left: 16px;

              @include mq(xxs) {
                margin-top: 12px;
                padding-left: 0;
              }

              > .membership-yt-ch-nm {
                line-height: 1.4em;
              }

              > .membership-yt-ch-ttl {
                margin-top: 4px;
                font-size: 22px;
                letter-spacing: 0;

                @include mq(sm) {
                  font-size: 18px;
                }
              }
            }
          }

          > .membership-yt-plans {
            display: flex;
            justify-content: space-between;
            margin-top: 36px;

            @include mq(sm) {
              margin-top: 32px;
            }

            @include mq(xs) {
              flex-direction: column;
              align-items: center;
            }

            @include mq(xxs) {
              margin-top: 24px;
            }

            > .membership-yt-plan {
              display: flex;
              flex-direction: column;
              width: auto;
              max-width: 48%;

              @include mq(xs) {
                width: 100%;
                max-width: 256px;
                margin-top: 16px;
              }

              &:first-child {
                @include mq(xs) {
                  margin-top: 0;
                }
              }

              > * {
                width: 100%;
              }

              > .membership-yt-plan-ttl {
                display: flex;
                align-items: center;
                font-size: 18px;

                @include mq(xs) {
                  font-size: 16px;
                }

                > .icon {
                  width: 32px;
                  min-width: 32px;
                  margin-right: 8px;
                }
              }

              > .membership-yt-plan-infos {
                flex: 1;
                margin-top: 8px;

                > .membership-yt-plan-info {
                  position: relative;
                  padding-left: 24px;
                  line-height: 1.6em;

                  &::before {
                    content: '';
                    position: absolute;
                    bottom: 50%;
                    left: 8px;
                    transform: translateY(50%);
                    display: block;
                    width: 6px;
                    height: 1px;
                    background-color: var(--color-stroke-default);
                  }
                }
              }

              > .membership-yt-plan-hr {
                margin-top: 12px;
                margin-bottom: 0;
                border-color: var(--color-stroke-gray);
              }

              > .membership-yt-plan-pay {
                margin-top: 8px;

                > .money {
                  font-size: 24px;
                  line-height: 1.2em;
                }
              }
            }
          }

          > .button {
            max-width: 240px;
            margin-top: 44px;

            @include mq(xs) {
              margin-right: auto;
              margin-left: auto;
            }
          }
        }

        > .membership-yt-imgs {
          display: block;
          width: 40%;
          max-width: 360px;

          @include mq(sm) {
            display: flex;
            width: 100%;
            max-width: none;
            margin-top: 48px;
          }

          @include mq(xs) {
            display: block;
          }

          > .membership-yt-fig {
            position: relative;
            display: flex;
            width: 100%;

            @include mq(sm) {
              width: 50%;
            }

            @include mq(xs) {
              width: 100%;
            }

            &::before {
              content: '';
              width: 100%;
              padding-top: 56.25%;
            }

            > .membership-yt-fig-img {
              position: absolute;
              top: 0;
              right: 0;
              bottom: 0;
              left: 0;
            }
          }
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
  }
}
</style>
