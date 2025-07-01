import { ViteSSG } from 'vite-ssg'
import routes from '~pages'
import App from './App.vue'

export const createApp = ViteSSG(App, {
  base: import.meta.env.BASE_URL,
  routes: [
    ...routes,
    {
      path: '/:pathMatch(.*)*',
      component: () => import('@/pages/404.vue'),
    },
  ],
})
