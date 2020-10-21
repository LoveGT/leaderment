import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import 'lib-flexible' //rem转换器
// swiper组件的引入
import VueAwesomeSwiper from 'vue-awesome-swiper'

// // import style (>= Swiper 6.x)
// import 'swiper/swiper-bundle.css'
// // import 'swiper/css/swiper.css
// Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
