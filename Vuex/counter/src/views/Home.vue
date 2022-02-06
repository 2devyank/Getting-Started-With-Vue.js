<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div class="counter" :style="{color:$store.state.colorCode}">
{{$store.state.counter}}<br>

{{$store.state.counter}}
<sup>2</sup>={{$store.getters.countersquare}}
    </div>
    <div class="buttons">
      <button @click="$store.commit('increasecounter')">+</button>
      <button @click="$store.commit('decreasecounter')">-</button>
    </div>
    <input type="text" spaceholder="color" v-model="colorCode">
  </div>

</template>

<script>


export default {
  name: 'Home',
  computed:{
    colorCode:{
set(newValue){
this.$store.commit('newcolorCode',newValue)
},
get(){
  return this.$store.state.colorCode
}
    }
  }
  // data(){
  //   return{
  //     counter:0
  //   }
  // },
  // methods:{
  //  increasecounter(){
  //     this.counter++
  //   },
  //   decreasecounter(){
  //     this.counter--
  //   } 
  // }
 
}
</script>
