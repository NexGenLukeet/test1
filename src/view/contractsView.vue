<script setup>
import {ref}from 'vue';
import contractsbody from '../components/contractsComponents/contractsbody.vue'
import contractsheader from '../components/contractsComponents/contractsheader.vue'
import contractssearch from '../components/contractsComponents/contractssearch.vue'

import getcontractAPI from '../API/getcontractAPI.js';
import useAsyncState from '../hooks/useAsyncState.js';

let { responsedata, isdone } = useAsyncState(getcontractAPI());


</script>
<template>
    <div class="contractscontainerheader">
        <contractsheader></contractsheader>
    </div>
    <div class="contractscontainersearch">
        <contractssearch></contractssearch>
    </div>
    <div class="contractscontainerbody">
        <contractsbody v-if="isdone" :data="responsedata"></contractsbody>
    </div>
</template>

<style>
.contractscontainerheader {
    height: 50px;
    position: relative;
    background-color: black;
    color: white;
}

.contractscontainersearch {
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: black;
}

.contractscontainerbody {
    height: calc(100vh - 100px);
    position: relative;
}
</style>