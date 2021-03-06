import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'
import Home from '@/components/Home'
import AddCart from '@/components/Ads/AddCar'
import MyCars from '@/components/Ads/MyCars'
import Login from '@/components/Auth/Login'
import Registration from '@/components/Auth/Registration'
import Order from '@/components/User/Orders'
import Car from '@/components/Ads/Car'
import Auth from './auth-guard.js'

Vue.use(Router);
Vue.use(axios);

export default new Router ({
    routes: [
        {
            path: '',
            name: 'home',
            component: Home
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/car/:id',
            name: 'car',
            component: Car,
            props: true,
            // beforeEnter: Auth,
        },
        {
            path: '/registeration',
            name: 'registration',
            component: Registration
        },
        {
            path: '/orders',
            name: 'orders',
            component: Order,
            // beforeEnter: Auth,
        },
        {
            path: '/add_cars',
            name: 'add_car',
            component: AddCart,
            // beforeEnter: Auth,
        },
        {
            path: '/my_cars',
            name: 'my_cars',
            component: MyCars,
            // beforeEnter: Auth,
        }
    ],
    mode: 'history'
})