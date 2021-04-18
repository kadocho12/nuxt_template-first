<template>
  <article class="page page-index">
    <SectionTopKv id="kv" />

    <div class="sections js-position">
      <SectionTopAboutNews :newses="newses" />

      <SectionTopWorks :works="works" />

      <!-- <SectionTopSeminar :udemy="udemy" /> -->

      <SectionTopChannels />

      <SectionTopSns />
    </div>
  </article>
</template>

<script>
export default {
  data() {
    return {
      newses: [
        {
          text: '',
          title: {
            rendered: '',
          },
          source_url: '/imgs/page/top/work-thumb.jpg',
        },
      ],
      // udemy: [],
      works: [
        // Book
        {
          id: 135,
          date: '2021-02-27T15:13:00',
          date_gmt: '2021-02-27T06:13:00',
          guid: {
            rendered: 'http://amitysensei.com/wp/?post_type=works&#038;p=135',
          },
          modified: '2021-03-18T08:20:00',
          modified_gmt: '2021-03-17T23:20:00',
          slug: 'ipadcreative',
          status: 'publish',
          type: 'works',
          link: 'https://amitysensei.com/wp/works/ipadcreative/',
          title: { rendered: '書籍 iPadクリエイティブ' },
          content: {
            rendered:
              '\n<p>amity_senseiの初の書籍。iPadとApple Pencilがあれば、日常がもっと鮮やかに、豊かになる」をテーマに、普通のiPad本には載ってないようなiPadチュートリアルや裏技を全190ページにわたり紹介しました。(約50以上のチュートリアル集) 発売前から予約が殺到し、発売初日に重版が決定。6度の重版を繰り返し現在も好評発売中です。</p>\n\n\n\n<figure class="wp-block-image size-large"><img width="984" height="1024" src="http://amitysensei.com/wp/wp-content/uploads/2021/02/img-984x1024.jpg" alt="" class="wp-image-13" srcset="https://amitysensei.com/wp/wp-content/uploads/2021/02/img-984x1024.jpg 984w, https://amitysensei.com/wp/wp-content/uploads/2021/02/img-288x300.jpg 288w, https://amitysensei.com/wp/wp-content/uploads/2021/02/img-768x799.jpg 768w, https://amitysensei.com/wp/wp-content/uploads/2021/02/img.jpg 1080w" sizes="(max-width: 984px) 100vw, 984px" /></figure>\n\n\n\n<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">\n<iframe title="祝！amity_sensei が本になりました。「iPadクリエイティブ」中身ちょっと公開！" width="580" height="326" src="https://www.youtube.com/embed/WwSTBwVMbO0?feature=oembed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\n</div></figure>\n\n\n\n<h2>CREDIT</h2>\n\n\n\n<p>著者 amity_sensei<br>発行者 青柳 昌行<br>発行 株式会社KADOKAWA<br>〒102-8177 東京都千代田区富士見 2 -13- 3<br>電話0570-002-301(ナビダイヤル) 印刷所 凸版印刷株式会社</p>\n\n\n\n<p>Staff<br>ブックデザイン 横山 曜(細山田デザイン事務所)<br>DTP アイ・ハブ<br>校正 鷗来堂<br>執筆協力 ASAKA いとくに</p>\n\n\n\n<p>▼KADOKAWA<br><a rel="noreferrer noopener" href="https://www.kadokawa.co.jp" target="_blank">https://www.kadokawa.co.jp</a></p>\n',
            protected: false,
          },
          excerpt: {
            rendered:
              '<p>amity_senseiの初の書籍。iPadとApple Pencilがあれば、日常がもっと鮮やかに、豊かになる」をテーマに、普通のiPad本には載ってないようなiPadチュートリアルや裏技を全190ページにわたり紹介し [&hellip;]</p>\n',
            protected: false,
          },
          featured_media: 375,
          template: '',
          acf: { client: '初の書籍 iPadクリエイティブ発売‼︎｜KADOKAWA' },
          _links: {
            self: [
              { href: 'https://amitysensei.com/wp/wp-json/wp/v2/works/135' },
            ],
            collection: [
              { href: 'https://amitysensei.com/wp/wp-json/wp/v2/works' },
            ],
            about: [
              { href: 'https://amitysensei.com/wp/wp-json/wp/v2/types/works' },
            ],
            'wp:featuredmedia': [
              {
                embeddable: true,
                href: 'https://amitysensei.com/wp/wp-json/wp/v2/media/375',
              },
            ],
            'wp:attachment': [
              {
                href:
                  'https://amitysensei.com/wp/wp-json/wp/v2/media?parent=135',
              },
            ],
            curies: [
              { name: 'wp', href: 'https://api.w.org/{rel}', templated: true },
            ],
          },
          _embedded: {
            'wp:featuredmedia': [
              {
                id: 375,
                date: '2021-02-28T16:23:13',
                slug:
                  'ipad%e3%82%af%e3%83%aa%e3%82%a8%e3%82%a4%e3%83%86%e3%82%a3%e3%83%96-photo-1',
                type: 'attachment',
                link:
                  'https://amitysensei.com/wp/works/ipadcreative/attachment/ipad%e3%82%af%e3%83%aa%e3%82%a8%e3%82%a4%e3%83%86%e3%82%a3%e3%83%96-photo-1/',
                title: { rendered: 'ipadクリエイティブ photo 1' },
                author: 1,
                acf: [],
                caption: { rendered: '' },
                alt_text: '',
                media_type: 'image',
                mime_type: 'image/jpeg',
                media_details: {
                  width: 2560,
                  height: 1533,
                  file: '2021/02/ipadクリエイティブ-photo-1-scaled.jpeg',
                  sizes: {
                    medium: {
                      file: 'ipadクリエイティブ-photo-1-300x180.jpeg',
                      width: 300,
                      height: 180,
                      mime_type: 'image/jpeg',
                      source_url:
                        'https://amitysensei.com/wp/wp-content/uploads/2021/02/ipadクリエイティブ-photo-1-300x180.jpeg',
                    },
                    large: {
                      file: 'ipadクリエイティブ-photo-1-1024x613.jpeg',
                      width: 1024,
                      height: 613,
                      mime_type: 'image/jpeg',
                      source_url:
                        'https://amitysensei.com/wp/wp-content/uploads/2021/02/ipadクリエイティブ-photo-1-1024x613.jpeg',
                    },
                    thumbnail: {
                      file: 'ipadクリエイティブ-photo-1-150x150.jpeg',
                      width: 150,
                      height: 150,
                      mime_type: 'image/jpeg',
                      source_url:
                        'https://amitysensei.com/wp/wp-content/uploads/2021/02/ipadクリエイティブ-photo-1-150x150.jpeg',
                    },
                    medium_large: {
                      file: 'ipadクリエイティブ-photo-1-768x460.jpeg',
                      width: 768,
                      height: 460,
                      mime_type: 'image/jpeg',
                      source_url:
                        'https://amitysensei.com/wp/wp-content/uploads/2021/02/ipadクリエイティブ-photo-1-768x460.jpeg',
                    },
                    '1536x1536': {
                      file: 'ipadクリエイティブ-photo-1-1536x920.jpeg',
                      width: 1536,
                      height: 920,
                      mime_type: 'image/jpeg',
                      source_url:
                        'https://amitysensei.com/wp/wp-content/uploads/2021/02/ipadクリエイティブ-photo-1-1536x920.jpeg',
                    },
                    '2048x2048': {
                      file: 'ipadクリエイティブ-photo-1-2048x1226.jpeg',
                      width: 2048,
                      height: 1226,
                      mime_type: 'image/jpeg',
                      source_url:
                        'https://amitysensei.com/wp/wp-content/uploads/2021/02/ipadクリエイティブ-photo-1-2048x1226.jpeg',
                    },
                    'post-thumbnail': {
                      file: 'ipadクリエイティブ-photo-1-1200x719.jpeg',
                      width: 1200,
                      height: 719,
                      mime_type: 'image/jpeg',
                      source_url:
                        'https://amitysensei.com/wp/wp-content/uploads/2021/02/ipadクリエイティブ-photo-1-1200x719.jpeg',
                    },
                    full: {
                      file: 'ipadクリエイティブ-photo-1-scaled.jpeg',
                      width: 2560,
                      height: 1533,
                      mime_type: 'image/jpeg',
                      source_url:
                        'https://amitysensei.com/wp/wp-content/uploads/2021/02/ipadクリエイティブ-photo-1-scaled.jpeg',
                    },
                  },
                  image_meta: {
                    aperture: '0',
                    credit: '',
                    camera: '',
                    caption: '',
                    created_timestamp: '1606846870',
                    copyright: '',
                    focal_length: '0',
                    iso: '0',
                    shutter_speed: '0',
                    title: '',
                    orientation: '0',
                    keywords: [],
                  },
                  original_image: 'ipadクリエイティブ-photo-1.jpeg',
                },
                source_url:
                  'https://amitysensei.com/wp/wp-content/uploads/2021/02/ipadクリエイティブ-photo-1-scaled.jpeg',
                _links: {
                  self: [
                    {
                      href:
                        'https://amitysensei.com/wp/wp-json/wp/v2/media/375',
                    },
                  ],
                  collection: [
                    { href: 'https://amitysensei.com/wp/wp-json/wp/v2/media' },
                  ],
                  about: [
                    {
                      href:
                        'https://amitysensei.com/wp/wp-json/wp/v2/types/attachment',
                    },
                  ],
                  author: [
                    {
                      embeddable: true,
                      href: 'https://amitysensei.com/wp/wp-json/wp/v2/users/1',
                    },
                  ],
                  replies: [
                    {
                      embeddable: true,
                      href:
                        'https://amitysensei.com/wp/wp-json/wp/v2/comments?post=375',
                    },
                  ],
                },
              },
            ],
          },
        },
        // Today at Apple
        {
          id: 431,
          date: '2021-03-13T10:58:00',
          date_gmt: '2021-03-13T01:58:00',
          guid: {
            rendered: 'http://amitysensei.com/wp/?post_type=works&#038;p=431',
          },
          modified: '2021-03-17T15:56:56',
          modified_gmt: '2021-03-17T06:56:56',
          slug: 'today-at-apple-marunouchi',
          status: 'publish',
          type: 'works',
          link: 'https://amitysensei.com/wp/works/today-at-apple-marunouchi/',
          title: { rendered: 'Today at Apple 丸の内店' },
          content: {
            rendered:
              '\n<p>Apple公式「Today at Apple」イベントに登壇しました。「キャンバスライフのためのスキル：クリエイターコネクション amity_senseiに学ぶ洗練された資料作り」をテーマに、Apple純正アプリKeynoteを使った資料作りのコツやデザインtipsを紹介。学生を対象としたiPad活用術を披露しました。<br><br>amity_senseiの学生時代や裏話などを含めた90分のiPadオンラインセッション、1000人を超える参加者を集め、過去最高の参加数を記録しました。<br>Today at Appleで紹介したチュートリアルはYouTubeにて公開予定です。</p>\n\n\n\n<figure class="wp-block-image size-large"><img width="1024" height="832" src="http://amitysensei.com/wp/wp-content/uploads/2021/03/Web-1920-–-2-1024x832.jpg" alt="" class="wp-image-465" srcset="https://amitysensei.com/wp/wp-content/uploads/2021/03/Web-1920-–-2-1024x832.jpg 1024w, https://amitysensei.com/wp/wp-content/uploads/2021/03/Web-1920-–-2-300x244.jpg 300w, https://amitysensei.com/wp/wp-content/uploads/2021/03/Web-1920-–-2-768x624.jpg 768w, https://amitysensei.com/wp/wp-content/uploads/2021/03/Web-1920-–-2-1200x975.jpg 1200w, https://amitysensei.com/wp/wp-content/uploads/2021/03/Web-1920-–-2.jpg 1329w" sizes="(max-width: 1024px) 100vw, 1024px" /></figure>\n\n\n\n<div class="wp-block-image"><figure class="aligncenter size-large"><img width="726" height="1024" src="http://amitysensei.com/wp/wp-content/uploads/2021/03/2021-03-17-10.40のイメージ-726x1024.png" alt="" class="wp-image-467" srcset="https://amitysensei.com/wp/wp-content/uploads/2021/03/2021-03-17-10.40のイメージ-726x1024.png 726w, https://amitysensei.com/wp/wp-content/uploads/2021/03/2021-03-17-10.40のイメージ-213x300.png 213w, https://amitysensei.com/wp/wp-content/uploads/2021/03/2021-03-17-10.40のイメージ-768x1083.png 768w, https://amitysensei.com/wp/wp-content/uploads/2021/03/2021-03-17-10.40のイメージ-1090x1536.png 1090w, https://amitysensei.com/wp/wp-content/uploads/2021/03/2021-03-17-10.40のイメージ-1200x1692.png 1200w, https://amitysensei.com/wp/wp-content/uploads/2021/03/2021-03-17-10.40のイメージ.png 1362w" sizes="(max-width: 726px) 100vw, 726px" /></figure></div>\n\n\n\n<p></p>\n\n\n\n<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">\n<iframe title="【ご報告】Today at Appleに出演します！念願のApple公式 iPadセミナーで、初めて私のアレを公開します！" width="580" height="326" src="https://www.youtube.com/embed/yQh4gC51P8g?feature=oembed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\n</div></figure>\n',
            protected: false,
          },
          excerpt: {
            rendered:
              '<p>Apple公式「Today at Apple」イベントに登壇しました。「キャンバスライフのためのスキル：クリエイターコネクション amity_senseiに学ぶ洗練された資料作り」をテーマに、Apple純正アプリKeyn [&hellip;]</p>\n',
            protected: false,
          },
          featured_media: 464,
          template: '',
          acf: {
            client:
              'Today at Apple登壇。キャンバスライフのためのスキル iPadセミナー | Apple',
          },
          _links: {
            self: [
              { href: 'https://amitysensei.com/wp/wp-json/wp/v2/works/431' },
            ],
            collection: [
              { href: 'https://amitysensei.com/wp/wp-json/wp/v2/works' },
            ],
            about: [
              { href: 'https://amitysensei.com/wp/wp-json/wp/v2/types/works' },
            ],
            'wp:featuredmedia': [
              {
                embeddable: true,
                href: 'https://amitysensei.com/wp/wp-json/wp/v2/media/464',
              },
            ],
            'wp:attachment': [
              {
                href:
                  'https://amitysensei.com/wp/wp-json/wp/v2/media?parent=431',
              },
            ],
            curies: [
              { name: 'wp', href: 'https://api.w.org/{rel}', templated: true },
            ],
          },
          _embedded: {
            'wp:featuredmedia': [
              {
                id: 464,
                date: '2021-03-17T14:19:10',
                slug: '20210313_creatorconnects_amitysensei_post_s_virtual',
                type: 'attachment',
                link:
                  'https://amitysensei.com/wp/works/today-at-apple-marunouchi/attachment/20210313_creatorconnects_amitysensei_post_s_virtual/',
                title: { rendered: 'todayatapple main' },
                author: 1,
                acf: [],
                caption: { rendered: '' },
                alt_text: '',
                media_type: 'image',
                mime_type: 'image/jpeg',
                media_details: {
                  width: 1920,
                  height: 1920,
                  file:
                    '2021/03/20210313_CreatorConnects_AmitySensei_Post_S_Virtual.jpg',
                  sizes: {
                    medium: {
                      file:
                        '20210313_CreatorConnects_AmitySensei_Post_S_Virtual-300x300.jpg',
                      width: 300,
                      height: 300,
                      mime_type: 'image/jpeg',
                      source_url:
                        'https://amitysensei.com/wp/wp-content/uploads/2021/03/20210313_CreatorConnects_AmitySensei_Post_S_Virtual-300x300.jpg',
                    },
                    large: {
                      file:
                        '20210313_CreatorConnects_AmitySensei_Post_S_Virtual-1024x1024.jpg',
                      width: 1024,
                      height: 1024,
                      mime_type: 'image/jpeg',
                      source_url:
                        'https://amitysensei.com/wp/wp-content/uploads/2021/03/20210313_CreatorConnects_AmitySensei_Post_S_Virtual-1024x1024.jpg',
                    },
                    thumbnail: {
                      file:
                        '20210313_CreatorConnects_AmitySensei_Post_S_Virtual-150x150.jpg',
                      width: 150,
                      height: 150,
                      mime_type: 'image/jpeg',
                      source_url:
                        'https://amitysensei.com/wp/wp-content/uploads/2021/03/20210313_CreatorConnects_AmitySensei_Post_S_Virtual-150x150.jpg',
                    },
                    medium_large: {
                      file:
                        '20210313_CreatorConnects_AmitySensei_Post_S_Virtual-768x768.jpg',
                      width: 768,
                      height: 768,
                      mime_type: 'image/jpeg',
                      source_url:
                        'https://amitysensei.com/wp/wp-content/uploads/2021/03/20210313_CreatorConnects_AmitySensei_Post_S_Virtual-768x768.jpg',
                    },
                    '1536x1536': {
                      file:
                        '20210313_CreatorConnects_AmitySensei_Post_S_Virtual-1536x1536.jpg',
                      width: 1536,
                      height: 1536,
                      mime_type: 'image/jpeg',
                      source_url:
                        'https://amitysensei.com/wp/wp-content/uploads/2021/03/20210313_CreatorConnects_AmitySensei_Post_S_Virtual-1536x1536.jpg',
                    },
                    'post-thumbnail': {
                      file:
                        '20210313_CreatorConnects_AmitySensei_Post_S_Virtual-1200x1200.jpg',
                      width: 1200,
                      height: 1200,
                      mime_type: 'image/jpeg',
                      source_url:
                        'https://amitysensei.com/wp/wp-content/uploads/2021/03/20210313_CreatorConnects_AmitySensei_Post_S_Virtual-1200x1200.jpg',
                    },
                    full: {
                      file:
                        '20210313_CreatorConnects_AmitySensei_Post_S_Virtual.jpg',
                      width: 1920,
                      height: 1920,
                      mime_type: 'image/jpeg',
                      source_url:
                        'https://amitysensei.com/wp/wp-content/uploads/2021/03/20210313_CreatorConnects_AmitySensei_Post_S_Virtual.jpg',
                    },
                  },
                  image_meta: {
                    aperture: '0',
                    credit: '',
                    camera: '',
                    caption: '',
                    created_timestamp: '0',
                    copyright: '',
                    focal_length: '0',
                    iso: '0',
                    shutter_speed: '0',
                    title: '',
                    orientation: '0',
                    keywords: [],
                  },
                },
                source_url:
                  'https://amitysensei.com/wp/wp-content/uploads/2021/03/20210313_CreatorConnects_AmitySensei_Post_S_Virtual.jpg',
                _links: {
                  self: [
                    {
                      href:
                        'https://amitysensei.com/wp/wp-json/wp/v2/media/464',
                    },
                  ],
                  collection: [
                    { href: 'https://amitysensei.com/wp/wp-json/wp/v2/media' },
                  ],
                  about: [
                    {
                      href:
                        'https://amitysensei.com/wp/wp-json/wp/v2/types/attachment',
                    },
                  ],
                  author: [
                    {
                      embeddable: true,
                      href: 'https://amitysensei.com/wp/wp-json/wp/v2/users/1',
                    },
                  ],
                  replies: [
                    {
                      embeddable: true,
                      href:
                        'https://amitysensei.com/wp/wp-json/wp/v2/comments?post=464',
                    },
                  ],
                },
              },
            ],
          },
        },
        // kumamoto
        {
          id: 132,
          date: '2020-11-08T15:10:00',
          date_gmt: '2020-11-08T06:10:00',
          guid: {
            rendered: 'http://amitysensei.com/wp/?post_type=works&#038;p=132',
          },
          modified: '2021-03-18T08:45:32',
          modified_gmt: '2021-03-17T23:45:32',
          slug: 'kumamotoeducationweek',
          status: 'publish',
          type: 'works',
          link: 'https://amitysensei.com/wp/works/kumamotoeducationweek/',
          title: { rendered: 'Kumamoto Education Week 2020' },
          content: {
            rendered:
              '\n<p>1人1台iPadが支給されている熊本市の学生と教職員に向けて「 iPadでつくるクリエイティブな世界」というテーマでiPadをもっと使いこなしてもらうためのセミナーを開催しました。</p>\n\n\n\n<p>内容は、無料のイラストアプリ Tayasui Sketchを使った「誰でも作れるクリスマスカードの作り方」です。アプリの使いこなし術や絵が上手く描けない人がどのようにすれば描けるのかなども伝授しながら、一緒にクリエイティブな世界を楽しみました。<br><br>▼Kumamoto Education Week 2020<br><a rel="noreferrer noopener" href="https://kumamoto-ew.jp/" target="_blank">https://kumamoto-ew.jp/</a></p>\n\n\n\n<figure class="wp-block-image size-large"><a href="https://kumamoto-ew.jp/" target="_blank" rel="noopener"><img width="1024" height="683" src="http://amitysensei.com/wp/wp-content/uploads/2020/11/img_main-1024x683.jpg" alt="" class="wp-image-481" srcset="https://amitysensei.com/wp/wp-content/uploads/2020/11/img_main-1024x683.jpg 1024w, https://amitysensei.com/wp/wp-content/uploads/2020/11/img_main-300x200.jpg 300w, https://amitysensei.com/wp/wp-content/uploads/2020/11/img_main-768x512.jpg 768w, https://amitysensei.com/wp/wp-content/uploads/2020/11/img_main.jpg 1200w" sizes="(max-width: 1024px) 100vw, 1024px" /></a></figure>\n\n\n\n<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">\n<iframe title="【超！初心者向け】ぜんぶ無料でできるクリスマスカード作り！Tayasui Sketch" width="580" height="326" src="https://www.youtube.com/embed/M0Y7Cybpopk?feature=oembed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\n</div></figure>\n',
            protected: false,
          },
          excerpt: {
            rendered:
              '<p>1人1台iPadが支給されている熊本市の学生と教職員に向けて「 iPadでつくるクリエイティブな世界」というテーマでiPadをもっと使いこなしてもらうためのセミナーを開催しました。 内容は、無料のイラストアプリ Taya [&hellip;]</p>\n',
            protected: false,
          },
          featured_media: 482,
          template: '',
          acf: { client: 'iPadセミナーゲスト登壇｜熊本市教育センター' },
          _links: {
            self: [
              { href: 'https://amitysensei.com/wp/wp-json/wp/v2/works/132' },
            ],
            collection: [
              { href: 'https://amitysensei.com/wp/wp-json/wp/v2/works' },
            ],
            about: [
              { href: 'https://amitysensei.com/wp/wp-json/wp/v2/types/works' },
            ],
            'wp:featuredmedia': [
              {
                embeddable: true,
                href: 'https://amitysensei.com/wp/wp-json/wp/v2/media/482',
              },
            ],
            'wp:attachment': [
              {
                href:
                  'https://amitysensei.com/wp/wp-json/wp/v2/media?parent=132',
              },
            ],
            curies: [
              { name: 'wp', href: 'https://api.w.org/{rel}', templated: true },
            ],
          },
          _embedded: {
            'wp:featuredmedia': [
              {
                id: 482,
                date: '2021-03-18T08:45:20',
                slug: 'kumamoto-2',
                type: 'attachment',
                link:
                  'https://amitysensei.com/wp/works/kumamotoeducationweek/attachment/kumamoto-2/',
                title: { rendered: 'kumamoto' },
                author: 1,
                acf: [],
                caption: { rendered: '' },
                alt_text: '',
                media_type: 'image',
                mime_type: 'image/jpeg',
                media_details: {
                  width: 1536,
                  height: 1920,
                  file: '2020/11/kumamoto-1.jpeg',
                  sizes: {
                    medium: {
                      file: 'kumamoto-1-240x300.jpeg',
                      width: 240,
                      height: 300,
                      mime_type: 'image/jpeg',
                      source_url:
                        'https://amitysensei.com/wp/wp-content/uploads/2020/11/kumamoto-1-240x300.jpeg',
                    },
                    large: {
                      file: 'kumamoto-1-819x1024.jpeg',
                      width: 819,
                      height: 1024,
                      mime_type: 'image/jpeg',
                      source_url:
                        'https://amitysensei.com/wp/wp-content/uploads/2020/11/kumamoto-1-819x1024.jpeg',
                    },
                    thumbnail: {
                      file: 'kumamoto-1-150x150.jpeg',
                      width: 150,
                      height: 150,
                      mime_type: 'image/jpeg',
                      source_url:
                        'https://amitysensei.com/wp/wp-content/uploads/2020/11/kumamoto-1-150x150.jpeg',
                    },
                    medium_large: {
                      file: 'kumamoto-1-768x960.jpeg',
                      width: 768,
                      height: 960,
                      mime_type: 'image/jpeg',
                      source_url:
                        'https://amitysensei.com/wp/wp-content/uploads/2020/11/kumamoto-1-768x960.jpeg',
                    },
                    '1536x1536': {
                      file: 'kumamoto-1-1229x1536.jpeg',
                      width: 1229,
                      height: 1536,
                      mime_type: 'image/jpeg',
                      source_url:
                        'https://amitysensei.com/wp/wp-content/uploads/2020/11/kumamoto-1-1229x1536.jpeg',
                    },
                    'post-thumbnail': {
                      file: 'kumamoto-1-1200x1500.jpeg',
                      width: 1200,
                      height: 1500,
                      mime_type: 'image/jpeg',
                      source_url:
                        'https://amitysensei.com/wp/wp-content/uploads/2020/11/kumamoto-1-1200x1500.jpeg',
                    },
                    full: {
                      file: 'kumamoto-1.jpeg',
                      width: 1536,
                      height: 1920,
                      mime_type: 'image/jpeg',
                      source_url:
                        'https://amitysensei.com/wp/wp-content/uploads/2020/11/kumamoto-1.jpeg',
                    },
                  },
                  image_meta: {
                    aperture: '0',
                    credit: '',
                    camera: '',
                    caption: '',
                    created_timestamp: '0',
                    copyright: '',
                    focal_length: '0',
                    iso: '0',
                    shutter_speed: '0',
                    title: '',
                    orientation: '0',
                    keywords: [],
                  },
                },
                source_url:
                  'https://amitysensei.com/wp/wp-content/uploads/2020/11/kumamoto-1.jpeg',
                _links: {
                  self: [
                    {
                      href:
                        'https://amitysensei.com/wp/wp-json/wp/v2/media/482',
                    },
                  ],
                  collection: [
                    { href: 'https://amitysensei.com/wp/wp-json/wp/v2/media' },
                  ],
                  about: [
                    {
                      href:
                        'https://amitysensei.com/wp/wp-json/wp/v2/types/attachment',
                    },
                  ],
                  author: [
                    {
                      embeddable: true,
                      href: 'https://amitysensei.com/wp/wp-json/wp/v2/users/1',
                    },
                  ],
                  replies: [
                    {
                      embeddable: true,
                      href:
                        'https://amitysensei.com/wp/wp-json/wp/v2/comments?post=482',
                    },
                  ],
                },
              },
            ],
          },
        },
        // Adobe Max 2020
        {
          id: 134,
          date: '2020-10-21T15:12:00',
          date_gmt: '2020-10-21T06:12:00',
          guid: {
            rendered: 'http://amitysensei.com/wp/?post_type=works&#038;p=134',
          },
          modified: '2021-03-18T08:46:46',
          modified_gmt: '2021-03-17T23:46:46',
          slug: 'adobemax2020',
          status: 'publish',
          type: 'works',
          link: 'https://amitysensei.com/wp/works/adobemax2020/',
          title: { rendered: 'Adobe MAX 2020' },
          content: {
            rendered:
              '\n<p>Adobeが年に一度開催するクリエイティブカンファレンスAdobe MAX。2020年は世界同時開催で世界中のOptionクリエイターがオンラインでセッションを繰り広げました。</p>\n\n\n\n<p>amity_senseiはその年に公開されたIllustrator iPad版のセッションを担当。セッションでは、Illustrator iPad版の神機能の解説と年賀状やUIデザイン、パターンデザインをiPadだけで作る方法を紹介しました。数あるセッションの中でも視聴回数が多く、大変好評でした。</p>\n\n\n\n<p>▼アーカイブ動画はこちら<br><a href="https://www.adobe.com/jp/max/2020/sessions/designing-with-illustrator-on-the-ipad-s9000.html" target="_blank" rel="noreferrer noopener">https://www.adobe.com/jp/max/2020/sessions/designing-with-illustrator-on-the-ipad-s9000.html<br></a><br>▼Adobe MAX 2020 イベントアジェンダ<br><a rel="noreferrer noopener" href="https://maxjapan.adobe.com/" target="_blank">https://maxjapan.adobe.com/</a><br><br>▼Adobe MAX 2020 セッションカタログ<br><a rel="noreferrer noopener" href="https://portal.adobe.com/widget/adobe/am20/AdobeMax20Catalog/session/15955162847410011TVt" target="_blank">https://portal.adobe.com/widget/adobe/am20/AdobeMax20Catalog/session/15955162847410011TVt</a></p>\n',
            protected: false,
          },
          excerpt: {
            rendered:
              '<p>Adobeが年に一度開催するクリエイティブカンファレンスAdobe MAX。2020年は世界同時開催で世界中のOptionクリエイターがオンラインでセッションを繰り広げました。 amity_senseiはその年に公開され [&hellip;]</p>\n',
            protected: false,
          },
          featured_media: 387,
          template: '',
          acf: { client: 'Illustrator iPad版セッション登壇｜Adobe' },
          _links: {
            self: [
              { href: 'https://amitysensei.com/wp/wp-json/wp/v2/works/134' },
            ],
            collection: [
              { href: 'https://amitysensei.com/wp/wp-json/wp/v2/works' },
            ],
            about: [
              { href: 'https://amitysensei.com/wp/wp-json/wp/v2/types/works' },
            ],
            'wp:featuredmedia': [
              {
                embeddable: true,
                href: 'https://amitysensei.com/wp/wp-json/wp/v2/media/387',
              },
            ],
            'wp:attachment': [
              {
                href:
                  'https://amitysensei.com/wp/wp-json/wp/v2/media?parent=134',
              },
            ],
            curies: [
              { name: 'wp', href: 'https://api.w.org/{rel}', templated: true },
            ],
          },
          _embedded: {
            'wp:featuredmedia': [
              {
                id: 387,
                date: '2021-03-08T09:15:59',
                slug: 'adobemax2020',
                type: 'attachment',
                link:
                  'https://amitysensei.com/wp/works/adobemax2020/attachment/adobemax2020/',
                title: { rendered: 'adobemax2020' },
                author: 1,
                acf: [],
                caption: { rendered: '' },
                alt_text: '',
                media_type: 'image',
                mime_type: 'image/jpeg',
                media_details: {
                  width: 1197,
                  height: 673,
                  file: '2020/10/adobemax2020.jpg',
                  sizes: {
                    medium: {
                      file: 'adobemax2020-300x169.jpg',
                      width: 300,
                      height: 169,
                      mime_type: 'image/jpeg',
                      source_url:
                        'https://amitysensei.com/wp/wp-content/uploads/2020/10/adobemax2020-300x169.jpg',
                    },
                    large: {
                      file: 'adobemax2020-1024x576.jpg',
                      width: 1024,
                      height: 576,
                      mime_type: 'image/jpeg',
                      source_url:
                        'https://amitysensei.com/wp/wp-content/uploads/2020/10/adobemax2020-1024x576.jpg',
                    },
                    thumbnail: {
                      file: 'adobemax2020-150x150.jpg',
                      width: 150,
                      height: 150,
                      mime_type: 'image/jpeg',
                      source_url:
                        'https://amitysensei.com/wp/wp-content/uploads/2020/10/adobemax2020-150x150.jpg',
                    },
                    medium_large: {
                      file: 'adobemax2020-768x432.jpg',
                      width: 768,
                      height: 432,
                      mime_type: 'image/jpeg',
                      source_url:
                        'https://amitysensei.com/wp/wp-content/uploads/2020/10/adobemax2020-768x432.jpg',
                    },
                    full: {
                      file: 'adobemax2020.jpg',
                      width: 1197,
                      height: 673,
                      mime_type: 'image/jpeg',
                      source_url:
                        'https://amitysensei.com/wp/wp-content/uploads/2020/10/adobemax2020.jpg',
                    },
                  },
                  image_meta: {
                    aperture: '0',
                    credit: '',
                    camera: '',
                    caption: '',
                    created_timestamp: '0',
                    copyright: '',
                    focal_length: '0',
                    iso: '0',
                    shutter_speed: '0',
                    title: '',
                    orientation: '0',
                    keywords: [],
                  },
                },
                source_url:
                  'https://amitysensei.com/wp/wp-content/uploads/2020/10/adobemax2020.jpg',
                _links: {
                  self: [
                    {
                      href:
                        'https://amitysensei.com/wp/wp-json/wp/v2/media/387',
                    },
                  ],
                  collection: [
                    { href: 'https://amitysensei.com/wp/wp-json/wp/v2/media' },
                  ],
                  about: [
                    {
                      href:
                        'https://amitysensei.com/wp/wp-json/wp/v2/types/attachment',
                    },
                  ],
                  author: [
                    {
                      embeddable: true,
                      href: 'https://amitysensei.com/wp/wp-json/wp/v2/users/1',
                    },
                  ],
                  replies: [
                    {
                      embeddable: true,
                      href:
                        'https://amitysensei.com/wp/wp-json/wp/v2/comments?post=387',
                    },
                  ],
                },
              },
            ],
          },
        },
        // Adobe tutorial
        {
          id: 133,
          date: '2020-10-20T15:11:00',
          date_gmt: '2020-10-20T06:11:00',
          guid: {
            rendered: 'http://amitysensei.com/wp/?post_type=works&#038;p=133',
          },
          modified: '2021-03-18T09:51:12',
          modified_gmt: '2021-03-18T00:51:12',
          slug: 'illustrator-ipad',
          status: 'publish',
          type: 'works',
          link: 'https://amitysensei.com/wp/works/illustrator-ipad/',
          title: { rendered: 'Illustrator iPad版 公開' },
          content: {
            rendered:
              '\n<p>2020年10月、待望のIllustrator iPad版が公開。アプリのリリースにあたりAdobe公式チュートリアルを担当することになり、基本操作から応用操作までを解説したチュートリアルを作成しました。チュートリアルでは、チラシやバナーのデザイン、複雑なロゴやパターンなどの作り方をわかりやすく解説。<br><br>▼Adobe公式ページ<br><a rel="noreferrer noopener" href="https://helpx.adobe.com/jp/illustrator/how-to/jp-ipad-beginners-guide.html?playlist=/services/playlist.helpx/products:SG_ILLUSTRATOR_1_1/learn-path:key-techniques/playlist:topic/set-header:mobile-apps/ja_JP.json&amp;ref=helpx.adobe.com" data-type="URL" data-id="https://helpx.adobe.com/jp/illustrator/how-to/jp-ipad-beginners-guide.html?playlist=/services/playlist.helpx/products:SG_ILLUSTRATOR_1_1/learn-path:key-techniques/playlist:topic/set-header:mobile-apps/ja_JP.json&amp;ref=helpx.adobe.com" target="_blank">Illustrator iPad版 入門ガイド</a></p>\n\n\n\n<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">\n<iframe title="【完全攻略】ついにillustrator iPad版キター！イラレ初心者こそ使うべきでしょ、この神アプリ。" width="580" height="326" src="https://www.youtube.com/embed/zJfjfZx5Dkw?feature=oembed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\n</div></figure>\n\n\n\n<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">\n<iframe title="【もうPCいらない！】illustrator iPad版で、本気ポスター&amp;ロゴ作り！" width="580" height="326" src="https://www.youtube.com/embed/hueM2mPabZI?feature=oembed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\n</div></figure>\n',
            protected: false,
          },
          excerpt: {
            rendered:
              '<p>2020年10月、待望のIllustrator iPad版が公開。アプリのリリースにあたりAdobe公式チュートリアルを担当することになり、基本操作から応用操作までを解説したチュートリアルを作成しました。チュートリアルで [&hellip;]</p>\n',
            protected: false,
          },
          featured_media: 483,
          template: '',
          acf: { client: 'Adobe公式チュートリアル担当｜Adobe' },
          _links: {
            self: [
              { href: 'https://amitysensei.com/wp/wp-json/wp/v2/works/133' },
            ],
            collection: [
              { href: 'https://amitysensei.com/wp/wp-json/wp/v2/works' },
            ],
            about: [
              { href: 'https://amitysensei.com/wp/wp-json/wp/v2/types/works' },
            ],
            'wp:featuredmedia': [
              {
                embeddable: true,
                href: 'https://amitysensei.com/wp/wp-json/wp/v2/media/483',
              },
            ],
            'wp:attachment': [
              {
                href:
                  'https://amitysensei.com/wp/wp-json/wp/v2/media?parent=133',
              },
            ],
            curies: [
              { name: 'wp', href: 'https://api.w.org/{rel}', templated: true },
            ],
          },
          _embedded: {
            'wp:featuredmedia': [
              {
                id: 483,
                date: '2021-03-18T08:45:41',
                slug: 'illustrator-2',
                type: 'attachment',
                link:
                  'https://amitysensei.com/wp/works/illustrator-ipad/attachment/illustrator-2/',
                title: { rendered: 'illustrator' },
                author: 1,
                acf: [],
                caption: { rendered: '' },
                alt_text: '',
                media_type: 'image',
                mime_type: 'image/jpeg',
                media_details: {
                  width: 1536,
                  height: 1920,
                  file: '2020/10/illustrator-1.jpeg',
                  sizes: {
                    medium: {
                      file: 'illustrator-1-240x300.jpeg',
                      width: 240,
                      height: 300,
                      mime_type: 'image/jpeg',
                      source_url:
                        'https://amitysensei.com/wp/wp-content/uploads/2020/10/illustrator-1-240x300.jpeg',
                    },
                    large: {
                      file: 'illustrator-1-819x1024.jpeg',
                      width: 819,
                      height: 1024,
                      mime_type: 'image/jpeg',
                      source_url:
                        'https://amitysensei.com/wp/wp-content/uploads/2020/10/illustrator-1-819x1024.jpeg',
                    },
                    thumbnail: {
                      file: 'illustrator-1-150x150.jpeg',
                      width: 150,
                      height: 150,
                      mime_type: 'image/jpeg',
                      source_url:
                        'https://amitysensei.com/wp/wp-content/uploads/2020/10/illustrator-1-150x150.jpeg',
                    },
                    medium_large: {
                      file: 'illustrator-1-768x960.jpeg',
                      width: 768,
                      height: 960,
                      mime_type: 'image/jpeg',
                      source_url:
                        'https://amitysensei.com/wp/wp-content/uploads/2020/10/illustrator-1-768x960.jpeg',
                    },
                    '1536x1536': {
                      file: 'illustrator-1-1229x1536.jpeg',
                      width: 1229,
                      height: 1536,
                      mime_type: 'image/jpeg',
                      source_url:
                        'https://amitysensei.com/wp/wp-content/uploads/2020/10/illustrator-1-1229x1536.jpeg',
                    },
                    'post-thumbnail': {
                      file: 'illustrator-1-1200x1500.jpeg',
                      width: 1200,
                      height: 1500,
                      mime_type: 'image/jpeg',
                      source_url:
                        'https://amitysensei.com/wp/wp-content/uploads/2020/10/illustrator-1-1200x1500.jpeg',
                    },
                    full: {
                      file: 'illustrator-1.jpeg',
                      width: 1536,
                      height: 1920,
                      mime_type: 'image/jpeg',
                      source_url:
                        'https://amitysensei.com/wp/wp-content/uploads/2020/10/illustrator-1.jpeg',
                    },
                  },
                  image_meta: {
                    aperture: '0',
                    credit: '',
                    camera: '',
                    caption: '',
                    created_timestamp: '0',
                    copyright: '',
                    focal_length: '0',
                    iso: '0',
                    shutter_speed: '0',
                    title: '',
                    orientation: '0',
                    keywords: [],
                  },
                },
                source_url:
                  'https://amitysensei.com/wp/wp-content/uploads/2020/10/illustrator-1.jpeg',
                _links: {
                  self: [
                    {
                      href:
                        'https://amitysensei.com/wp/wp-json/wp/v2/media/483',
                    },
                  ],
                  collection: [
                    { href: 'https://amitysensei.com/wp/wp-json/wp/v2/media' },
                  ],
                  about: [
                    {
                      href:
                        'https://amitysensei.com/wp/wp-json/wp/v2/types/attachment',
                    },
                  ],
                  author: [
                    {
                      embeddable: true,
                      href: 'https://amitysensei.com/wp/wp-json/wp/v2/users/1',
                    },
                  ],
                  replies: [
                    {
                      embeddable: true,
                      href:
                        'https://amitysensei.com/wp/wp-json/wp/v2/comments?post=483',
                    },
                  ],
                },
              },
            ],
          },
        },
        // iPadmate
        {
          id: 129,
          date: '2020-09-01T15:07:00',
          date_gmt: '2020-09-01T06:07:00',
          guid: {
            rendered: 'http://amitysensei.com/wp/?post_type=works&#038;p=129',
          },
          modified: '2021-03-18T08:28:50',
          modified_gmt: '2021-03-17T23:28:50',
          slug: 'ipadmate',
          status: 'publish',
          type: 'works',
          link: 'https://amitysensei.com/wp/works/ipadmate/',
          title: { rendered: 'オンラインサロン「iPadmate」' },
          content: {
            rendered:
              '\n<p>iPadを愛するすべての人がiPad をフル活用するための会員制コミュニティ「iPadmate」を2019年9月に開始。iPadをもっと使いこなすためのハウツーやおすすめアプリなど、毎日のお仕事や学業をより快適に楽しくするヒントを、全国のiPadユーザーと交換しながら交流する場として動き出しました。<br>一時は会員数1000人を上回りましたが、運営1年後の2020年9月で一旦解散し、現在は新たなコミュニティ制作を計画中。<br><br>▼iPadを使いこなしたいすべての人へ | iPadmate<br><a rel="noreferrer noopener" href="https://ipadmate.jp/" target="_blank">https://ipadmate.jp/</a></p>\n\n\n\n<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">\n<iframe title="【 大切なお知らせ 】iPadをもっと使いこなしたいあなたへ。" width="580" height="326" src="https://www.youtube.com/embed/JSr4r0cr7ko?feature=oembed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\n</div></figure>\n',
            protected: false,
          },
          excerpt: {
            rendered:
              '<p>iPadを愛するすべての人がiPad をフル活用するための会員制コミュニティ「iPadmate」を2019年9月に開始。iPadをもっと使いこなすためのハウツーやおすすめアプリなど、毎日のお仕事や学業をより快適に楽しくす [&hellip;]</p>\n',
            protected: false,
          },
          featured_media: 391,
          template: '',
          acf: { client: 'iPadに特化したオンラインサロン創設' },
          _links: {
            self: [
              { href: 'https://amitysensei.com/wp/wp-json/wp/v2/works/129' },
            ],
            collection: [
              { href: 'https://amitysensei.com/wp/wp-json/wp/v2/works' },
            ],
            about: [
              { href: 'https://amitysensei.com/wp/wp-json/wp/v2/types/works' },
            ],
            'wp:featuredmedia': [
              {
                embeddable: true,
                href: 'https://amitysensei.com/wp/wp-json/wp/v2/media/391',
              },
            ],
            'wp:attachment': [
              {
                href:
                  'https://amitysensei.com/wp/wp-json/wp/v2/media?parent=129',
              },
            ],
            curies: [
              { name: 'wp', href: 'https://api.w.org/{rel}', templated: true },
            ],
          },
          _embedded: {
            'wp:featuredmedia': [
              {
                id: 391,
                date: '2021-03-08T09:42:36',
                slug: 'ipadmate',
                type: 'attachment',
                link:
                  'https://amitysensei.com/wp/works/ipadmate/attachment/ipadmate/',
                title: { rendered: 'ipadmate' },
                author: 1,
                acf: [],
                caption: { rendered: '' },
                alt_text: '',
                media_type: 'image',
                mime_type: 'image/jpeg',
                media_details: {
                  width: 960,
                  height: 1200,
                  file: '2020/09/ipadmate.jpeg',
                  sizes: {
                    medium: {
                      file: 'ipadmate-240x300.jpeg',
                      width: 240,
                      height: 300,
                      mime_type: 'image/jpeg',
                      source_url:
                        'https://amitysensei.com/wp/wp-content/uploads/2020/09/ipadmate-240x300.jpeg',
                    },
                    large: {
                      file: 'ipadmate-819x1024.jpeg',
                      width: 819,
                      height: 1024,
                      mime_type: 'image/jpeg',
                      source_url:
                        'https://amitysensei.com/wp/wp-content/uploads/2020/09/ipadmate-819x1024.jpeg',
                    },
                    thumbnail: {
                      file: 'ipadmate-150x150.jpeg',
                      width: 150,
                      height: 150,
                      mime_type: 'image/jpeg',
                      source_url:
                        'https://amitysensei.com/wp/wp-content/uploads/2020/09/ipadmate-150x150.jpeg',
                    },
                    medium_large: {
                      file: 'ipadmate-768x960.jpeg',
                      width: 768,
                      height: 960,
                      mime_type: 'image/jpeg',
                      source_url:
                        'https://amitysensei.com/wp/wp-content/uploads/2020/09/ipadmate-768x960.jpeg',
                    },
                    full: {
                      file: 'ipadmate.jpeg',
                      width: 960,
                      height: 1200,
                      mime_type: 'image/jpeg',
                      source_url:
                        'https://amitysensei.com/wp/wp-content/uploads/2020/09/ipadmate.jpeg',
                    },
                  },
                  image_meta: {
                    aperture: '0',
                    credit: '',
                    camera: '',
                    caption: '',
                    created_timestamp: '1615196531',
                    copyright: '',
                    focal_length: '0',
                    iso: '0',
                    shutter_speed: '0',
                    title: '',
                    orientation: '0',
                    keywords: [],
                  },
                },
                source_url:
                  'https://amitysensei.com/wp/wp-content/uploads/2020/09/ipadmate.jpeg',
                _links: {
                  self: [
                    {
                      href:
                        'https://amitysensei.com/wp/wp-json/wp/v2/media/391',
                    },
                  ],
                  collection: [
                    { href: 'https://amitysensei.com/wp/wp-json/wp/v2/media' },
                  ],
                  about: [
                    {
                      href:
                        'https://amitysensei.com/wp/wp-json/wp/v2/types/attachment',
                    },
                  ],
                  author: [
                    {
                      embeddable: true,
                      href: 'https://amitysensei.com/wp/wp-json/wp/v2/users/1',
                    },
                  ],
                  replies: [
                    {
                      embeddable: true,
                      href:
                        'https://amitysensei.com/wp/wp-json/wp/v2/comments?post=391',
                    },
                  ],
                },
              },
            ],
          },
        },
      ],
    }
  },
  head() {
    const title = 'amity_sensei'
    // const desc = ''
    // const thumb = '/ogp.png'

    return {
      title,
      meta: [
        // {
        //   hid: 'description',
        //   name: 'description',
        //   content: desc,
        // },
        // {
        //   hid: 'og:image',
        //   property: 'og:image',
        //   content: thumb,
        // },
        {
          hid: 'og:title',
          property: 'og:title',
          content: title,
        },
        // {
        //   hid: 'og:description',
        //   property: 'og:description',
        //   content: desc,
        // },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'website',
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://amitysensei.com/',
        },
        {
          hid: 'twitter:card',
          property: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          hid: 'twitter:title',
          property: 'twitter:title',
          content: title,
        },
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: 'https://amitysensei.com/',
        },
      ],
    }
  },
  mounted() {
    window.addEventListener('scroll', this.checkScroll)
    setTimeout(() => {
      this.checkScroll()
    }, 800)
  },
  methods: {
    checkScroll() {
      const actionHight = 0

      if (
        document.getElementsByClassName('js-position').length &&
        document
          .getElementsByClassName('js-position')[0]
          .getBoundingClientRect().top < actionHight
      ) {
        document
          .getElementsByClassName('js-header-logo')[0]
          .classList.add('js-header-logo-active')
      } else {
        document
          .getElementsByClassName('js-header-logo')[0]
          .classList.remove('js-header-logo-active')
      }
    },
  },
}
</script>

<style lang="scss">
.page-index {
  padding-top: 0;
  padding-bottom: 0;

  > .sections {
    position: relative;
    padding-top: 80px;
    padding-bottom: 88px;
    background-color: var(--color-bg-default);

    @include mq(sm) {
      padding-bottom: 72px;
    }
  }
}

.js-header-logo.nuxt-link-exact-active {
  opacity: 0;
  transition: all 0.64s cubic-bezier(0, 0.55, 0.45, 1);

  &.js-header-logo-active {
    opacity: 1;
  }
}
</style>
