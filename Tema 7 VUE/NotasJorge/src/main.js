import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { VueFire, VueFireAuth } from 'vuefire'
import { firebaseApp } from './firebase.js'

import { createWebHistory, createRouter } from 'vue-router'

import LandingPage from './components/LandingPage.vue'
import Recordatorios from './components/Recordatorios.vue'
import Login from './components/Login.vue'


const routes = [
  { path: '/', component: LandingPage, meta:{requiresAuth: false} },
  { path: '/recordatorios', component: Recordatorios, meta:{requiresAuth: true} },
  { path: '/loguearse', component: Login, meta:{requiresAuth: false} }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})





//createApp(App).mount('#app')
const app = createApp(App)

app.use(VueFire, {
    // imported above but could also just be created here
    firebaseApp,
    modules: [
      // we will see other modules later on
      VueFireAuth(),
    ],
  })

  app.use(router);
  
  app.mount('#app')
