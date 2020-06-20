import Vue from 'vue'
import Router from 'vue-router'
import web from './web'

Vue.use(Router);

const router = new Router({
    mode: 'hash',
    routes: web
});

//beforeEach是router的钩子函数，在进入路由前执行
router.beforeEach((to, from, next) => {
    console.log("Before routing");
    if (to.meta.title) {
        document.title = to.meta.title
    }
    console.log(to.meta);
    if (to.meta.auth === 'login') {
        let token = localStorage.getItem("token");
        console.log("Token:" + token);
        if (token === undefined || token === '' || token == null) {
            router.replace({
                name: "login",
                query: {redirect: to.fullPath}
            })
        }
    }
    next();
});
//路由后执行
router.afterEach((to, from) => {
    console.log("After routing")
});

export default router
