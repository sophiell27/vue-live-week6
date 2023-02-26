import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      
      component: ()=>import("../views/HomeView.vue"),
      children: [
        {
          path: "",
          name: "home",
          component: ()=>import("../views/IndexView.vue")
        },
        {
          path: "products",
          name: "products",
          component: ()=>import("../views/ProductsView.vue"),
        },
        {
          path:"products/:productid",
          component: ()=> import("../views/ProductDetailView.vue")
        },
        {
          path: "carts",
          component: ()=>import("../views/CartsView.vue")
        },
        
      ]
    },
    {
      path: "/admin-login",
      component: ()=>import("../views/AdminLogin.vue")
    },
    {
      path: "/admin",
      component: ()=>import("../views/AdminPageView.vue"),
      // redirect:{name:'adminproduct'},
      children: [
        {
          path: "",
          name: "adminproduct",
          component: ()=>import("../views/AdminProductsView.vue")
        },
        {
          path: "products",
          component: ()=>import("../views/AdminProductsView.vue")
        },
        {
          path: "products/:pageid",
          component: ()=>import("../views/AdminProductsView.vue")
        },
        {
          path: "orders",
          component: ()=>import("../views/AdminOrder.vue")
        }
      ]
    }
  ]
})

export default router
