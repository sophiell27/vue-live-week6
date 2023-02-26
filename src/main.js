import { createApp } from 'vue'
import { createPinia } from 'pinia'

import axios from 'axios'
import VueAxios from 'vue-axios'

import App from './App.vue'
import router from './router'

import { defineRule, configure } from 'vee-validate';
import AllRules from '@vee-validate/rules';
// import { required, email, min } from '@vee-validate/rules';
Object.keys(AllRules).forEach(rule => {
  defineRule(rule, AllRules[rule]);
});
import { localize, setLocale} from '@vee-validate/i18n';
import zh_TW from '@vee-validate/i18n/dist/locale/zh_TW.json';

// console.log(zh_TW);
configure({
  generateMessage: localize({
    zh_TW
  })
});
setLocale("zh_TW")
// console.dir(localize);

const pinia = createPinia();

// pinia.use(({ store }) => {
//   store.$router = markRaw(router);
//   store.$axios = markRaw(axios);
//   store.$http = app.$http;
// });


import { Field, Form, ErrorMessage } from 'vee-validate';




// import './assets/main.css'

const app = createApp(App)



app.use(createPinia())
app.use(router)
app.use(VueAxios, axios)

app.component("VForm", Form),
app.component("VField", Field),
app.component("VErrMsg", ErrorMessage),ErrorMessage


app.mount('#app')
