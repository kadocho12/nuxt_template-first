<template>
  <article class="page page-contact">
    <SectionContactForm />
  </article>
</template>

<script>
export default {
  head() {
    const title = 'CONTACT | amity_sensei'
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
          content: 'https://amitysensei.com/contact/',
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
          href: 'https://amitysensei.com/contact/',
        },
        {
          rel: 'preload',
          href:
            'https://amitysensei.com/imgs/page/contact/amitysensei-contact-form.jpg',
          as: 'image',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.page-contact {
  padding-top: 0;
  padding-bottom: 0;
}
</style>
