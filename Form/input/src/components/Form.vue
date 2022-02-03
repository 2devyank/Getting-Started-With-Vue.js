<template>
  <form @submit.prevent="handlesubmit" >
      <label >Email:</label>
      <input type="email" v-model="email" required>
     <br>
      <label >Password:</label>
    
      <input type="password" v-model="password" required>
      <p v-if="error">{{error}}</p>
      <br>
      <label >Role:</label>
     
      <select v-model="role">
          <option value="developer">Web Developer</option>
          <option value="designer">Web Designer</option>
      </select>
      <label >Skills</label>
      <input type="text" v-model="showskill" @keyup="addskill">
      <div v-for="skill in skills" :key="skill" >
         <span @click="deleteskill(skill)">
             
             {{skill}}
             </span> 

      </div>
      <div>
          <input type="checkbox" v-model="terms">
          <label >Terms and Condition</label>
      </div>
     <button>Submit</button>
  </form>
  Email :{{email}}
  Password :{{password}}
  {{role}}
  {{terms}}

</template>

<script>
export default {
    data(){
        return{
            email:'',
            password:'',
            role:"",
            terms:false,
            names:[],
            showskill:"",
            skills:[],
            error:""
        }
    },
    methods:{

    
    addskill(e){
if(e.key==="," && this.showskill){
    if(!this.skills.includes(this.showskill)){
    this.skills.push(this.showskill)
    }
    this.showskill=""
}
    },
    deleteskill(skill){
this.skills=this.skills.filter((skil)=>skil!=skill)
    },
    handlesubmit(){
        this.error=this.password.length>5?"":"must be atleast 6 char long"
    }
    }
}
</script>

<style>

</style>