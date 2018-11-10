import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import login from '@/views/login';
import home from '@/views/home';

const router = new VueRouter({
    routes:[
        {path:'/login',component:login},
        {path:'/home',component:home,name:'home'},
    ]
})
export default router;