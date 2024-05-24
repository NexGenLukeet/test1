<script setup>
import loginForm from '../../components/accountComponents/loginForm.vue';

</script>

<template>
    <div class="logintopcontainer">

    </div>
    <div class="loginwelcomecontainer">
        登录后展示自己
    </div>
    <div class="loginformcontainer">
        <loginForm></loginForm>
    </div>
</template>

<style>
.logintopcontainer{
    height: 50px;
}
.loginwelcomecontainer{
    margin: auto;
    margin-top: 50px;
    height: 20px;
    width:80vw;
}
.loginformcontainer{
    margin: auto;
    margin-top: 20px;
    width:80vw;
    height: 60px;

}
</style>