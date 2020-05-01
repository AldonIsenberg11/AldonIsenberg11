import Vue from 'vue'
// import App from './app/AppLayout.vue'
import VuetifyTest from './app/VuetifyTest.vue'
import router from './router'
import vuetify from './vuetify'

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  // render: h => h(App)
  render: h => h(VuetifyTest)
}).$mount('#app')