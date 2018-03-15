import Vue from 'vue'
import VueRouter from 'vue-router'
import weui from 'weui.js'

import home from '../pages/home'
import demo from '../pages/demo'
import menu from '../../config/menu'

Vue.use(VueRouter)

let pageRoutes = []
menu.forEach(({children}) => {
    children.forEach(({name}) => {
        pageRoutes.push({
            path: `/${name}`,
            name: `example-page-${name}`,
            component: resolve => require([`../pages/${name}.vue`], resolve, error => {
                // TODO 尚未开发或者编辑的内容
                resolve(demo)
            })
        })
    })
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
