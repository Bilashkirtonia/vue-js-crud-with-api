<template>


<div class="container">
    <div class="row">
        <div class="col-md-4 m-auto">
            <h2 class="mb-3">Log in</h2>
            <div class="card p-4 border-3">

                    <div class="mb-3">
                        <label for="email" class="form-label">Enter your Email</label>
                        <input v-model="email" type="email" class="form-control" id="email" placeholder="">
                    </div>

                    <div class="mb-3">
                        <label for="password" class="form-label">Password</label>
                        <input v-model="password" type="password" class="form-control" id="password" placeholder="">
                    </div>
                        <button v-on:click="logIn" type="submit"  class="btn btn-info">login</button>
                        <p>
                            <router-link to="/sign-in">Sign </router-link>
                        </p>

            </div>
        </div>
    </div>
</div>






</template>

<script>
import axios from 'axios'
export default {
    name:'LogIn',
    data(){
        return{
            email:"",
            password:""
            
        }
    },
    methods:{
       async logIn(){
        let result = await axios.get(`http://localhost:3000/User?email=${this.email}&password=${this.password}`);

            if(result.status == 200 && result.data.length>0){
                localStorage.setItem("User",JSON.stringify(result.data[0]));
                this.$router.push({name:'Home'});
            }
        }
    }

}
</script>

<style scoped>

</style>