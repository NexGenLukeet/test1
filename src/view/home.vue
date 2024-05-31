<script setup>
import { watch, ref, Transition } from 'vue'
import { useRouter, useRoute } from 'vue-router';
const router = useRouter()
const route = useRoute()
const whichlight = ref(0);
watch(() => route.path,
    (val) => {
        if (val == '/home/mainpage') {
            whichlight.value = 0;
        } else if (val == '/home/follow') {
            whichlight.value = 1;
        } else if (val == '/home/message') {
            whichlight.value = 2;
        } else {
            whichlight.value = 3;
        }

    }
)

</script>

<template>
    <div class="homecontainer">
        <div class="homechildrencontainer">

            <router-view v-slot="{ Component }">
                <!-- <Transition name="bigmoverouter"> -->
                    <component :is="Component"></component>
                <!-- </Transition> -->
            </router-view>

        </div>
        <div class="bottomnav">
            <div @click="$router.push('/home/mainpage')" :style="{ color: whichlight == 0 ? 'white' : 'grey' }">首页</div>
            <div @click="$router.push('/account/login')" :style="{ color: whichlight == 1 ? 'white' : 'grey' }">关注</div>
            <div>
                <div class="plusicon">+</div>
            </div>
            <div @click="$router.push('/home/message')" :style="{ color: whichlight == 2 ? 'white' : 'grey' }">消息</div>
            <div @click="$router.push('/home/mine')" :style="{ color: whichlight == 3 ? 'white' : 'grey' }">我</div>
        </div>
    </div>
</template>

<style>
.bigmoverouter-enter-active,
.bigmoverouter-leave-active {
    transition: all 0.5s linear;
}

.bigmoverouter-enter-from,
.bigmoverouter-leave-to {
    transform: translateY(-100%);
}

.bigmoverouter-enter-to,
.bigmoverouter-leave-from {
    transform: translateY(0);
}


.homecontainer {
    width: 100vw;
    height: 100vh;
    background-color: black;
}

.homechildrencontainer {
    width: 100vw;
    height: calc(100vh - 50px);
    overflow: hidden;
}

.bottomnav {
    width: 100vw;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: black;
    color: white;
}

.plusicon {
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    font-size: larger;
    font-weight: bold;
    margin-top: 5px;
    border: 2px solid white;
    border-radius: 3px;
}
</style>