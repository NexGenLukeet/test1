<script setup>
import svgsearch from '../svgicon/svgsearch.vue';

const backback = () => {
    
}
</script>

<template>
    <div class="backiconcontainer" @click="$router.back()">  < </div>
            <div class="topsearhinput">
                <svgsearch></svgsearch>
                <input type="text">
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