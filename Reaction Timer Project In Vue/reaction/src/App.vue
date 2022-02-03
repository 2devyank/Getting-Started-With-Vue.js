<script >
import Block from "./components/Block.vue"
import Results from "./components/Results.vue"
export default{
  data(){
    return{
      isplaying:false,
      delay:null,
      score:null,
      showResults:false
    }
  },
  components:{
   Block,Results
  },
  methods:{
    start(){
      this.delay=2000+Math.random()*5000
      this.isplaying=true
      this.showResults=false
    },
    endgame(reactiontime){
this.score=reactiontime
this.isplaying=false
this.showResults=true
    }
  }
}
</script>

<template>
<div>
<h1>Reaction Timer</h1>  
<button @click="start" :disabled="isplaying">play</button>
<Block v-if="isplaying" :delay="delay"   @end="endgame" />
<!-- <p v-if="showResults">Score {{score}}</p> -->
<br>
<Results :score="score" :showResults="showResults"/>
</div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #444;
  margin-top: 60px;
}
</style>
