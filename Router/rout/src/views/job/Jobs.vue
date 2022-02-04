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
        types:[{name:"freelancer",id:"1"},{name:"web developre",id:"2"},{name:"web desiner",id:"3"}]
    }
}
}
</script>

<style>

</style>