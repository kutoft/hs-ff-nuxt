<template>
  <div id="home-page" class="page-wrapper home-page">
    <site-hero :title="title" :subtitle="subtitle" :image="featureImage">
    </site-hero>
    <main-section theme="sidebar-right">
      <template v-slot:default>
        <!-- All Posts -->
        <nfl-state />
        <league-state />
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
import NflState from '~/components/sleeper/NflState'
import LeagueState from '~/components/sleeper/LeagueState'

export default {
  name: 'HomePage',
  head() {
    return {
      title: `Home | ${this.$siteConfig.siteName}`
    }
  },
  components: {
    NflState,
    LeagueState
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
