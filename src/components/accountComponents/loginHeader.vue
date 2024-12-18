<script setup>
const emit = defineEmits(['gotosignup','goback'])

const signupaccount = () => {
    emit('gotosignup')
}
const goback = () => {
    emit('goback')
}
</script>

<template>
    <div class="loginheadercontainer">
        <div class="loginclosecontainer" @click="goback">×</div>
        <div class="logintosignup" @click="signupaccount">注册账号</div>
    </div>
</template>

<style>
.loginheadercontainer {
    width: 100vw;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.loginclosecontainer {
    height: 50px;
    width: 50px;
    line-height: 50px;
    margin-left: 20px;
}

.logintosignup {
    height: 50px;
    line-height: 50px;
    margin-left: 20px;
    padding: 20px;
}
</style>