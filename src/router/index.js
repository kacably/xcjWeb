import Vue from 'vue'
import Router from 'vue-router'
import login from '@components/login/login'
import regist from '@/components/login/regist'
import main from '@/components/main/main'
import home from '@/components/home/home'
import deploy from '@components/user/deploy'
import test from '@components/test/testVmodal'
import selecttest from '@components/test/select'

Vue.use(Router)

const Routes = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        name: '登录页面',
        component:login
    },
    {
        path: '/welcome',
        name: '欢迎页面',
        component:main,
        children:[
          {
            path: '/deploy',
            name: '配置',
            component:deploy
          },
          {
            path: '/home',
            name: '首页',
            component:home
          }
        ]
    },
    {
      path: '/regist',
      name: '注册页面',
      component:regist
    },
    {
      path: '/deploy',
      name: '配置',
      component:deploy
    },
    {
      path: '/test',
      name: '测试',
      component:test
    },
    {
      path: '/selecttest',
      name: '下拉框测试',
      component:selecttest
    },
]

const createRouter = () => new Router({
    mode: 'history',
    routes: Routes
})

const router = createRouter()

export default router;
