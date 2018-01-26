import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = { template: '<div>this is home page</div>' }
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

const routes = [
    {
        path: '/',
        component: Home,
    },
    // 搜索页面
    // {
    //     path: '/search/:searchId',
    //     component: resolve => require(['../view/SearchResultView.vue'], resolve),
    //     name: 'search',
    // },
]

export const router = new VueRouter({
    linkActiveClass: 'active',
    routes
})


