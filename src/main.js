import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueRouter from 'vue-router'
import router from './router/index.js'
import Vuex from 'vuex'
import store from './store'
import './mock/index'
import axios from 'axios'
import * as echarts from 'echarts';
import less from 'less'
import './assets/style/index.less'
import './moment/moment'

Vue.prototype.$axios = axios;
Object.defineProperties(Vue.prototype, {
  echarts: { get: () => echarts }
});



Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(less)


new Vue({
  render: h => h(App),
  store,
  router,
  axios
}).$mount('#app')
