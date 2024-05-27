<script setup>
import loginForm from '../../components/accountComponents/loginForm.vue';
import loginHeader from '../../components/accountComponents/loginHeader.vue';

import { useRouter } from 'vue-router';
const router = useRouter();

const gotosignup = () => {
    // console.log(router)
    router.push({ path: '/account/signup' })
}

const goback = () => {
    console.log('000asdf')
    router.push({path:'/home/mainpage'})
}
// console.log(router)

</script>

<template>
    <div class="logintopcontainer">
        <loginHeader @gotosignup="gotosignup" @goback="goback"></loginHeader>
    </div>
    <div class="loginwelcomecontainer">
        登录后展示自己
    </div>
    <div class="loginformcontainer">
        <loginForm></loginForm>
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