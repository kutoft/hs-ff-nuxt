<template>
  <div id="news-page" class="page-wrapper news-page">
    <site-hero :title="title" :subtitle="subtitle" :image="featureImage">
    </site-hero>
    <main-section theme="one-column">
      <template v-slot:default>
        <!-- All Posts -->
        <posts-grid />
      </template>
      <template v-slot:sidebar>
        Nothing here
      </template>
    </main-section>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { setPageData } from '../helper'

export default {
  name: 'NewsPage',
  head() {
    return {
      title: `News | ${this.$siteConfig.siteName}`
    }
  },
  computed: {
    ...mapState(['title', 'subtitle', 'featureImage'])
  },
  fetch({ store, params }) {
    setPageData(store, { slug: 'news' })
  }
}
</script>

<style>
.news-page .under-subtitle {
  border-top: none;
}
</style>
