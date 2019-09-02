import Vue from 'vue'
import Vuex from 'vuex'

import App from './App.vue'
import state from './store/index'

Vue.config.productionTip = false
Vue.use(Vuex)

const store  = new Vuex.Store(state);
store.commit("createCounters");

new Vue({
  store: store,
  render: h => h(App),
}).$mount('#app')
