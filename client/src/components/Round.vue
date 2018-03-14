<template>
  <div>
    <b-row>
      <b-col><h3>{{track.response[0].name}}</h3></b-col>
      <b-col><h3>Par: {{track.response[0].Holes[roundcount].par}}</h3></b-col>
      <b-col><h3>Hole:{{roundcount + 1}} ({{track.response[0].Holes[roundcount].pituus}}m)</h3></b-col>
    </b-row>
      <b-row>
        <b-table :items="items">
          <span slot="score" slot-scope="data" v-html="data.value"></span>
          <span slot="name" slot-scope="data" v-html="data.value"></span>
          <span slot="total" slot-scope="data" v-html="data.value"></span>
        </b-table>
        <b-col cols="2">
          <div
            v-if="(roundcount > 0)"
            class="throwbutton mt-5 mb-5"
            @click="prevRound">&lt;=</div>
        </b-col>
        <b-col cols="8"></b-col>
        <b-col cols="2">
          <div
            v-if="(roundcount < amountofholes)"
            class="throwbutton mt-5 mb-5"
            @click="nextRound">=&gt;
          </div>
        </b-col>
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
  </div>
</template>

<script>
var counter = 0
export default {
  name: 'round',
  props: ['track', 'players', 'items'],
  data () {
    return {
      errormsg: '',
      roundcount: 0,
      amountofholes: this.track.response[0].Holes.length - 1
    }
  },
  methods: {
    addScore (val) {
      if (this.players.length > counter) {
        // set the score of this round for first player only. stores it in the player's data
        this.players[counter].score.push({
          hole: this.roundcount + 1,
          holescore: val - this.track.response[0].Holes[this.roundcount].par
        })
        this.items[counter].score = this.players[counter].score[this.roundcount].holescore
        counter += 1
      } else {
        this.errormsg = 'All scores added already!'
      }
      // set it to visible variable
      // TODO: also for many players ( a counter ?)
    },
    prevRound: function () {
      if (this.roundcount > 0) {
        this.roundcount -= 1
      }
    },
    nextRound: function () {
      if (this.roundcount < this.amountofholes) {
        this.roundcount += 1
        console.log(this.track.response[0].Holes.length)
      }
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
