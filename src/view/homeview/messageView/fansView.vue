<script setup>
import fansheader from '../../../components/messageComponents/fansheader.vue'
import fansbody from '../../../components/messageComponents/fansbody.vue'
</script>
<template>
    <div class="messagefansviewcontainer">
        <div class="fanslistheader">
            <fansheader></fansheader>
        </div>
        <div class="fanslistbody">
            <fansbody></fansbody>
        </div>
    </div>
</template>

<style>
.messagefansviewcontainer{
    width: 100vw;
    height: 100vh;
    background-color: white;
    position: absolute;
    left: 0;
    top: 0;
}
.fanslistheader{
    height: 50px;
    width:100vw;
}
.fanslistbody{
    width:100vw;
    height: calc(100vh - 50px);
}
</style>