<script setup>
import { ref, onMounted } from 'vue'
const emit = defineEmits(['changeimg'])

const prop = defineProps(['imgsrc'])


const fileelement = ref(null);
let reader = new FileReader();
reader.addEventListener('load', function () {
    emit('changeimg', reader.result);
})
onMounted(() => {
    fileelement.value.addEventListener('change', function () {
        let file = fileelement.value.files[0];
        reader.readAsDataURL(file)
    })
})

</script>

<template>
    <div class="imgcontainer">
        <div class="imgcontainer1">
            <img :src="imgsrc" style="width: 100%;height: 100%;">
        </div>
        <div class="imgcontainer2">
            
            <label for="fileElem">点击更换头像</label>
            <input type="file" ref="fileelement" id="fileElem" class="visually-hidden">
        </div>
    </div>
</template>

<style>
.visually-hidden {
  position: absolute !important;
  height: 1px;
  width: 1px;
  overflow: hidden;
  clip: rect(1px, 1px, 1px, 1px);
}

input.visually-hidden:is(:focus, :focus-within) + label {
  outline: thin dotted;
}

.imgcontainer {
    height: 100%;
    width: 100vw;
    background-color: black;
    color: white;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: space-around;

    .imgcontainer1 {
        height: 100px;
        width: 100px;
        background-color: white;
        border-radius: 50%;
        overflow: hidden;
    }

    .imgcontainer2 {
        color: gray;
    }


}
</style>