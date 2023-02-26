import { defineStore } from "pinia";
import axios from "axios";


const { VITE_API, VITE_PATH } = import.meta.env;


export default defineStore("productsStore", {
    state: ()=> ({
        products: []
    }),
    actions: {
        getProducts(){
            const url = `${VITE_API}api/${VITE_PATH}/products/all`;
            
            axios.get(url)
            .then(res => {
                this.products = res.data.products
            })
            .catch(err => {
                console.log("無法取得產品");
            })
            
        }
    }
})