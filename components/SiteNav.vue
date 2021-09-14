<template>
  <nav
    class="navbar is-fixed-top"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar-brand">
      <nuxt-link class="navbar-item" to="/">
        <site-logo v-if="$siteConfig.logo === 'logo-component'" />
        <img
          v-else
          :src="$siteConfig.logo"
          :alt="$siteConfig.siteName"
          class="logo"
        />
      </nuxt-link>
      <hamburger-button @click="active = !active" />
    </div>

    <div
      :class="{
        'navbar-menu': true,
        'is-active': active
      }"
    >
      <ul class="navbar-end">
        <li
          v-for="item in $siteConfig.mainMenu"
          :key="item.link"
          class="navbar-item"
          @click="active = false"
        >
          <component
            :is="item.link.startsWith('http') ? 'a' : 'nuxt-link'"
            :href="item.link"
            :to="item.link"
            :target="item.target ? item.target : '_self'"
          >
            {{ item.name }}
          </component>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
import HamburgerButton from '~/components/HamburgerButton'
export default {
  name: 'SiteNav',
  components: { HamburgerButton },
  data() {
    return {
      active: false
    }
  }
}
</script>
<style lang="scss" scoped>
.navbar {
  background: transparent;
}
.navbar-item {
  height: 6rem;
  overflow: hidden;
}
.navbar-item img {
  max-height: 9rem;
}
.site-search-wrapper {
  transform: translateX(5px);
  // @media (max-width: 1023px) {
  //   display: none;
  // }
}
.navbar-burger {
  height: auto;
}

.navbar-menu a {
  display: block;
}
</style>
