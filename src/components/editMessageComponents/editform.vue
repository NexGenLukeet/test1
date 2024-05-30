<script setup>
</script>

<template>
    <div class="formcontainer">
        <div class="labelcontainer">
            <div class="labelname">昵称</div>
            <div class="inputcontainer"></div>
        </div>
        <div class="labelcontainer">
            <div class="labelname">签名</div>
            <div class="inputcontainer"></div>
        </div>
        <div class="labelcontainer">
            <div class="labelname">性别</div>
            <div class="inputcontainer"></div>
        </div>
        <div class="labelcontainer">
            <div class="labelname">年龄</div>
            <div class="inputcontainer"></div>
        </div>
        <div class="labelcontainer">
            <div class="labelname">地区</div>
            <div class="inputcontainer"></div>
        </div>

    </div>
</template>

<style>
.formcontainer{
    width: 100vw;
    height: auto;

    .labelcontainer{
        width:100vw;
        height: 60px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .labelname{
            padding-left: 20px;
            padding-right: 20px;
        }
    }
}

</style>