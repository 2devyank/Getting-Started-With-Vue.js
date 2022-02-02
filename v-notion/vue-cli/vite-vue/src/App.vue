<script >
 import Modal from "./components/Modal.vue"
export default{
  data(){
    return {
      title:"devyank mera bachha ",
      name:"devyank",
      showcase:false
    }
  },
  components:{
Modal
  },
  methods:{
    handleevent(){
      console.log(this.$refs.name)
    },
    handleshow(){
      this.showcase=!this.showcase
    }
  }
}
</script>

<template>
  <div @click="handleshow" >
    Hello HelloWorld <br>
    {{title}}
    <input type="text " ref="name">
    <button @click="handleevent">click me</button>
    <div v-if="showcase">
    <Modal  :name="name" @close="handleshow">
      <h1>m Modal hu</h1>    
{{name}}
    </Modal>
    </div>
    <button >open component</button>
    </div> 
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
