import Vue from 'vue'
import Router from 'vue-router'
import home from './home.js'
import login from './login.js'


Vue.use(Router)

const router = new Router({
    routes:[
        ...home,
        ...login
    ]
    
})
// 路由前置守卫
router.beforeEach((to, from, next) => {
    // 判断是否登录
    const token = localStorage.getItem('token')
    console.log();
    if (!token && to.path === '/') {
        next('/login')
    } else {
      next()
    }
  })
export default router
