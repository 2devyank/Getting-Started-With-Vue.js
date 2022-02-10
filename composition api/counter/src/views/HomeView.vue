<script >
import {ref,inject,computed} from 'vue'
export default{
setup(){
  const store=inject('store')

const colorcode=computed({
  get(){
    return store.state.colorCode
  },
  set(val){
    store.methods.setcolor(val)
  }


})
// const inccounter=function(){
//     counter.value++
//    }
//       const deccounter=function(){
//       counter.value--
//      }

  return{
    store,
    colorcode
  }
}
}
</script>

<template>
  <main>
     <div class="counter" :style="{color:store.state.colorCode}"> 
      <h1>{{store.state.counter}}</h1>
    </div>
    <div>
      {{store.state.counter}}
        <sup>2</sup>={{store.getters.square()}}
    </div>
    <input type="text" v-model='colorcode'>
<div class="buttons">
  <button @click="store.methods.inccounter">+</button>
  <button @click="store.methods.deccounter">-</button>
</div>
  </main>
</template>
<style>
.counter{
  height: 80px;
}
</style>