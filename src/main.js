import Vue from 'vue'
import MintUI from 'mint-ui'
import App from './App.vue'
import 'mint-ui/lib/style.css'

Vue.config.productionTip = false
Vue.use(MintUI)
new Vue({
  render: h => h(App),
}).$mount('#app')
