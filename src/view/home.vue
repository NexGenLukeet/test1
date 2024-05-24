<script setup>

</script>

<template>
    <div class="homecontainer">
        <div class="homechildrencontainer">
            <RouterView />
        </div>
        <div class="bottomnav">
            <div>首页</div>
            <div>首页</div>
            <div>首页</div>
            <div>首页</div>
            <div>首页</div>
        </div>
    </div>
</template>

<style>
.homecontainer{
    width:100vw;
    height:100vh;
}
.homechildrencontainer{
    width:100vw;
    height:calc(100vh - 50px);
}
.bottomnav{
    width:100vw;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-around;
}
</style>