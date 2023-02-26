<script>
import adminPageStore from '../stores/adminPageStore.js';
import adminProductStore from '../stores/adminProductStore.js';
import { mapActions } from 'pinia';

export default {
    methods: {
        ...mapActions(adminProductStore, ["checkLogin"]),
        ...mapActions(adminPageStore, ["logout"])
        
    },
    mounted(){
       this.checkLogin();
    }
}
</script>

<template>

   <div class="bg-dark text-white min-vh-100">
    <h1 class="text-center my-3">你現在在後台頁面</h1>
<nav class="nav mb-5">
    <RouterLink class="nav-link text-white" to="/">回到前台</RouterLink>
    <RouterLink class="nav-link text-white" to="/admin/products">後台產品列表</RouterLink>
    <RouterLink class="nav-link text-white" to="/admin/orders">後台訂單</RouterLink>
    <a class="nav-link text-white" type="button" @click.prevent="logout">登出</a>
    <!-- <RouterLink class="nav-link" to="/" @clikc>登出</RouterLink> -->
</nav> 
   
<RouterView>
</RouterView>
</div>
</template>