<script setup>
import loginForm from '../../components/accountComponents/loginForm.vue';
import loginHeader from '../../components/accountComponents/loginHeader.vue';

import { useRouter } from 'vue-router';
const router = useRouter();

const gotosignup = () => {
    router.push({ path: '/account/signup' })
}

const goback = () => {
    router.push({ path: '/home/mainpage' })
}


// import { useUserStore } from '@/store/user';
import { useUserStore } from '../../store/useUserStore.js';
const store = useUserStore();
import { postlogin } from '../../API/login.js';
const logindata = (data) => {
    postlogin().then(res => {
        store.userId = res.data.data.userId
    });
}

</script>

<template>
    <div style="width: 100vw;height: 100vh;">
        <div class="logintopcontainer">
            <loginHeader @gotosignup="gotosignup" @goback="goback"></loginHeader>
        </div>
        <div class="loginwelcomecontainer">
            登录后展示自己
        </div>
        <div class="loginformcontainer">
            <loginForm @loginRight="logindata"></loginForm>
        </div>
    </div>

</template>

<style>
.logintopcontainer {
    height: 50px;
}

.loginwelcomecontainer {
    margin: auto;
    margin-top: 50px;
    height: 20px;
    width: 80vw;
}

.loginformcontainer {
    margin: auto;
    margin-top: 20px;
    width: 80vw;
    height: 60px;

}
</style>