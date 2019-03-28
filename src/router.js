import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Home',
            component: () =>
                import ('./views/Home.vue'),
        },
        {
            path: '/products',
            name: 'Products',
            component: () =>
                import ('./views/Products.vue'),
        },
        {
            path: '/register',
            name: 'Register',
            component: () =>
                import ('./views/Register.vue'),
        },
        {
            path: '/carts',
            name: 'Carts',
            component: () =>
                import ('./views/Carts.vue'),
        },
        // {
        //     path: '/checkout',
        //     name: 'Checkout',
        //     component: Checkout,
        // },
        // {
        //     path: '/checkout-1',
        //     name: 'Checkout-1',
        //     component: Checkout - 1,
        // },
        // {
        //     path: '/checkout-2',
        //     name: 'Checkout-2',
        //     component: Checkout - 2,
        // },
        // {
        //     path: '/about',
        //     name: 'about',
        //     // route level code-splitting
        //     // this generates a separate chunk (about.[hash].js) for this route
        //     // which is lazy-loaded when the route is visited.
        //     component: () =>
        //         import ( /* webpackChunkName: "about" */ './views/About.vue')
        // }
    ]
})