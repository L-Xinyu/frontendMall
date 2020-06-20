export default [
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
