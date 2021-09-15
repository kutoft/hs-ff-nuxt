<template>
  <section>
    <h3>Stupid Jars</h3>
    <loading-spinner v-if="loading" />
    <ul v-if="!loading" class="jar-list">
      <li
        v-for="manager in orderedState"
        :key="`${manager.first_name}-${manager.last_name}`"
        class="jar-item"
      >
        <span class="jar-name">{{ manager.first_name }}</span>
        <span class="jar-amount">${{ manager.jar_amount || 0 }}</span>
      </li>
    </ul>
  </section>
</template>
<script>
import LoadingSpinner from '../LoadingSpinner.vue'

export default {
  name: 'StupidJarList',
  components: { LoadingSpinner },
  data() {
    return {
      loading: true,
      error: false,
      state: null
    }
  },
  computed: {
    orderedState() {
      return this.state.slice().sort((a, b) => {
        if (a.jar_amount === b.jar_amount) {
          return 0
        }

        return a.jar_amount < b.jar_amount ? 1 : -1
      })
    }
  },
  mounted() {
    this.getManagers()
  },
  methods: {
    async getManagers() {
      try {
        const url = document.location.origin
        const response = await fetch(`${url}/api/managers.json`)
        const body = await response.json()
        this.loading = false
        this.state = body
      } catch (err) {
        this.error = true
      }
    }
  }
}
</script>
<style scoped>
.jar-item {
  display: flex;
  justify-content: space-between;
}
h3 {
  font-size: 2rem;
  font-weight: bold;
  padding-bottom: 0.5rem;
}
</style>
