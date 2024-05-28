<script setup>
import { ref, computed } from 'vue';

let email = ref('');
let password = ref('');
const right = computed(() => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value) && password.value.length > 6;
})

let emit = defineEmits(['loginRight'])

const vaild = (event) => {
    if (event.key == 'Enter') {
        if(right.value == true){
            emit('loginRight', 'data')
        }else{
            // 错误信息；
        }
        emit('loginRight', 'data')
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