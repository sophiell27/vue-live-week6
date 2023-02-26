import { defineStore } from "pinia";
import axios from "axios";
import router from "../router";
const { VITE_PATH, VITE_API} = import.meta.env;

export default defineStore("adminProductStore", {
    state: ()=> ({
        products: [],
        pagination: {},
    }),
    actions: {
        async checkLogin() {
            const token = document.cookie.replace(/(?:(?:^|.*;\s*)week6Token\s*\=\s*([^;]*).*$)|^.*$/, "$1");
        axios.defaults.headers.common['Authorization'] = token;
          try {
                const res = await axios.post(`${VITE_API}api/user/check`);
                console.log("驗證成功!");
            } catch (err) {
                confirm("請先登入");
                router.push("/Admin-login");
            }

        },
        async getProducts(pageId =1){
                try {
                const res = await axios.get(`${VITE_API}api/${VITE_PATH}/admin/products/?page=${pageId}`);
                this.products = res.data.products;
                this.pagination = res.data.pagination;
            } catch (err) {
                confirm("無法取得產品列表");
                console.log(err);
            }
                
            
        }
    }
})