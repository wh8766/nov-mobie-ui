import Vue from 'vue'

import App from './App'
import {router} from './router/index.js'

// Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router: router,
    template: '<App/>',
    components: {App}
})
