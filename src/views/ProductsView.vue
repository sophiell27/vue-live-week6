<script>
import productsStore from '../stores/productsStore.js';

import productDetailStore from "../stores/productDetailStore.js"


import { mapState, mapActions } from 'pinia';
export default {
    methods: {
        ...mapActions(productsStore, ["getProducts"]),
        ...mapActions(productDetailStore, ["showProduct"])
    },
    mounted(){
        this.getProducts();
    },
    computed: {
        ...mapState(productsStore, ["products"])
    }
}
</script>

<template>

<div class="">
    
        <h1>產品頁面</h1>
        <table class="table" v-if="products">
            <thead>
                <tr>
                    <th>圖片</th>
                    <th>商品名稱</th>
                    <th>價格</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="product in products">
                    <td class=""> <img :src="product.imageUrl" :alt="product.title" class="table-img "></td>
                    <td class="w-25">{{ product.title }}</td>
                    <td class="w-25"> $ {{ product.price }}</td>
                    <td class="w-25">
                        <div class="btn-group">
                            <RouterLink class="btn btn-outline-secondary" :to="`/products/${product.id}`" >查看更多</RouterLink>
                            <button class="btn btn-outline-danger">加到購物車</button>

                        </div>
                    </td>
                </tr>
            </tbody>


        </table>
    </div>
</template>