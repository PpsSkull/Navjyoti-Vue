import Vue from 'vue'
import App from './App.vue'
//import cmp1 from './components/cmp1.vue'


Vue.config.productionTip = false
//Vue.component('fcmp', cmp1);

new Vue({
  render: h => h(App),
}).$mount('#app')
