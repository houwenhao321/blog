import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import axios from 'axios'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/works',
    name: 'Works',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Works.vue')
  },
  {
    path: '/someWords',
    name: 'SomeWords',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/SomeWords.vue')
  }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})


router.beforeEach((to,from,next)=>{
    if (to.name == 'Home'&& window.localStorage.getItem('Cookie') == null) {
        window.alert("请先登录！");
        next('/login');
    } else if (to.name == 'Home'&& window.localStorage.getItem('Cookie') != null) {
        const name = window.localStorage.getItem('Cookie').split('&')[0];
        const pass = window.localStorage.getItem('Cookie').split('&')[1];
        axios({
            method: 'get',
            url: 'http://192.168.1.31:3000/users',
        }).then(res => {
            const checkArr = res.data.filter(item=>{
                return item.name == name
            });
            if (checkArr.length == 0) {
                window.alert("请先登录！");
                next('/login');
            } else if (checkArr[0].pass != pass) {
                window.alert("您的密码发生变化,请重新登录！");
                next('/login');
            } else{
                next();
            }
        })
    } else {
        next();
    }
 })

export default router
