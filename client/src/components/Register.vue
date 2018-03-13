<template>
  <div>
    <div id="inputs">
      <h1>Register</h1>
      <input
        name="email"
        type="email"
        placeholder="email"
        v-model="email" />
      <br>
      <input
        name="password"
        type="password"
        placeholder="password"
        autocomplete="new-password"
        v-model="password" />
      <br><b-btn
        @click="register"
        class="mt-2"
        variant="info"
        to="parks">Register</b-btn>
      <div class="error" v-html="error" />
    </div>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  name: 'register',
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
  color:red;
}
</style>
