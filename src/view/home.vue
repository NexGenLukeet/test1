<script setup>

</script>

<template>
    <div class="homecontainer">
        <div class="homechildrencontainer">
            <RouterView />
        </div>
        <div class="bottomnav">
            <div @click="$router.push('/home/mainpage')">首页</div>
            <div @click="$router.push('/home/follow')">关注</div>
            <div>
                <div class="plusicon">+</div>
            </div>
            <div @click="$router.push('/home/message')">消息</div>
            <div @click="$router.push('/home/mine')">我</div>
        </div>
    </div>
</template>

<style>
.homecontainer {
    width: 100vw;
    height: 100vh;
    background-color: black;
}

.homechildrencontainer {
    width: 100vw;
    height: calc(100vh - 50px);
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