import Vue from 'vue'
import VueRouter from 'vue-router'

import home from '../components/home'
import doc from '../components/doc'
import example from '../components/example'

import menu from '../menu'

Vue.use(VueRouter)

let docRoutes = []
menu.forEach(({children}) => {
    children.forEach(({name}) => {
        docRoutes.push({
            path: `${name}`,
            name: `doc-${name}`,
            component: resolve => require([`../docs/${name}.md`], resolve)
        })
    })
})

const routes = [
    {
        path: '/',
        name: 'home',
        component: home
    },
    {
        path: '/example',
        name: 'example',
        component: example
    },
    {
        path: '/doc',
        redirect: '/doc/demo',
        name: 'doc',
        component: doc,
        children: [
            ...docRoutes
        ]
    }
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

export default router
