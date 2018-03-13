<template>
  <div>
    <b-container>
      <b-row>
        <input type="text" v-model="name" placeholder="Add New Player"/>
        <b-btn @click="addPlayer" variant="info">+</b-btn>
        <b-btn v-if="!$store.state.isGameStarted" @click="getData" variant="info">Get the data</b-btn>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import DataService from '@/services/DataService'
const players = []
export default {
  name: 'creategame',
  data () {
    return {
      players: players,
      name: ''
    }
  },
  methods: {
    addPlayer (name) {
      this.players.push({
        name: this.name,
        scores: [{
          score: 0
        }],
        total: 0
      })
    },
    async getData () {
      try {
        const response = await DataService.getTracks()
        console.log(response.data)
        this.$store.dispatch('setGame', true)
      } catch (err) {
        console.log('error')
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
