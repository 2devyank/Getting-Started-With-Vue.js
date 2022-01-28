<template>
  <h1>Hello from youtube
    <Todolist/>
  </h1>
</template>

<script>
import Todolist from "./components/Todolist.vue"

export default {
  name:"App",
  components:{
    Todolist

},
}
</script>

<style >
body{
background-color:rgb(66,66,66);
color:aliceblue;
}
</style>