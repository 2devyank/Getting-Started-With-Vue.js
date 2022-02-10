import {reactive,readonly } from 'vue'

const state=reactive({
    counter:0,
    colorCode:"red"
})

const methods={
    deccounter(){
state.counter--
    },
    inccounter(){
state.counter++
    },
    setcolor(val){
state.colorCode=val
    }
   
}
const getters={
    square(){
        return   state.counter*state.counter
       }
}
export default{
     state:readonly(state),
     methods,getters
    }