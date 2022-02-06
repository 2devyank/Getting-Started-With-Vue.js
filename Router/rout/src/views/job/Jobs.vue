<template>
  <div>
<li v-for="type in types" :key="type.id">
  <router-link :to="{name:'Jobdetails',params:{id:type.id}}">
{{type.name}}

  </router-link>
</li>
  </div>
</template>

<script>
export default {
data(){
    return{
       types:[]
    }
},
mounted(){
fetch('http://localhost:3000/jobs')
.then(res=>res.json())
.then(data=>this.types=data)
.catch(err=>console.log(err.message))
}
}
</script>

<style>

</style>