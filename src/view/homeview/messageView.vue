<script setup>
import messagebody from '../../components/messageComponents/messagebody.vue'
import messageheader from '../../components/messageComponents/messageheader.vue'
import messageindex from '../../components/messageComponents/messageindex.vue'

import { useRouter } from 'vue-router'
let router = useRouter()
const gotocontracts = () => {
    router.push('/contracts')
}
</script>
<template>
    <div class="messagecontainerheader">
        <messageheader @gotocontracts="gotocontracts"></messageheader>
    </div>
    <div class="messagecontainerindex">
        <messageindex></messageindex>
    </div>
    <div class="messagecontainerbody">
        <messagebody></messagebody>
    </div>
</template>

<style>
.messagecontainerheader {
    height: 50px;
    background-color: black;
    position: relative;
}

.messagecontainerindex {
    height: 100px;
    width: 100vw;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.messagecontainerbody {
    height: calc(100vh - 200px);
}
</style>