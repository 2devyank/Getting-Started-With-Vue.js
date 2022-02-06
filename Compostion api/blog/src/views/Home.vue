<template>
  <div class="home">
  <p>
    
    My name is {{name}} and I am this year {{age}} old
    </p> 
  </div>

</template>

<script>


export default {
  name: 'Home',
setup(){
  console.log('setup')
  
 let name = "devyank"
  let age  = 19

  return {name:name,age:age}
// }
},
mounted(){
  console.log('mounted')
}
}

</script>
