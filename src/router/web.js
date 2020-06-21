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
        //Index
        path: '/',
        name: 'index',
        meta: {
            title: 'Index',
            // auth: 'login'
        },
        component: () => import('../views/index.vue'),
    },
    {
        //分类商品
        path: '/category',
        name: 'category',
        meta: {
            title: '分类商品',
            // auth: 'login'
        },
        component: () => import('../views/category.vue'),
    },
]
