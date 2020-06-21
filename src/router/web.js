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
]
