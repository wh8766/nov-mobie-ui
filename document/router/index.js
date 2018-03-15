import Vue from 'vue'
import VueRouter from 'vue-router'

import home from '../components/home'
import doc from '../components/doc'
import example from '../components/example'
import demo from '../docs/demo.md'

import menu from '../../config/menu'

Vue.use(VueRouter)

let docRoutes = []
menu.forEach(({children}) => {
    children.forEach(({name}) => {
        docRoutes.push({
            path: `${name}`,
            name: `doc-${name}`,
            component: resolve => require([`../docs/${name}.md`], resolve, error => {
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
    {
        path: '/example',
        name: 'example',
        component: example
    },
    {
        path: '/doc',
        redirect: '/doc/introduce',
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
