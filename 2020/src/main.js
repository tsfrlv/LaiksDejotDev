import Vue from 'vue'
import { BootstrapVue } from 'bootstrap-vue'
import VueI18n from 'vue-i18n'
import VueRouter from 'vue-router'
import App from './App.vue'
import Program from '@/components/Program'
import Workshops from '@/components/Workshops'

Vue.config.productionTip = false

Vue.use(VueI18n)
Vue.use(VueRouter)
Vue.use(BootstrapVue)

const routes = [
    { path: '/', component: Program },
    { path: '/workshops', component: Workshops }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

new Vue({
    render: h => h(App),
    router
}).$mount('#app')
