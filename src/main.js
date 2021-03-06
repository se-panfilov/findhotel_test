// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import './assets/style.styl'

import Vue from 'vue'
import store from 'src/vuex/store'
import App from './App'

/* eslint-disable no-new */
new Vue({
  name: 'App',
  el: '#app',
  template: '<App/>',
  components: {App},
  store
})
