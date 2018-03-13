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
        <b-table :items="items">
          <span slot="score" slot-scope="data" v-html="data.value"></span>
          <span slot="name" slot-scope="data" v-html="data.value"></span>
          <span slot="total" slot-scope="data" v-html="data.value"></span>
        </b-table>
      </b-row>
      <div v-html="errormsg" style="text-align:center;" />
      <b-row>
        <b-col class="throwbutton" @click="addScore(1)" cols="3">1</b-col>
        <b-col class="throwbutton" @click="addScore(2)" cols="3">2</b-col>
        <b-col class="throwbutton" @click="addScore(3)" cols="3">3</b-col>
        <b-col class="throwbutton" @click="addScore(4)" cols="3">4</b-col>
        <b-col class="throwbutton" @click="addScore(5)" cols="3">5</b-col>
        <b-col class="throwbutton" @click="addScore(6)" cols="3">6</b-col>
        <b-col class="throwbutton" @click="addScore(7)" cols="3">7</b-col>
        <b-col class="throwbutton" @click="addScore(8)" cols="3">8</b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
const items = []
var count = 0
var playercount = 0
const players = []

export default {
  name: 'stuff',
  data () {
    return {
      items: items,
      players: players,
      errormsg: '',
      name: '',
      total: null,
      playercount: playercount
    }
  },
  methods: {
    addScore (val) {
      this.errormsg = ''
      console.log(this.players.length)
      if (this.players.length > count) {
        this.items[count].throws = val + ' (' + (val - 4) + ')'
        this.items[count].total += val - 4
        count += 1
      } else {
        this.errormsg = 'All scores added already'
      }
    },
    addPlayer (name, playercount) {
      this.items.push({
        name: this.name,
        throws: 0,
        total: 0
      })
      this.players.push({
        name: this.name,
        scores: [{
          score: 0
        }],
        total: 0
      })
      this.playercount += 1
    },
    removePlayer (i) {
      this.players.splice(i, 1)
      console.log(this.players)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.throwbutton {
  padding:10px;
  border: solid white 2px;
  background-color:#17a2b8;
  height:90px;
  font-size: 50px;
  color:white;
  text-align: center;
  cursor: pointer;
}
.throwbutton:hover{
  background-color: #0592a6;
}
.throwbutton, select {
  text-transform: none;
}
</style>
