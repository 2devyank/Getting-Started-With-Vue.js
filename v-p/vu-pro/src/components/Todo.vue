<template>
    <h1>{{todoString}}</h1>
</template>
<script>


export default {
props:{
todoString:String,
completed:Boolean
}
}

    
</script>
<style scoped>
.completed{
text-decoration: line-through;
}
</style>
