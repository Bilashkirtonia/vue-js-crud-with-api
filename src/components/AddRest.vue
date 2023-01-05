<template>
    <div>
        <HeaderMenu></HeaderMenu>
        <div class="container">
    <div class="row">
        <div class="col-md-4 m-auto">
            <h2 class="mb-3">Add Restaurant</h2>
            <div class="card p-4 border-3">
                <form>
                    <div class="mb-3">
                        <label for="name" class="form-label">name</label>
                        <input v-model="this.restaurant.name" type="text" class="form-control" id="name" placeholder="">
                    </div>

                    <div class="mb-3">
                        <label for="text" class="form-label">Address</label>
                        <input v-model="this.restaurant.address"  type="email" class="form-control" id="email" placeholder="">
                    </div>

                    <div class="mb-3">
                        <label for="text" class="form-label">Contact</label>
                        <input v-model="this.restaurant.contact"  type="text" class="form-control" id="password" placeholder="">
                    </div>
                                     
                     <button type="button" v-on:click="add" class="btn btn-info">Add</button>
                     

                <!-- <router-link to="/Login">Add</router-link> -->

            </form>
            </div>
        </div>
    </div>
  </div>
    </div>
</template>

<script>
import axios from 'axios';
import HeaderMenu from './HeaderMenu.vue'
    export default{
        name:'AddRest',
        data(){
            return{
                restaurant:{
                    name:'',
                    address:'',
                    contact:''
                }
            }
        },
        components:{
            HeaderMenu
        },
        methods:{
            // let use = localStorage.getItem("User");
            // this.name = JSON.parse(use).name
            // if(!use){
            //     this.$router.push({name:"Sign-in"})
            // }
           async add(){
                const result = await axios.post("http://localhost:3000/restaurant",{
                    name:this.restaurant.name,
                    address:this.restaurant.address,
                    contact:this.restaurant.contact
                });

                if(result.status == 201){
                    this.$router.push({name:"Home"})
                }
            }
        }
        

    };
</script>

<style>



</style>