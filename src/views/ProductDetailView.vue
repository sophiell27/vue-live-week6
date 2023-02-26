<script>
import productDetailStore from '../stores/productDetailStore.js';
import { mapState, mapActions } from 'pinia';
export default {
    methods: {
        ...mapActions(productDetailStore, ["showProduct"])
    },
    computed: {
      ...mapState(productDetailStore,["product"])
    },
    mounted(){
      this.showProduct(this.$route.params.productid)
    }
}

</script>

<template>
  <button class="btn  btn-sm mb-3 boder border-bottom" @click="$router.push({name: 'products'})">返回</button>
  <div class="" v-if="product">
    <h1>{{ product.title }}</h1>
    <div class="row">
      <div class="col-4">
        <img :src="product.imageUrl" :alt="product.title" class="img-fluid">
      </div>
      <div class="col-8">
        <p class="badge bg-primary"> {{ product.category }}</p> 
        <p>商品描述： {{ product.description }}</p>
        <p class="mb-4">商品內容： {{ product.content }}</p>
        <p>原價 <del>{{ product.origin_price }}</del> 元</p>
        <h4>現在只要 {{product.price}} 元</h4>
        <div class="btn-group btn-group-sm">
          <input type="number" min="1" class="form-control" :value="1">
          <button class="btn btn-primary w-100">加入購物車</button>
        </div>

      </div>
    </div>
  </div>


</template>