<script setup>
const prop = defineProps(['title','to'])
</script>
<template>
    <div class="backblackheader">
        {{ title }}
        <RouterLink class="backcontainer" :to="to"  >
            <
        </RouterLink>
    </div>
</template>

<style>
.backblackheader{
    width: 100vw;
    height:50px;
    background-color: #161622;
    text-align: center;
    line-height: 50px;
    color: white;
    position: relative;
}
.backcontainer{
    display: block;
    position: absolute;
    left: 10px;
    top: 50%;
    color: white;
    transform: translateY(-50%);
}
</style>