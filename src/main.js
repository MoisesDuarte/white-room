import Vue from 'vue'
import App from './App.vue'

// Global Stylesheet
import './assets/css/global.css';

// Reset Stylesheet
import './assets/css/reset.css';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
