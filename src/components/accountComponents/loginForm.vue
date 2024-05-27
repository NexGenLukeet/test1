<script setup>
import { ref } from 'vue';
// import { useAxiosAPI } from '../../hooks/requesthooks/useAxiosAPI.js';
import {postlogin} from '../../API/login.js';

let email = ref('emial');
let password = ref('');

const vaild = (event) => {
    if (event.key == 'Enter') {
       
        postlogin();
    }
}

</script>
<template>
    <div>
        <input type="text" v-model="email" class="logininput">
    </div>
    <div>
        <input type="text" v-model="password" class="logininput" @keydown="vaild($event)">
    </div>
</template>

<style>
.logininput {
    outline: none;
    border: none;

    width: 100%;
    height: 44px;
    color: #000;
    background: rgba(238, 238, 238, 0.36);
    padding-left: 10px;
    margin-bottom: 10px;
    border-radius: 4px px;
    caret-color: #face15;
}
</style>