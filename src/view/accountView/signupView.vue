<script setup>
import signupForm from '../../components/accountComponents/signupForm.vue';
import signupHeader from '../../components/accountComponents/signupHeader.vue';

</script>

<template>
     <div class="logintopcontainer">
        <signupHeader></signupHeader>
    </div>
    <div class="loginwelcomecontainer">
        注册
    </div>
    <div class="loginformcontainer">
        <signupForm></signupForm>
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