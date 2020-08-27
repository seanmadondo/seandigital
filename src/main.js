import Vue from 'vue'
import App from './App.vue'
import Home from './Home.vue'
import Music from './Music.vue'
import Software from './Software.vue'

//importing Vue Router
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import { BootstrapVue, IconsPlugin} from 'bootstrap-vue'
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

//Application Routes
const routes = [
  {
    path: "/",
    component: Home
  },

  {
    path: "/music",
    name: 'music',
    component: Music
  },

  {
    path: "/software",
    name: "software",
    component: Software
  }
]

const router = new VueRouter({
  routes: routes,
  mode: "history"
});

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
