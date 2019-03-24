import Vue from 'vue'
import App from './App.vue'

//UI库
import 'mint-ui/lib/style.css'
import mint from 'mint-ui'

//路由组件 router
import router from './router'
//vuex   store
import store from './store'

//使用 mint 组件 (外部组件)
Vue.use(mint);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
