<script>

import adminProductStore from "../stores/adminProductStore.js";
import adminPageStore from "../stores/adminPageStore.js";
import PaginationComponent from "../components/PaginationComponent.vue";
import { mapActions, mapState } from "pinia";

export default {
   computed: {
      ...mapState(adminProductStore, ["products", "pagination"])

   },
   methods: {
      ...mapActions(adminProductStore, [ "getProducts", "checkLogin"])
     
   },
   mounted(){
      (async ()=> {
         await this.checkLogin();
         await this.getProducts(this.$route.params.pageid);
      })();
      // console.log(this.rooddd);
      
   },
   components: {
      PaginationComponent
   }
}
</script>

<template>
   <div class="" v-if="products">
   <h1>後台產品列表</h1>
   <table class="table bg-white">
      <thead>
         <tr>
            <th>分類</th>
            <th>產品名稱</th>
            <th>原價	</th>
            <th>售價</th>
            <th>是否啟用</th>
         </tr>
      </thead>
      <tbody>
         <tr v-for="product in products">
            <td>{{ product.category }}</td>
            <td>{{  product.title }}</td>
            <td>{{  product.origin_price }}</td>
            <td>{{  product.price }}</td>
            <td :class="{'text-success':product.is_enabled, 'text-danger':!product.is_enabled }"> {{ product.is_enabled? "啟用" : "未啟用" }}</td>
         </tr>
      </tbody>
      <tfoot>
         <tr>
            <td>
               <PaginationComponent></PaginationComponent>
            </td>
         </tr>
      </tfoot>
   </table>
   
   </div>
  
</template>