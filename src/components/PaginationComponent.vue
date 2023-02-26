<script>
import adminProductStore from '../stores/adminProductStore.js';
import { mapState, mapActions } from 'pinia';
export default {
    computed: {
        ...mapState(adminProductStore, ["pagination"])
    },
    methods: {
        ...mapActions(adminProductStore, ["getProducts"])
    }
}
</script>
<template >
       <div
        v-if="pagination">
    <nav aria-label="Page navigation">
  <ul class="pagination" >

    <li class="page-item" :class="{'disabled':! pagination.has_pre}">
        <RouterLink class="page-link" :to="`/admin/products/${pagination.current_page-1}`" aria-label="Previous" @click="getProducts(pagination.current_page-1)">  <span aria-hidden="true">&laquo;</span></RouterLink>
      <!-- <a class="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a> -->
    </li>
    <li class="page-item" :class="{'active': page === pagination.current_page}"  v-for="page in pagination.total_pages" :key="'page' + page">
        <RouterLink class="page-link" :to="`/admin/products/${page}`" @click="getProducts(page)">{{ page }}</RouterLink>
    </li>
    
    <li class="page-item" :class="{'disabled':! pagination.has_next}">
        <RouterLink class="page-link" :to="`/admin/products/${pagination.current_page+1}`" @click="getProducts(pagination.current_page+1)" aria-label="Next"> <span aria-hidden="true">&raquo;</span></RouterLink>
    </li>
  </ul>
</nav>
       </div>
</template>