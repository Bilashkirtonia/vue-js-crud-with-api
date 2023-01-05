<template>


<div class="container">
    <div class="row">
        <div class="col-md-4 m-auto">
            <h2 class="mb-3">Sign in</h2>
            <div class="card p-4 border-3">

                    <div class="mb-3">
                        <label for="name" class="form-label">Enter your name</label>
                        <input v-model="name" type="text" class="form-control" id="name" placeholder="">
                    </div>

                    <div class="mb-3">
                        <label for="email" class="form-label">Email address</label>
                        <input v-model="email"  type="email" class="form-control" id="email" placeholder="">
                    </div>

                    <div class="mb-3">
                        <label for="password" class="form-label">Password</label>
                        <input v-model="password"  type="password" class="form-control" id="password" placeholder="">
                    </div>
                                     
                     <button v-on:click="signIn" class="btn btn-info">Sign in</button>
                     

                <router-link to="/Login">Login</router-link>
            </div>
        </div>
    </div>
</div>






</template>

<script>
import axios from 'axios'
export default {
    data(){
       return{
        name:'',
        email:'',
        password:''


       }
    },
    methods:{
       async signIn(){

        let result = await axios.post('http://localhost:3000/User',{
            name:this.name,
            email:this.email,
            password:this.password
        });

            console.warn(result);
        if(result.status == 201){
            localStorage.setItem("User",JSON.stringify(result.data));
            this.$router.push({name:'Home'});
         }
           
            

        }
    },
    mounted(){
        let user = localStorage.getItem('User')
        if(user){
            this.$route.push({name:'Home'})
        }

    }
}
</script>

<style scoped>

</style>