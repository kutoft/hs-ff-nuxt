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
  name: 'LeagueState',
  components: { LoadingSpinner },
  data() {
    return {
      loading: true,
      error: false,
      user: null,
      leagues: null,
      state: null
    }
  },
  mounted() {
    this.getUser().then(() => {
      this.getLeagues().then(() => {
        this.getState()
      })
    })
  },
  methods: {
    async getUser() {
      try {
        const response = await fetch('https://api.sleeper.app/v1/user/kutoft')
        const body = await response.json()
        this.user = body
      } catch (err) {
        this.error = true
      }
    },
    async getLeagues() {
      if (this.user === null) {
        return
      }
      try {
        const response = await fetch(
          `https://api.sleeper.app/v1/user/${this.user.user_id}/leagues/nfl/2021`
        )
        const body = await response.json()
        this.leagues = body
      } catch (err) {
        this.error = true
      }
    },
    async getState() {
      if (this.leagues === null) {
        return
      }

      try {
        const response = await fetch(
          `https://api.sleeper.app/v1/league/${this.leagues[0].league_id}`
        )
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
