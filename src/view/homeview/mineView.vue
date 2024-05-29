<script setup>
import { ref, watch, computed } from 'vue'
import { useTouchSpeed } from '../../hooks/useTouchSpeed.js';

import minetoedit from '../../components/mineComponents/minetoedit.vue';
import selfmessage from '../../components/mineComponents/selfmessage.vue';
import mineIndex from '../../components/mineComponents/mineIndex.vue';

const scrollContainer = ref(null);
const imgContainer = ref(null);
const { ychange } = useTouchSpeed(scrollContainer);
const ychangeslow = computed(() => {
    return ychange.value / 5;
})
watch(ychangeslow, () => {
    console.log(ychange.value)
    if (ychangeslow.value == 0) {
        scrollContainer.value.style.transition = '0.2s linear'
        imgContainer.value.style.transition = '0.2s linear'
    } else {
        scrollContainer.value.style.transition = 'none'
        imgContainer.value.style.transition = 'none'
    }
})

</script>
<template>
    <div class="minechangeimgcontainer" ref="scrollContainer" :style="{ transform: `translateY(${ychangeslow}%)` }">
        <!-- <div></div> -->
        <div class="movecontainer">
            <div class="selfmessage">
                <selfmessage></selfmessage>
            </div>
            <div>
                <mineIndex></mineIndex>
            </div>
            <div>

            </div>
            
        </div>
       
    </div>
    <div class="backpositionimg">
        <img ref="imgContainer" :style="{ transform: `scale(${(2 - (100 - ychangeslow) / 100) * 1})` }"
            style=" transform-origin:center ; height: 100%; width: 100%;"
            src="http://43.138.15.137/assets/img/281578538336_.pic_hd.e816ad71.jpg" alt="">
    </div>
 <div class="minerighttopnav">
            <minetoedit></minetoedit>
        </div>
</template>

<style>

.backpositionimg {
    position: absolute;
    top: 0;
    left: 0;
    height: 200px;
    z-index: 10;
}

.minechangeimgcontainer {
    height: calc(100vh - 50px);
    overflow: hidden;
    /* background-color: white; */
    overflow: scroll;
    position: relative;
    z-index: 1000;

    .movecontainer {
        height: 1400px;
        background-color: black;
        margin-top: 200px;
        position: relative;
        z-index: 100;
        color: white;
    }
}

.selfmessage{
    width:100vw;
    position: relative;
}
.minerighttopnav{
    position: fixed;
    z-index: 100000;
    top: 10px;
    right: 10px;
    width: 30px;
    height: 30px;
}
</style>