<template>
  <div>
    <b-container>
      <b-row>
        <b-col><h4>Hole 1</h4></b-col>
        <b-col><h4>Par 4</h4></b-col>
        <b-col><h4>Sahanmäki-Hyvinkää</h4></b-col>
      </b-row>
      <b-row>
        <input type="text" v-model="name" placeholder="Add New Player"/>
        <b-btn @click="addPlayer" variant="info">+</b-btn>
      </b-row>
    </b-container>
  </div>
</template>

<script>
const players = []
export default {
  name: 'login',
  data () {
    return {
      players: players
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
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
