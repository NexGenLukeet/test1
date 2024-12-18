<script setup>
import { Transition, watch, ref } from 'vue';
import { useRoute } from 'vue-router';
let route = useRoute();

const routename = ref('mostmoveanmi')
watch(route, () => {
  console.log(route.path);
  if (route.path == '/account/login') {
    routename.value = 'mostmoveanmi'
  } else {
    routename.value = 'none'
  }
})
</script>

<template>
  <router-view v-slot="{ Component }">
    <!-- <Transition :name="routename" mode="out-in"> -->
      <component :is="Component"></component>
    <!-- </Transition> -->
  </router-view>

</template>

<style>
.mostmoveanmi-enter-active {
  transition: all 0.3s ease-in-out;
}
.mostmoveanmi-leave-active {
  transition: none;
}
.mostmoveanmi-enter-from {
  opacity: 0;
  transform: translateY(100vh);
}

.mostmoveanmi-enter-to {
  transform: translateY(0);
  opacity: 1;
}

.mostmoveanmi-leave-from {
  transform: translateY(0);
}

.mostmoveanmi-leave-to {
  transform: translateY(-100vh);
}
</style>