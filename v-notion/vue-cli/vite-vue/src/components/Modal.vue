<template>
<div class="com" @click="toggleshow">
<slot></slot>
</div>


</template>

<script>
export default {
props:['name'],
methods:{
    toggleshow(){
        this.$emit('close')
    }
}
}
</script>
<style >
.com{
    background-color: blue;
    height: 300px;
    width: 200px;
}
</style>