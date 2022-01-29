<template>
<div class="container">
  <div class="row">
    <div class="row">
      <NewTodo @on-addtodo="addTodo($event)"

    
      />
    </div>
  </div>
  <!-- <div class="row">
<p>Add create form </p>
  </div> -->
  <div class="row">
    <div class="col-12 col-lg-6">
      <ul class="list-group">
        <Todo
        v-for="(todo,index) in todos" 
        :key="index"
         :todoString="todo.todoString"
         :completed="todo.completed"
         @on-delete="deleteTodo(todo)"
         @on-toggle="toggleTodo(todo)"
         @on-edit="editTodo(todo,$event)"
       
        />
      </ul>
    </div>
  </div>
</div>

 
</template>

<script>
import Todo from "./Todo.vue"
import NewTodo from "./NewTodo.vue"

export default {
  components:{
    Todo,
    NewTodo
  },
  data(){
    return {
      todos:[
        {todoString:"make Angular course",completed:true},
        {todoString:"make Angular course",completed:false},
        {todoString:"make Angular course",completed:true},
        {todoString:"make Angular course",completed:false},
      ]
    }
  },
  methods:{
    addTodo(newTodo){
      this.todos.push({
        todoString:newTodo,
        completed:false
      })
    },
    toggleTodo(todo){
      todo.completed=!todo.completed
    },
    editTodo(todo,newtodoString){
      todo.todoString=newtodoString
    },
    deleteTodo(deletetodo){
    this.todos=  this.todos.filter(t=>t!==deletetodo)
    },
  }
}
</script>
<style>

</style>