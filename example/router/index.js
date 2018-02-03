import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import home from '../pages/home'

let pageRoutes = [
    'feedback',
    'form',
    'button',
    'other',
    'upload',
    'preview',
    'group',
    'cell',
    'xtextarea',
    'checker',
    'checklist'
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
    routes
})
