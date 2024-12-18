<script setup>

const prop = defineProps(['data'])


import { watch, ref, customRef, computed } from 'vue'


const elementNumberLeft = ref(2);
const elementNumberRight = ref(2);
let timer = null;

let stop = computed(() => {
    return elementNumberLeft.value < 9 && elementNumberRight.value < 9;
})

const scrollevent = (event) => {
    if (stop.value) {
        if (event.target.scrollTop + event.target.clientHeight > event.target.scrollHeight - 20) {
            clearTimeout(timer)
            timer = setTimeout(() => {
                if (event.target.children[0].offsetHeight < event.target.children[1].offsetHeight) {

                    elementNumberLeft.value = elementNumberLeft.value + 1;
                } else {
                    elementNumberRight.value = elementNumberRight.value + 1;
                }
            }, 50)
        }
    } else {
    }

}
</script>

<template>
    <div class="scrollvideocontainer" @scroll="scrollevent($event)">
        <div class="leftcontainer">
            <div class="oneitem" v-for="item, index in elementNumberLeft">
                <div style="height:300px;display: flex;align-items: center; background-color: black;">
                    <img :src="prop.data[index * 2].Video.videoCover" style="width: 50vw;">
                </div>
                <div style="color:white">
                    {{ prop.data[index].Video.videoDesc }}
                </div>
            </div>
            <div
                style="height: 150px;background-color: gray;display: flex;align-items: center;justify-content: center;">
                <div class="loader" v-if="stop">

                </div>
                <div v-if="!stop">
                    暂无更多数据
                </div>
            </div>
        </div>
        <div class="rightcontainer">
            <div class="oneitem" v-for="item, index in elementNumberRight">
                <div style="height:300px;display: flex;align-items: center; background-color: black;">
                    <img :src="prop.data[(index + 1) * 2 - 1].Video.videoCover" style="width: 50vw;">
                </div>
                <div style="color:white">
                    {{ prop.data[index].Video.videoDesc }}
                </div>
            </div>
            <div
                style="height: 150px;background-color: gray;display: flex;align-items: center;justify-content: center;">
                <div class="loader" v-if="stop">

                </div>
                <div v-if="!stop">
                    暂无更多数据
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.scrollvideocontainer {
    width: 100vw;
    height: calc(100vh - 100px);
    background-color: rgb(38, 36, 36);
    /* display: flex; */
    overflow: scroll;

    .leftcontainer {
        float: left;
        width: 50vw;

        .oneitem {
            /* height: 600px; */
            /* background-color: aqua; */
            margin-top: 30px;
        }
    }

    .rightcontainer {
        float: right;
        width: 50vw;
    }
}

.loader {
    border: 3px solid #f3f3f3;
    border-radius: 50%;
    border-top: 3px solid #3498db;
    width: 20px;
    height: 20px;
    animation: spin 2s linear infinite;

}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>