import SignIn from './components/SignIn.vue';
import HomePage from './components/HomePage.vue';
import LogIn from './components/LogIn.vue';
import AddRest from './components/AddRest.vue';
import UpdateRest from './components/UpdateRest.vue';

import {createRouter,createWebHistory} from 'vue-router';

const routes = [
    {
        name :'Home',
        component:HomePage,
        path:'/'
    },{
        name:'Sign-in',
        component:SignIn,
        path:'/sign-in'
    },{
        name:'LogIn',
        component:LogIn,
        path:'/login'
    },
    {
        name:'AddRest',
        component:AddRest,
        path:'/add'
    },
    {
        name:'UpdateRest',
        component:UpdateRest,
        path:'/update/:id'
    }
]

const route = createRouter({
    history : createWebHistory(),
    routes
})

export default route