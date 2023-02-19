import { createRouter, createWebHistory } from 'vue-router'
import Products from "@/views/Products.vue";
import Comparator from "@/views/Comparator.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'products',
      component: Products
    },
    {
      path: '/comparator',
      name: 'comparator',
      component: Comparator
    }
  ]
})

export default router
