import { defineStore } from "pinia";
import axios from "axios";
const { VITE_PATH, VITE_API} = import.meta.env;

export default defineStore("cartsStore", {
    state: ()=> ({
        carts: [],
    }),
    getters: {
        total: ({carts}) => {
            return  carts.reduce((a,b)=> a+b.final_total,0)
        }
    },
    actions: {
        getCarts(){
            axios.get(`${VITE_API}api/${VITE_PATH}/cart`)
            .then(res => {
                this.carts = res.data.data.carts;
                
                // this.total = this.carts.reduce((a,b) => a+b.final_total, 0)
            })
            .catch(err => {
                console.log(err);
            })
        }
    }
})