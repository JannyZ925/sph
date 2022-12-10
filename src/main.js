import Vue from 'vue'
import App from './App.vue'

// 引入路由
import router from "@/router";
// 引入仓库
import store from './store'
// 引入mockServer.js
import '@/mock/mockServer.js'
// 引入swiper样式
import 'swiper/css/swiper.css'

Vue.config.productionTip = false

// 引入elementUI
import ElementUI from 'element-ui';
import './assets/style/theme/index.css';
// 应用elementUI
Vue.use(ElementUI)

// 引入全局组件
import TypeNav from "@/components/TypeNav";
import Carousel from "@/components/Carousel";
// 将三级联动组件注册成全局组件（第一个参数：组件名，第二个参数：组件）
Vue.component(TypeNav.name, TypeNav)
// 将轮播图组件注册成全局组件
Vue.component(Carousel.name, Carousel)


new Vue({
  render: h => h(App),
  // 注册路由
  router,
  // 注册仓库，此时组件实例会多一个$store属性
  store,
  beforeCreate() {
    Vue.prototype.$bus = this
  }
}).$mount('#app')
