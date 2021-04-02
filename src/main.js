import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper' // 滚屏
import 'styles/reset.css'
import 'styles/border.css' // 1像素边框解决方案
import fastClick from 'fastclick' // 解决移动端点击事件300ms延迟
import 'styles/iconfont.css' // 使用iconfont
import 'swiper/swiper-bundle.css'

Vue.config.productionTip = false

fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

// 路由就是根据网址的不同，显示给用户不同的内容
