<script setup>
import { ref } from 'vue';
import { useAxiosAPI } from '../../hooks/requesthooks/useAxiosAPI.js';
import validate from '../../utils/f/validate.js';

let email = ref('emial');
let password = ref('');


const showSerect = () => {
    const result = validate(password.value, [
        (val) => val.length > 5 ? true : '必须大于6',
        (val) => /[0-9a-zA-Z!@#$%^&*(),.?":{}|<>]/.test(val) ? true : '包含数字，字母，符号其中一种',
        (val) => /(?=.*[0-9])(?=.*[a-zA-Z])|(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>])|(?=.*[a-zA-Z])(?=.*[!@#$%^&*(),.?":{}|<>])/.test(val) ? true : '包含数字，字母，符号其中两种',
        (val) => /(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*(),.?":{}|<>])/.test(val) ? true : '包含数字，字母，符号其中三种'
    ])
    switch (result.error) {
        case '必须大于6':
            showsecect.value = 0;
            break;
        case '包含数字，字母，符号其中两种':
            showsecect.value = 1;
            break;
        case '包含数字，字母，符号其中三种':
            showsecect.value = 2;
            break;
        default:
            showsecect.value = 3;
            break;
    }
}

const showsecect = ref(0);
</script>
<template>
    <div>
        <input type="text" v-model="email" class="logininput">
    </div>
    <div>
        <input type="text" v-model="password" class="logininput" @input="showSerect">
        <div class="lightcontainer" v-if="showsecect !== 0">
            <div :class="showsecect > 0 ? 'light1' : 'defaultlight' " ></div>
            <div :class="showsecect > 1 ? 'light2' : 'defaultlight' " ></div>
            <div :class="showsecect > 2 ? 'light3' : 'defaultlight' " ></div>
        </div>
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

.lightcontainer {
    position: absolute;
    height: 3px;
    width: 122px;
    background-color: #face15;
    display: flex;
    justify-content: space-between;
}

.light1 {
    width: 40px;
    height: 3px;
    background-color: rgb(255, 0, 0);
    transition: all 0.2s;
}

.light2 {
    width: 40px;
    height: 3px;
    background-color: rgb(255, 255, 0);
    transition: all 0.2s;

}

.light3 {
    width: 40px;
    height: 3px;
    background-color: rgb(0, 255, 0);
    transition: all 0.2s;

}

.defaultlight {
    width: 40px;
    height: 3px;
    background-color: gray;
    transition: all 0.2s;

}

/* .lightcontainer */
</style>