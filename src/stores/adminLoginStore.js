import { defineStore } from "pinia";
import axios from "axios";
import router from "../router";
const { VITE_PATH, VITE_API} = import.meta.env;

export default defineStore("adminLoginStore", {
    actions: {
        onsubmit(value){
            axios.post(`${VITE_API}admin/signin`,value)
            .then(res => {
                const { token, expired} = res.data;
                document.cookie= `week6Token=${token};expires=${new Date(expired)}`;
                router.push("/admin")
            })
            .catch(err => {
                console.log("無法登入");
            })

        }
    }
})