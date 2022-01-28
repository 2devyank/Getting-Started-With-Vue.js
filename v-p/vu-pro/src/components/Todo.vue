<template>
    <!-- <h1>{{todoString}}</h1> -->
    <li class="d-flex align-items-center list-group-item">

        <button v-if="!isEditing" :class="{completed}"
        @click="$emit('on-toggle')"
         class="btn border-0 text-left flex-grow-1">{{todoString}}</button>
        <form v-else @submit.prevent="endediting"  class="flex-grow-1">
            <input @blur="startediting()" v-model="newTodoString" type="text" class="format-control"/>
        </form>
        <div @click="startediting()" class="btn-outline-primary">Edit</div>
        <div @click="$emit('on-delete')" class="btn-outline-danger">Delete</div>
    </li>
</template>
<script>


export default {
props:{
todoString:String,
completed:Boolean
},
data(){
    return{
        isEditing:false,
        newTodoString:""
    }
},
methods:{
    startediting(){

        if(!this.isEditing){
            this.newTodoString=this.todoString
            this.isEditing=true
        }
        else{
            this.endediting()

        }
    },
    endediting(){
        this.isEditing=false,
        this.$emit('on-edit',this.newTodoString)
    }
}
}

    
</script>
<style scoped>
.completed{
text-decoration: line-through;
}
</style>
