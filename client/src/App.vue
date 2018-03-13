<template>
  <div id="app">
      <header-bar/>
        <b-container id="maincontent">
          <router-view />
        </b-container>
  </div>
</template>

<script>
import HeaderBar from '@/components/Header'
export default {
  name: 'App',
  components: {
    HeaderBar
  }
}
</script>

<style>
body {
  background: fixed no-repeat #eee;
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#maincontent {
  background-color:#fff;
  padding-bottom:90px;
  padding-top:90px;
}
#inputs {
  text-align: center;
}
</style>
