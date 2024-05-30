<script setup>
import { useRouter } from 'vue-router';
let router = useRouter();
const backto = () => {
    console.log('asdgals')
    router.push('/home/mine')
}
</script>

<template>
    <div class="backbackback" @click="backto">
        < </div>
            <div class="thispagetitle">编辑个人资料</div>
</template>

<style>
.backbackback {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
}

.thispagetitle {
    margin: auto;
    text-align: center;
    height: 50px;
    line-height: 50px;
}
</style>