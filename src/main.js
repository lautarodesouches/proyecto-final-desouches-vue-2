import Vue from 'vue'
// -----------------------------------------------
import App from './App.vue'
// -----------------------------------------------
import VueRouter from 'vue-router'
// -----------------------------------------------
import VueAxios from 'vue-axios'
import axios from 'axios'
// -----------------------------------------------
import { routes } from './routes/router'
// -----------------------------------------------
import store from './store'
// -----------------------------------------------
Vue.use(VueRouter)
// -----------------------------------------------
Vue.use(VueAxios, axios)
// -----------------------------------------------
const router = new VueRouter({
  mode: 'history',
  routes
})
// -----------------------------------------------
router.beforeEach(async (to, from, next) => {

  let isAuthenticated = !!store.getters.getUser

  if (!isAuthenticated && to.name !== 'Login' && to.name !== 'Register') next({ path: '/login' })
  else next()

})
// -----------------------------------------------
new Vue({
  router,
  data() {
    return {
    }
  },
  store,
  render: h => h(App)
}).$mount('#app')