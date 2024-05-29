<script setup>
const emit = defineEmits(['gotocontracts'])
const gotocontracts = () => {
    emit('gotocontracts')
}
</script>
<template>
    <div class="centermessage">
        消息
    </div>
    <div class="rightnavdiv" @click="gotocontracts">联系人</div>
</template>

<style>
.centermessage{
    margin:auto;
    color:white;
    height: 100%;
    text-align: center;
    line-height: 50px;
}
.rightnavdiv{
    position: absolute;
    right: 0;
    color: white;
    top: 50%;
    transform: translateY(-50%);
}

</style>