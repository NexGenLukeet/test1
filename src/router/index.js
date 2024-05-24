import { createMemoryHistory, createRouter } from 'vue-router'

// 主页一级路由
import home from '../view/home.vue';
// 对应的二级路由；
import mainpage from '../view/homeview/mainPageView.vue'

// 账户的登录和注册
import account from '../view/accountView.vue';
import loginView from '../view/accountView/loginView.vue';
import signupView from '../view/accountView/signupView.vue';

const routes = [
  { path: '/', redirect: '/home/mainpage' },
  {
    path: '/home', component: home,
    children: [
      { path: 'mainpage', component: mainpage }
    ]
  },
  {
    path: '/account', component: account,
    children: [
      { path: '/login', component: loginView },
      { path: '/signup', component: signupView }
    ]
  }

]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router