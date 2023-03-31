import { createRouter, createWebHistory } from 'vue-router'

import Connexion from "@/views/Connexion.vue"
import Inscription from "@/views/Inscription.vue"
import Products from "@/views/Products.vue";
import Comparator from "@/views/Comparator.vue";
import ProductDetails from "@/views/ProductDetails.vue";
import ProductCompare from "@/views/ProductCompare.vue";
import NewProduct from "@/views/NewProduct.vue";
import UpdateProduct from "@/views/UpdateProduct.vue";
import UserInfo from "@/views/UserInfo.vue";
import UpdatePassword from "@/views/UpdatePassword.vue";
import UpdateProfil from "@/views/UpdateProfil.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Products',
      component: Products
    },
    {
      path: '/user',
      name: 'UserInfo',
      component: UserInfo
    },
    {
      path: '/user/password',
      name: 'UpdatePassword',
      component: UpdatePassword
    },
    {
      path: '/user/update',
      name: 'UpdateProfil',
      component: UpdateProfil
    },
    {
      path: '/connexion',
      name: 'connexion',
      component: Connexion
    },
    {
      path: '/inscription',
      name: 'inscription',
      component: Inscription
    },
    {
      path: '/comparator',
      name: 'Comparator',
      component: Comparator
    },
    {
      path: '/product/:id',
      name: 'ProductDetails',
      component: ProductDetails,
      props : true
    },
    {
      path: '/product/:id/update',
      name: 'UpdateProduct',
      component: UpdateProduct,
      props : true
    },
    {
      path: '/product-compare',
      name: 'ProductCompare',
      component: ProductCompare,
    },
    {
      path: '/product/new',
      name: 'NewProduct',
      component: NewProduct,
    }
  ]
})

router.beforeEach((to, from, next) => {
  document.body.classList.add('page-transition');
  next();
});

router.afterEach(() => {
  document.body.classList.remove('page-transition');
});

export default router
