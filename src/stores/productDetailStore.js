import { defineStore } from "pinia";
import axios from "axios";

import productsStore from "./productsStore.js";
const { VITE_PATH, VITE_API}  = import.meta.env


export default defineStore("productDetailStore", {
    state: () =>({
        product: {}
    }),
    actions: {
        showProduct(routeId){
            axios.get(`${VITE_API}api/${VITE_PATH}/product/${routeId}`)
            .then(res => {
                this.product=res.data.product;
            })
            .catch(err => {
                console.log(err);
            })
            
        }
    }
})