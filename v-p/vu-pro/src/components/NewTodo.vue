<template>
    <form @submit.prevent="addTodo()" class="col-12 col-lf-16">
        <input v-model="newTodo" type="text" placeholder="Add todo" class="form-control">
    </form>
</template>

<script>
export default {
    data(){
        return{
            newTodo:""
        }
    },
    methods:{
        addTodo(){
            if(this.newTodo.length>1){
                this.$emit('on-addtodo',this.newTodo)
            }
            this.newTodo=""
        }
    }
}
</script>

<style>

</style>