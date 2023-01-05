<template>
    <div>
        <HeaderMenu></HeaderMenu>
        <table class="table" style="width:800px; border:2px solid #000;margin: auto;margin-top: 20px;">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Contact</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in restaurant" :key="item.id">
                    <td>{{item.id}}</td>
                    <td>{{item.name}}</td>
                    <td>{{item.address}}</td>
                    <td>{{item.contact}}</td>
                    <td><router-link :to="'/update/'+item.id" >Update</router-link></td>
                    <button v-on:click="Delete(item.id)">Delete</button>
                    
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import axios from 'axios'
import HeaderMenu from './HeaderMenu.vue'
    export default{
        
        name:'HomePage',
        data(){
            return{
                name:'',
                restaurant:[]
            }
         },
        components:{
            HeaderMenu  
        },
        async mounted(){
            let use = localStorage.getItem("User")
            
            if(!use){
                this.$router.push({name:"Sign-in"})
            }

            let result = await axios.get("http://localhost:3000/restaurant");
            this.restaurant = result.data
            
        }

    };
</script>

<style>



</style>