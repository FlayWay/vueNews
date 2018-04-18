import Vue from 'vue'
import App from './App.vue'
import  VueRouter from '../bower_components/vue-router/dist/vue-router'
import routerConfig from './router.config'
import Loading from './components/loading'
import  store from  './store/index'

import axios from  '../bower_components/axios/dist/axios'
// import  normalTime from  './filters/index'

import filters from  './filters/'


console.log("1233132",filters);

Object.keys(filters).forEach(key => Vue.filter(key, filters[key]));


console.log(Loading);

Vue.use(VueRouter);
Vue.use(Loading);




//发送请求
axios.interceptors.request.use(function (config) {

  // $store.dispatch('')
  return config;

},function (error) {

  return Promise.reject(error);

});

//配置请求根路径
// axios.defaults.baseUrl='http://localhost:8080/';
//设置post头部信息
// axios.defaults.headers.post['Content-Type'] = 'application/x-wwww-form-urlencoded';

//请求响应
axios.interceptors.response.use(function (response) {

  return response;

},function (error) {

  return Promise.reject(error);
});

//其他页面在使用axios直接使用this.$http就可以了
Vue.prototype.$http = axios;


//全局引入
require('./assets/css/base.css');

const  router = new VueRouter({

  scrollBehavior:()=>({y:0}),
  routes:routerConfig

});



new Vue({
  el: '#app',
  router:router,
  store,
  render: h => h(App)
})
