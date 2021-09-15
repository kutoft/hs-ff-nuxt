<template>
  <div id="home-page" class="page-wrapper home-page">
    <site-hero :title="title" :subtitle="subtitle" :image="featureImage">
    </site-hero>
    <main-section theme="sidebar-right">
      <template v-slot:default>
        <!-- All Posts -->
        <league-state />
      </template>
      <template v-slot:sidebar>
        <stupid-jar-list />
      </template>
    </main-section>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { setPageData } from '../helper'
import LeagueState from '~/components/sleeper/LeagueState'
import StupidJarList from '~/components/sleeper/StupidJarList'

export default {
  name: 'HomePage',
  head() {
    return {
      title: `Home | ${this.$siteConfig.siteName}`
    }
  },
  components: {
    LeagueState,
    StupidJarList
  },
  computed: {
    ...mapState(['title', 'subtitle', 'featureImage'])
  },
  fetch({ store, params }) {
    setPageData(store, { slug: 'home' })
  }
}
</script>

<style>
.home-page .under-subtitle {
  border-top: none;
}
</style>
