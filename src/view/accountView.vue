<script setup>
import { useRoute } from 'vue-router';
import { onUpdated } from 'vue';
const route = useRoute();

onUpdated(function () {
    // console.log('0000000000')
    // console.log(route.path)
    if (route.path == '/account/login') {

    } else {

    }
})


</script>

<template>
    <div>
        <router-view v-slot="{ Component }">
            <!-- <transition name="ggbong" mode="out-in"> -->
                <component :is="Component" />
            <!-- </transition> -->
        </router-view>
    </div>


</template>

<style scoped>
.ggbong-enter-active,
.ggbong-leave-active {
    transition: all 0.5s, transform 0.5s;
}

.ggbong-enter-from,
.ggbong-leave-to {

    transform: translateY(20px);
}
</style>