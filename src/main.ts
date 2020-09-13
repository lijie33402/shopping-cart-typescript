import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { currency } from './currency';

Vue.filter('currency', currency);

Vue.config.productionTip = false;

const app = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
