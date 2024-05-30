<script setup>

</script>
<template>
    <div class="pointpointpointicon">
        ...
        <div class="changeorgetoutposition">
            <div class="changemsgnav">修改个人资料</div>
            <div>注销</div>
        </div>
    </div>
</template>

<style>
.pointpointpointicon{
    width: 28px;
    height: 28px;
    text-align: center;
    line-height: 16px;
    background-color: rgba(4, 4, 4,0.5);
    border-radius: 50%;
    color: white;
    position: relative;
    .changeorgetoutposition{
        position: absolute;
        width:200px;
        height: 60px;
        left: -200px;
        top: 100%;
        background-color: rgba(4, 4, 4,0.5);
        overflow: hidden;
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: space-around;
        .changemsgnav{
            /* transform: translateY(-100%); */
        }
    }
}
</style>