<script>
import adminLoginStore from "../stores/adminLoginStore.js"
import { mapActions } from 'pinia';

export default {
    methods: {
       ...mapActions(adminLoginStore, ["onsubmit"])
    }
}

</script>

<template>
    
        <v-form class="mt-5 mx-5" @submit="onsubmit">
        <h1 class="text-center mb-5">請先登入</h1>
        <div class="mb-3">
            <label for="loginName" class="form-label">Email address</label>
            <v-field name="username" class="form-control" placeholder="Email address" id="loginName" rules="required|email" type="email"></v-field>
            <v-err-msg name="username" class="text-danger"></v-err-msg>
        </div>

        <div class="mb-3">
            <label for="loginEmail" class="form-label">Password</label>
            <v-field name="password" class="form-control" placeholder="Password" id="loginEmail" rules="required" type="password"> </v-field>
            <v-err-msg name="password" class="text-danger"></v-err-msg>
        </div>
        <div class="d-flex justify-content-end">
            <button class="btn btn-primary">登入</button>
        </div>

    </v-form>
</template>