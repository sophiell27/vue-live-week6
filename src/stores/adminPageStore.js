import { defineStore } from "pinia";
import axios from 'axios';
import router from "../router";
const { VITE_PATH, VITE_API} = import.meta.env;

export default defineStore("adminPageStore", {
    actions: {
        
        logout(){
            axios.post(`${VITE_API}logout`)
            .then(res => {
                alert("登出成功");
                router.push("/");

            })
            .catch(err => {
                console.log("登出失敗");
            })
        }
    }
})