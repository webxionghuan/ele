import Vue from 'vue'
import Router from 'vue-router'
import HelloContainer from "./components/HelloWorld.vue"
//1:引入Test组件
import Index from "./components/home/Index.vue"
import Login from './components/home/Login.vue'
import Register from './components/home/register.vue'
import user from './components/home/user.vue'
import order from './components/home/order.vue'
import Explore from './components/home/explore.vue'
import Exchange from './components/home/exchange.vue'

Vue.use(Router)
//2:为Test组件配置访问路径 /Login
export default new Router({
  routes: [
    {path:'/',redirect:"/Index"},
    {path:'/Index',component:Index},
    {path:'/order',component:order},
    {path:'/user',component:user},
    {path:'/explore',component:Explore},
    {path:'/exchange',component:Exchange},
    {path:'/Login',component:Login},
    {path:'/Register',component:Register}
  ]
})