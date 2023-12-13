import Vue from 'vue'
import App from './App'
import './uni.promisify.adaptor'
import VueI18n from 'vue-i18n';
import messages from './locale/index';

Vue.use(VueI18n);
const i18n = new VueI18n({
  locale: 'zh',
  messages,
});

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
  i18n,
  ...App,
})
app.$mount()
