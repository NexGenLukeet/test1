<script setup>
import { onMounted, ref, watch, computed } from 'vue';
const prop = defineProps(['imgbaseurl'])
const emit = defineEmits(['editedimg'])

const img = ref(null);
const bigimg = ref(null);
const canvas = ref(null);
const canvasctx = ref(null);
onMounted(() => {
    const ctx = canvas.value.getContext("2d");
    canvasctx.value = ctx;
    img.value.src = prop.imgbaseurl;
    bigimg.value.src = prop.imgbaseurl;
    // ctx.drawImage(img.value, 0, 0, canvas.value.width, canvas.value.height);
    // 先用小图片模拟，最后直接截取到
});

const imgcontainer = ref(null);
const cripmovecontainer = ref(null);
watch(imgcontainer, () => {
    if (imgcontainer.value) {
        const imgwidth = window.getComputedStyle(imgcontainer.value).getPropertyValue("width");
        const imgheight = window.getComputedStyle(imgcontainer.value).getPropertyValue("height");
        //大容器和图片保持一致
        cripmovecontainer.value.style.width = imgwidth;
        cripmovecontainer.value.style.height = imgheight;

        // 小容器200 * 200；里面的图片和图片保持一致大小
        bigimg.value.style.width = imgwidth;
        bigimg.value.style.height = imgheight;
        bigwidth.value = imgwidth;
        bigheight.value = imgheight;
    }
})
/**
 * 关于大容器 小移动容器 大图片，采用比例的关系进行
 * 首先要移动小容器，借助父元素的百分比进行定位。
 * 得到百分比后，直接让里面的大图片translate就可以。
 */
const bigwidth = ref(0);
const bigheight = ref(0);

const dragmoveX = ref(0);
const dragmoveY = ref(0);

const temdragmoveX = ref(0);
const temdragmoveY = ref(0);

const temstartX = ref(0);
const temstartY = ref(0);
const starttouch = (event) => {
    temstartX.value = event.targetTouches[0].pageX;
    temstartY.value = event.targetTouches[0].pageY;
}
const continuetouch = (event) => {
    let result1 = (event.targetTouches[0].pageX - temstartX.value) / parseFloat(bigwidth.value) * 100
    temdragmoveX.value = result1;
    let result = (event.targetTouches[0].pageY - temstartY.value) / parseFloat(bigheight.value) * 100
    temdragmoveY.value = result;
}
const stoptouch = (event) => {
    dragmoveX.value = dragmoveX.value + temdragmoveX.value;
    dragmoveY.value = dragmoveY.value + temdragmoveY.value;
    temdragmoveX.value = 0;
    temdragmoveY.value = 0;
}
// 控制范围
const endmoveX = computed(() => {
    return dragmoveX.value + temdragmoveX.value;
})
const endmoveY = computed(() => {
    return dragmoveY.value + temdragmoveY.value;
})

const confirmcrip = ()=>{
    // console.log(';aksdjf')
    // console.log(parseFloat(bigwidth.value) * endmoveX.value/100)
    canvasctx.value.drawImage(img.value,-parseFloat(bigwidth.value) * endmoveX.value/100,-parseFloat(bigheight.value) * endmoveY.value/100,parseFloat(bigwidth.value),parseFloat(bigheight.value) )

    setTimeout(()=>{
        let result =  canvas.value.toDataURL()
        // console.log(result)
        emit('editedimg',result)
    },100)
}
</script>
<template>
    <div class="cripimgcontainer">
        <div class="imgcenter" ref="imgcontainer">
            <img ref="img" style="width: 100%;height: 100%;">
        </div>
    </div>
    <div class="cripmask">
        <div class="imgcenter1" ref="cripmovecontainer" @touchstart.stop="starttouch" @touchmove.stop="continuetouch"
            @touchend.stop="stoptouch">
            <div class="dragcontainer" :style="{ top: endmoveY + '%', left: endmoveX + '%' }">
                <img ref="bigimg" :style="{ transform: `translate(${-endmoveX}%,${-endmoveY}%)` }">

            </div>
        </div>
    </div>
    <div class="confirmstyle">
        <button @click="confirmcrip">确定</button>
        <button>取消</button>
    </div>
    <div class="temcanvas">
        <canvas ref="canvas" width="200" height="200" ></canvas>
    </div>
    
</template>
<style>
.temcanvas{
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 10000000;
}
.cripimgcontainer {
    height: 100vh;
    width: 100vw;
    background-color: grey;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: relative;
}

.confirmstyle {
    position: absolute;
    z-index: 100000;
    left: 0;
    top: 30px;
    width: 100vw;
    display: flex;
    justify-content: space-around;
}

.imgcenter {
    width: 100vw;
}

.cripmask {
    height: 100vh;
    width: 100vw;
    background-color: rgba(3, 3, 3, 0.6);
    display: flex;
    position: absolute;
    top: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;

    .imgcenter1 {
        /* 动态穿件了高度 */
        position: relative;

        .dragcontainer {
            width: 200px;
            height: 200px;
            position: absolute;
            background-color: white;
            overflow: hidden;
        }

    }



}
</style>