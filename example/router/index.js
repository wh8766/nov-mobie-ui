import Vue from 'vue'
import VueRouter from 'vue-router'

import weui from 'weui.js'

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
    'preview',
    'group',
    'cell',
    'novTextarea',
    'checker',
    'checklist',
    'novInput',
    'toast',
    'novSwitch'
].map(name => {
    return {
        path: `/${name}`,
        name,
        component: resolve => require([`../pages/${name}.vue`], resolve),
        load: false
    }
})

const routes = [
    {
        path: '/',
        name: 'home',
        component: home
    },
    ...pageRoutes
]

const router = new VueRouter({
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

let loading
router.beforeEach((to, from, next) => {
    let pRoute = pageRoutes.find(page => page.name === to.name)
    if (pRoute && !pRoute.load) {
        loading = weui.loading('组件加载中')
        pRoute.load = true
    }
    next()
})

router.beforeResolve((to, from, next) => {
    loading && loading.hide()
    next()
})

export default router
