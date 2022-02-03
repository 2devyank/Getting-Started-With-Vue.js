
<template>
  <div v-if="showResults">

    <h2>
        
         Reaction Time {{score}}ms
        </h2>
        <p>{{rank}}</p> 
  </div>
</template>

<script>
export default {
props:['score','showResults'],
data(){
    return {
        rank:null
    }
},
mounted(){
    if(this.score < 250){
this.rank="too fast"
    }else if(this.score>250&&this.score<450){
        this.rank="mario speed"
    }else{
        this.rank="slow"
    }
}
}
</script>

<style>

</style>