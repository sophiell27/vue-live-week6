<script>
import cartsStore from '../stores/cartsStore.js';
import { mapActions, mapState } from 'pinia';



export default {
    computed: {
        ...mapState(cartsStore, ["carts", "total"])
    },
    methods: {
        ...mapActions(cartsStore, ["getCarts"])
    },
    mounted(){
        this.getCarts();
        
    }
}
</script>

<template>
    <h1 class="text-center my-4">購物車</h1>
    <table class="table mb-5">
        <thead>
            <tr>
            <th></th>
            <th>品名</th>
            <th>數量</th>
            <th>單價</th>
        </tr>
        </thead>
        <tbody>
            <tr v-for="item in carts" :key="item.id">
                <td> <button type="button" class="btn btn-outline-danger"> 移除購物車</button></td>
                <td>{{ item.product.title }}</td>
                <td><input type="number" min="1" class="form-control w-25" :value="item.qty" ></td>
                <td>{{ item.product.price }}</td>
            </tr>
        </tbody>
       <tfoot>
        <tr>
            <td> </td>
            <td> </td>
            <td> 總計</td>
            <td> $ {{ total }}</td>
        </tr>
       </tfoot>
    </table>
    <div class="row justify-content-center mb-5">
       <div class="col-6">
        <h2 class="text-center mb-3">訂單</h2>
        <v-form class="">
            <div class="mb-3 text-center">
                <label for="orderEmail" class="form-label">Email
                </label>
                <v-field name="Email" type="email"
                class="form-control" id="orderEmail" placeholder="請輸入Email" rules="required|email" >
                    </v-field>
                    <V-err-msg class="text-danger" name="Email"></V-err-msg>
            </div>

            <div class="mb-3 text-center">
                <label for="orderName" class="form-label ">姓名
                </label>
                <v-field name="姓名" type="text" class="form-control" id="orderName" placeholder="請輸入姓名"  rules="required">
                    </v-field>
                    <V-err-msg class="text-danger" name="姓名"></V-err-msg>
            </div>

            <div class="mb-3 text-center">
                <label for="orderPhone" class="form-label ">電話
                </label>
                <v-field name="電話" type="tel" class="form-control" id="orderPhone" placeholder="請輸入電話" rules="required">
                    </v-field>
                    <V-err-msg class="text-danger" name="電話"></V-err-msg>
            </div>

            <div class="mb-3 text-center">
                <label for="orderAddr" class="form-label ">收件人地址
                </label>
                <v-field name="地址" type="text" class="form-control" id="orderAddr" placeholder="請輸入收件人地址" rules="required">
                    </v-field>
                    <V-err-msg class="text-danger" name="地址"></V-err-msg>
            </div>

            <div class="mb-3 text-center">
                <label for="orderMsg" class="form-label " cols="30" rows="10">留言
                </label>
                <textarea  class="form-control" id="orderMsg" cols="30" rows="10"></textarea>

            </div>
            <div class="d-flex justify-content-end">
                <button class="btn btn-danger">送出訂單</button>
            </div>
        </v-form>
       </div>
    </div>

</template>