<template>
  <div>
    <b-navbar id="navbar" toggleable="md" type="dark" variant="info" fixed="top">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-navbar-brand>sDiscGolf</b-navbar-brand>
    <b-collapse is-nav id="nav_collapse">
    <b-navbar-nav>
      <b-nav-item v-if="$store.state.isUserLoggedIn" @click="logout" to="login">Log Out</b-nav-item>
      <b-nav-item v-if="!$store.state.isUserLoggedIn" to="login">Log in</b-nav-item>
      <b-nav-item v-if="!$store.state.isUserLoggedIn" to="register">Register</b-nav-item>
      <b-nav-item to="game">Play</b-nav-item>
    </b-navbar-nav>
  </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'headerbar',
  data () {
    return {
    }
  },
  methods: {
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'login'
      })
    },
    browseParks () {
      this.$router.push({name: 'parks'})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
