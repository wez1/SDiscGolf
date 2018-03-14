import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    token: null,
    user: null,
    isUserLoggedIn: false,
    isGameStarted: false,
    players: []
  },
  mutations: {
    setToken (state, token) {
      state.token = token
      if (token) {
        state.isUserLoggedIn = true
      } else {
        state.isUserLoggedIn = false
      }
    },
    setUser (state, user) {
      state.user = user
    },
    setGame (state, value) {
      state.isGameStarted = value
    },
    addPlayer (state, player) {
      // mutate state
      state.players.push(player)
    }
  },
  actions: {
    setToken ({commit}, token) {
      commit('setToken', token)
    },
    setUser ({commit}, user) {
      commit('setUser', user)
    },
    setGame ({commit}, value) {
      commit('setGame', value)
    },
    addPlayer ({commit}, player) {
      commit('addPlayer', player)
    }
  }
})
