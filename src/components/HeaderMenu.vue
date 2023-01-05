<template>
    <div>
        <div class="topnav">
            <router-link to="/">Home</router-link>
            <router-link to="/add">Add</router-link>
            <router-link to="/update">Update</router-link>
            <router-link to="/">Home</router-link>
            <router-link to="/">Home</router-link>
            
            <a v-on:click="Logout" class="log_out" href="#">Log out</a>
        </div>
    </div>
</template>

<script>
    export default{
        name:"HeaderMenu",
        methods:{
            Logout(){
                localStorage.clear();
                this.$router.push({name:"LogIn"});
            }
        }
    }
</script>

<style>
            /* Add a black background color to the top navigation */
        .topnav {
        background-color: #333;
        overflow: hidden;
        margin:0 100px;
        margin-top: -50px;
        }

        /* Style the links inside the navigation bar */
        .topnav a ,.topnav router-link{
        float: left;
        color: #f2f2f2;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
        font-size: 17px;
        }

        /* Change the color of links on hover */
        .topnav a:hover {
        background-color: #ddd;
        color: black;
        }

        /* Add a color to the active/current link */
        .topnav a.active {
        background-color: #04AA6D;
        color: white;
        }
        .topnav .log_out{
            float: right;
        }
</style>
