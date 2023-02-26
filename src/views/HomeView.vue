<script>
export default {
  mounted(){
    // console.log(this.$router.push("/home"));
  }
}
</script>

<template>
<h1 class="text-center my-3">你現在在前台頁面</h1>
<nav class="nav mb-5">
    <RouterLink class="nav-link" to="/">首頁</RouterLink>
    <RouterLink class="nav-link" to="/products">前台產品列表</RouterLink>
    <RouterLink class="nav-link" to="/carts">前台購物車</RouterLink>
    <RouterLink class="nav-link" to="/admin-login">後台購物車列表</RouterLink>
</nav> 
<RouterView>
</RouterView>
</template>