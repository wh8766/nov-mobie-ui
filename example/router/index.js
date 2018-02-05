import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import home from '../pages/home'

let pageRoutes = [
    'feedback',
    'loading',
    'form',
    'slide',
    'button',
    'other',
    'upload',
    'scratch',
    'preview'
].map(name => {
    return {
        path: `/${name}`,
        component: resolve => require([`../pages/${name}.vue`], resolve)
    }
})

const routes = [
    {
        path: '/',
        component: home
    },
    ...pageRoutes
]

export default new VueRouter({
    linkActiveClass: 'active',
    routes,
    scrollBehavior (to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    }
})
