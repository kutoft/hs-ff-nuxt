<template>
  <section>
    <loading-spinner v-if="loading" />
    <h5 v-if="!loading">{{ state.season }}</h5>
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
<style scoped>
h5 {
  font-weight: bold;
  text-transform: uppercase;
}
</style>
