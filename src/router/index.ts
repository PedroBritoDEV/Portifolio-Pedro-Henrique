import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'sobre',
      component: () => import('../views/SobreView.vue'),
      meta: { transition: 'slide-left' },
    },
    {
      path: '/projetos',
      name: 'projetos',
      component: () => import('../views/ProjetosView.vue'),
      meta: { transition: 'slide-left' },
    },
    {
      path: '/tecnologias',
      name: 'tecnologias',
      component: () => import('../views/TecnologiasView.vue'),
      meta: { transition: 'slide-left' },
    }
  ]
})

export default router
