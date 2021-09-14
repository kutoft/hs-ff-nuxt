<template>
  <section>
    <loading-spinner v-if="loading" />
    <code v-if="!loading">
      {{ state }}
    </code>
  </section>
</template>
<script>
import LoadingSpinner from '../LoadingSpinner.vue'

export default {
  name: 'NflState',
  components: { LoadingSpinner },
  data() {
    return {
      loading: true,
      error: false,
      state: null
    }
  },
  mounted() {
    this.getState()
  },
  methods: {
    async getState() {
      try {
        const response = await fetch('https://api.sleeper.app/v1/state/nfl')
        const body = await response.json()
        this.state = body
        this.loading = false
      } catch (err) {
        this.error = true
      }
    }
  }
}
</script>
