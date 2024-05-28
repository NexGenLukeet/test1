<script setup>
import { useRoute } from 'vue-router';
import { onUpdated } from 'vue';
const route = useRoute();

onUpdated(function(){
    console.log('0000000000')
    console.log(route.path)
    if(route.path == '/account/login'){

    }else{
        
    }
})


</script>

<template>
    <router-view v-slot="{ Component }">
        <transition name="ggbong" mode="out-in">
            <component :is="Component" />
        </transition>
    </router-view>

</template>

<style scoped>
.ggbong-enter-active,
.ggbong-leave-active {
    transition: opacity 0.5s, transform 0.5s;
}

.ggbong-enter-from,
.ggbong-leave-to {
    opacity: 0;
    transform: translateY(20px);
}
</style>