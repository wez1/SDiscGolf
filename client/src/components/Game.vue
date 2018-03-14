<template>
  <div>
    <b-container>
      <div v-if="!$store.state.isGameStarted" id="gamecreation">
        <input type="text" v-on:keyup.enter="addPlayer" v-model="name" placeholder="Add New Player"/>
        <b-btn @click="addPlayer" variant="info">+</b-btn>
        <ul id="example-1">
          <li v-for="player in players" :key="player.name" >
            <b-btn @click="delPlayer(player)" class="mt-1 mb-1" size="sm" variant="danger">X</b-btn> {{ player.name }} </li>
        </ul>
        <b-btn @click="start" variant="success">Start A Round</b-btn>
      </div>
      <round :items="items" :track="track" :players="players" prop v-if="$store.state.isGameStarted"/>
    </b-container>
  </div>
</template>

<script>
import Round from '@/components/Round'
import DataService from '@/services/DataService'
const players = []
export default {
  name: 'game',
  components: {
    Round
  },
  data () {
    return {
      players: players,
      name: '',
      track: null,
      items: []
    }
  },
  async created () {
    try {
      const response = await DataService.getTracks()
      this.track = response.data
    } catch (err) {
      console.log('error')
    }
  },
  methods: {
    addPlayer: function () {
      this.players.push({
        name: this.name,
        score: [],
        total: 0
      })
      this.items.push({
        name: this.name,
        score: 0,
        total: 0
      })
      this.$store.dispatch('addPlayer', {
        name: this.name,
        score: [],
        total: 0
      })
      this.name = ''
    },
    delPlayer: function (player) {
      const i = this.players.indexOf(player)
      this.players.splice(i, 1)
    },
    start: function () {
      this.$store.dispatch('setGame', true)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style: none;
}
#gamecreation {
  text-align:center;
}

</style>
