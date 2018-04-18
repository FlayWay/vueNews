/**
 * Created by ljkj on 2018/1/24.
 */

import Home from './components/Home.vue'
import Follow from './components/Follow.vue'
import  Column from './components/Colum.vue'
import  UserInfo from './components/UserInfo.vue'
import  Article from './components/Article.vue'


export  default [
  {
    path:'/home',
    component:Home
  },
  {
    path:'/follow',
    component:Follow
  },
  {
    path:'/column',
    component:Column
  },
  {
    path:'/article/:id',
    component:Article
  },
  {
    path:'/user-info',
    component:UserInfo
  },
  {
    path:'/',
    redirect:'/home'
  },
  {
    path:'*',
    redirect:'/home'
  }

]
