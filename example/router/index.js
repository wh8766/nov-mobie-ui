import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import home from '../pages/home'

let pageRoutes = [
    'feedback',
    'loading',
    'form',
    'button',
    'other',
    'upload',
    'scratch',
    'preview',
    'group',
    'cell',
    'xtextarea',
    'checker',
    'checklist',
    'xinput',
    'toast'
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
