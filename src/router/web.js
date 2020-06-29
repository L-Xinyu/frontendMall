export default [
    {
        //Login
        path: '/login',
        name: 'login',
        meta: {
            title: 'Login',
        },
        component: () => import('../views/login.vue'),
    },
    {
        //Register
        path: '/reg',
        name: 'reg',
        meta: {
            title: 'register',
        },
        component: () => import('../views/reg.vue'),
    },
    {
        //Index
        path: '/',
        name: 'index',
        meta: {
            title: 'Index',
        },
        component: () => import('../views/index.vue'),
    },
    {
        //Category
        path: '/category',
        name: 'category',
        meta: {
            title: 'Category',
            // auth: 'login'
        },
        component: () => import('../views/category.vue'),
    },
    {
        //Goods Details
        path: '/detail',
        name: 'detail',
        meta: {
            title: 'Good Detail',
            // auth: 'login'
        },
        component: () => import('../views/detail.vue'),
    },
    {
        //Cart
        path: '/cart',
        name: 'cart',
        meta: {
            title: 'Cart',
            auth: 'login'
        },
        component: () => import('../views/cart.vue'),
    },
    {
        //Order
        path: '/order',
        name: 'order',
        meta: {
            title: 'Order',
            auth: 'login'
        },
        component: () => import('../views/order.vue'),
    },
    {
        //Order Pay
        path: '/pay',
        name: 'pay',
        meta: {
            title: '订单支付',
            auth: 'login'
        },
        component: () => import('../views/pay.vue'),
    },
    {
        //User Information
        path: '/mine/set',
        name: 'mine-set',
        meta: {
            title: 'User',
            auth: 'login'
        },
        component: () => import('../views/mine/set.vue'),
    },
    {
        //User Address
        path: '/mine/address',
        name: 'mine-address',
        meta: {
            title: 'User Address',
            auth: 'login'
        },
        component: () => import('../views/mine/address.vue'),
    },
    {
        //My Order
        path: '/mine/order',
        name: 'mine-order',
        meta: {
            title: 'My order',
            auth: 'login'
        },
        component: () => import('../views/mine/order.vue'),
    }
    ,
]
