<template>
  <article class="page page-works-wid">
    <SectionWorksDetail :work="work" />
  </article>
</template>

<script>
export default {
  data() {
    return {
      work: {
        source_url: '',
        title: {
          rendered: '',
        },
        date: '',
        acf: {
          client: '',
        },
        content: {
          rendered: '',
        },
      },
    }
  },
}
</script>
