<template>
  <div>
    <stuff />
  </div>
</template>

<script>
import Stuff from '@/components/Stuff'
const items = []
var count = 0
var playercount = 0
const players = []

export default {
  name: 'game',
  components: {
    Stuff
  },
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
