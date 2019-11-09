import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { VueHammer } from 'vue2-hammer'
import firebase from 'firebase/app'

Vue.config.productionTip = false



Vue.use(VueHammer);

const firebaseConfig = {
  apiKey: "AIzaSyD1207-BV5Mv-U_y2K-_stjRRrQyRP8U8s",
  authDomain: "snake-705de.firebaseapp.com",
  databaseURL: "https://snake-705de.firebaseio.com",
  projectId: "snake-705de",
  storageBucket: "snake-705de.appspot.com",
  messagingSenderId: "764535793554",
  appId: "1:764535793554:web:99caeb25ff8be1ce0c834b"
};
firebase.initializeApp(firebaseConfig);
new Vue({
  router,
  store,
  VueHammer,
  render: h => h(App)
}).$mount('#app')

window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent Chrome 76 and later from showing the mini-infobar
  e.preventDefault();
  store.commit('setInstallPrompt', e);
});