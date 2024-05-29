import { createMemoryHistory, createRouter } from 'vue-router'

// 主页一级路由
import home from '../view/home.vue';
// 对应的二级路由；
import mainpage from '../view/homeview/mainPageView.vue';
import followView from '../view/homeview/followView.vue';
import messageView from '../view/homeview/messageView.vue';
import mineView from '../view/homeview/mineView.vue';


// 账户的登录和注册
import account from '../view/accountView.vue';
import loginView from '../view/accountView/loginView.vue';
import signupView from '../view/accountView/signupView.vue';

// 专门处理搜索的视图；
import search from '../view/searchView.vue';

// 处理联系人的视图；
import contracts from '../view/contractsView.vue'

const routes = [
  // { path: '/', redirect: '/account/login' },
  // { path: '/', redirect: '/search' },
  { path: '/', redirect: '/home/mine' },
  {
    path: '/home', component: home,
    children: [
      { path: 'mainpage', component: mainpage },
      { path: 'follow', component: followView },
      { path: 'message', component: messageView },
      { path: 'mine', component: mineView },
    ]
  },
  {
    path: '/account', component: account,
    children: [
      { path: 'login', component: loginView },
      { path: 'signup', component: signupView }
    ]
  },
  {
    path:'/search',
    component:search,
  },
  {
    path:'/contracts',
    component:contracts,
  }

]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router