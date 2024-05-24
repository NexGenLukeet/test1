<script setup>
import { ref, onMounted } from 'vue'
import { useMouseMove  } from '../../hooks/useMouseMove.js'

const dragcontainer = ref(null)


onMounted(()=>{
    useMouseMove(dragcontainer)
})


</script>

<template>
    <div class="videoviewcontainer" ref="dragcontainer">

    </div>
</template>

<style>
.videoviewcontainer {
    height: 100%;
    width: 100vw;
    background-color: black;
}
</style>
