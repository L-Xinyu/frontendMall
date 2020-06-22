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
    }
]
