import Home from '@/components/Home.vue'
import Kids from '@/components/Kids.vue'
import Ladies from '@/components/Ladies.vue'
import Men from '@/components/Men.vue'
import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/men',
      name: 'men',
      componenent: Men,
    },

    {
      path: '/kids',
      name: 'kids',
      componenent: Kids,
    }
    {
      path: '/ladies',
      name: 'ladies',
      componenent: Ladies,
    }

  ],
})

export default router
