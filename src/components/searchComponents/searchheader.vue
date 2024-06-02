<script setup>
import svgsearch from '../svgicon/svgsearch.vue';
import {ref}from 'vue';

const searchText = ref('34');

const emit = defineEmits(['usersearch']);
const usersearch = ()=> {
    emit('usersearch',searchText);
}
</script>

<template>
    <div class="backiconcontainer" @click="$router.back()">  < </div>
            <div class="topsearhinput">
                <div @click="usersearch">
                     <svgsearch></svgsearch>
                </div>
                <input type="text"  v-model="searchText">
            </div>
</template>

<style>
.backiconcontainer {
    width: 10vw;
    text-align: center;
    color: white;
}

.topsearhinput {
    width: 90vw;
    background-color: #242630;
    height: 40px;
    align-items: center;
    border-radius: 5px;
    display: flex;

    input {
        border: none;
        outline: none;
        background-color: #242630;
    }
}
</style>