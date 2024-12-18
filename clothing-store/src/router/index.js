
import Kids from '@/components/Kids.vue'
import Ladies from '@/components/Ladies.vue'
import Men from '@/components/Men.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../components/Home.vue'


const router = createRouter({
  history: createWebHashHistory(),
  routes: [
   
    {
      path: '/men',
      name: 'men',
      component: Men,
    },

    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/ladies',
      name: 'ladies',
      component: Ladies,
    }

  ],
})

export default router
