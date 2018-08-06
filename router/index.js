import Vue from 'vue'
import VueRouter from 'vue-router'


import Classify from '../components/classify/Classify.vue'
import appLogin from '../components/loginandregister/login.vue'
import AppReg from '../components/loginandregister/register.vue'
import secClass from '../components/secondclassify/secClassify.vue'
import thirdClass from '../components/secondclassify/thirdClassify.vue'
import secClassify from '../components/secondclassify/secodDetail.vue'
import mine from '../components/loginandregister/mine.vue'
import store from '../store'
Vue.use(VueRouter)
// 这里的let声明的变量要放在数组里面
let routes = [
    {
        path:'/classify',
        name:'classify',
        component:Classify
    },
    {
        path:'/login',
        name:'login',
        component:appLogin, 
    },
    {
        path:'/register',
        name:'register',
        component: AppReg
    },
    {
        path:'/sencondcla',
        name:'sencondcla',
        component:secClass
    },
    {
        path:'/detail',
        name:'detail',
        component:thirdClass
    },
    {
        path:'/secdetail',
        name:'secdetail',
        component: secClassify
    },
    {
        path: '/mine',
        name: 'mine',
        component: mine
    }
]
const router = new VueRouter({
    mode:'history',
    routes
})
//全局路由守卫

let need_user_state = ['mine']

router.beforeEach((to, from, next) => {
    //是否需要判断登陆状态
    let need_us = need_user_state.some(name => to.name === name)
    if (need_us && !store.state.commons.user_state) {
        next('/login'); return false;
    }
    next();
})

export default router