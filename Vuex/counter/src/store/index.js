import { createStore } from 'vuex'

export default createStore({
  state: {
    counter:0,
    colorCode:'blue'
  },
  mutations: {
    increasecounter(state){
      state.counter++
    },
    decreasecounter(state){
  state.counter--
    } 
  },
  actions: {
  },
  getters:{
    countersquare(state){
      return state.counter*state.counter
    }
  },
  modules: {
  }
})
