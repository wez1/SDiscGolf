<template>
  <div>
    <b-container>
      <b-row>
        <input type="text" v-model="name" placeholder="Add New Player"/>
        <b-btn @click="addPlayer" variant="info">+</b-btn>
        <b-table :items="items">
          <span slot="score" slot-scope="data" v-html="data.value">
            <input type="number" v-model="score" />
          </span>
        </b-table>
      </b-row>
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
export default {
  name: 'parks',
  data () {
    return {
      items: items,
      players: [],
      name: '',
      total: 0,
      score: 0
    }
  },
  methods: {
    addScore (val) {
      if (!this.player1 && !this.player2) {
        this.player1 = val
        console.log('player1: ' + this.player1)
      } else if (this.player1 && !this.player2) {
        this.player2 = val
        console.log('player2: ' + this.player2)
      } else console.log('error, go to next hole already idiot!')
    },
    addPlayer (name) {
      this.items.push({
        name: this.name,
        score: 0,
        total: 0
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.throwbutton {
  padding:10px;
  border: solid white 2px;
  background-color:cyan;
  height:90px;
  font-size: 50px;
  color:white;
  text-align: center;
}
.throwbutton:hover{
  background-color: aquamarine;
}
</style>
