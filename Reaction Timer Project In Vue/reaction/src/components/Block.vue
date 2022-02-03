<template>
  <div class="block" v-if="showblock" @click="stoptimer">
click me
  </div>
</template>

<script>
export default {
props:['delay'],
data(){
    return {
        showblock:false,
        reactiontime:0,
        timer:null
    }
},
mounted(){
console.log('mounted')
setTimeout(()=>{
this.showblock=true
this.starttimer()

},this.delay)
},

methods:{
    starttimer(){
this.timer=setInterval(() => {
    this.reactiontime+=10
},10);
    },
    stoptimer(){
clearInterval(this.timer)
this.$emit('end',this.reactiontime)
    }
}
}
</script>

<style>
.block{
    width:400px ;
    border-radius:20px ;
    color:white ;
    background-color: #0faf87;
    text-align:center;
    margin:40px auto;
    padding:100px 0 ;
}
</style>