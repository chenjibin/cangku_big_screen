import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'main',
            component: (resolve) => require(['../components/main.vue'], resolve)
        },
        {
            path: '/warehouse',
            name: 'warehouse',
            component: (resolve) => require(['../components/warehouse.vue'], resolve)
        },
        {
            path: '/shop',
            name: 'shop',
            component: (resolve) => require(['../components/shop.vue'], resolve)
        }
    ]
})
