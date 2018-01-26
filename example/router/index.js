import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import home from '../pages/home'
import feedback from '../pages/feedback'
import form from '../pages/form'
import button from '../pages/button'
import other from '../pages/other'
import upload from '../pages/upload'

const routes = [
    {
        path: '/',
        component: home
    },
    {
        path: '/feedback',
        component: feedback
    },
    {
        path: '/form',
        component: form
    },
    {
        path: '/button',
        component: button
    },
    {
        path: '/other',
        component: other
    },
    {
        path: '/upload',
        component: upload
    },
    // 搜索页面
    // {
    //     path: '/search/:searchId',
    //     component: resolve => require(['../view/SearchResultView.vue'], resolve),
    //     name: 'search',
    // },
]

export default new VueRouter({
    linkActiveClass: 'active',
    routes
})
