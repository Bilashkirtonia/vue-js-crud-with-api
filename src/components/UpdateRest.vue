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
                                     
                     <button type="button" v-on:click="update" class="btn btn-info">Update</button>
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
        name:'UpdateRest',
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
           async update(){
                const result = await axios.put("http://localhost:3000/restaurant/"+this.$route.params.id,{
                    name:this.restaurant.name,
                    address:this.restaurant.address,
                    contact:this.restaurant.contact
                });

                if(result.status == 200){
                    this.$router.push({name:"Home"});
                }
            }
        },
       async mounted(){
            let use = localStorage.getItem("User")
            if(!use){
                this.$router.push({name:"Sign-in"})
            }
            const result = await axios.get("http://localhost:3000/restaurant/"+this.$route.params.id)
            this.restaurant = result.data
        }
        

    };
</script>

<style>



</style>