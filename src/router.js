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
            meta: { title: '首頁' },
        },
        {
            path: '/products',
            name: 'Products',
            component: () =>
                import ('./views/Products.vue'),
            meta: { title: '產品列表' },
        },
        {
            path: '/register',
            name: 'Register',
            component: () =>
                import ('./views/Register.vue'),
            meta: { title: '註冊頁面' },
        },
        {
            path: '/carts',
            name: 'Carts',
            component: () =>
                import ('./views/Carts.vue'),
            meta: { title: '購物車' },
        },
        {
            path: '/checkout',
            name: 'Checkout',
            component: () =>
                import ('./views/Checkout.vue'),
            meta: { title: '結帳' },
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