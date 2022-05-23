import Vue from 'vue'
import App from './App.vue'
//引入路由
import router from '@/router'
//引入仓库
import store from '@/store'
//三级联动组件--全局组件
import TypeNav from '@/components/TypeNav'
//轮播图组件--全局组件
import Carousel from '@/components/Carousel'
//注册全局组件
Vue.component(TypeNav.name,TypeNav);
Vue.component(Carousel.name,Carousel);
//引入serve.js --- mock数据
import '@/mock/serve'
//引入swiper样式
import "swiper/css/swiper.css"
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
