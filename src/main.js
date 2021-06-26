import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import {apipost,apiget,apidelete,apiput} from '@/request/http.js'

Vue.config.productionTip = false

Vue.prototype.$post = apipost
Vue.prototype.$get = apiget
Vue.prototype.$apidel = apidelete
Vue.prototype.$put = apiput

Vue.prototype.$elementMessage = function (msg,t) {
  this.$message({
    message: msg,
    type: t
  })
}

Vue.use(Element)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
