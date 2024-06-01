<script setup>

import { ref, watch } from 'vue';
const prop = defineProps(['initdata'])
const formmessage = ref({
    userNickname: '默认姓名',
    userDesc: '',
    userGender: '',
    userAge: '',
    userAddress: '',
})
formmessage.value = prop.initdata

</script>

<template>
    <div class="formcontainer">
        <div class="labelcontainer">
            <div class="labelname">昵称</div>
            <div class="inputcontainer">
                <input type="text" v-model="formmessage.userNickname">
            </div>
        </div>
        <div class="labelcontainer">
            <div class="labelname">签名</div>
            <div class="inputcontainer">
                <input type="text" v-model="formmessage.userDesc">
            </div>
        </div>
        <div class="labelcontainer">
            <div class="labelname">性别</div>
            <div class="inputcontainer">
                <input type="text" v-model="formmessage.userGender">
            </div>
        </div>
        <div class="labelcontainer">
            <div class="labelname">年龄</div>
            <div class="inputcontainer">
                <input type="text" v-model="formmessage.userAge">
            </div>
        </div>
        <div class="labelcontainer">
            <div class="labelname">地区</div>
            <div class="inputcontainer">
                <input type="text" v-model="formmessage.userAddress">
            </div>
        </div>

    </div>
</template>

<style>
.formcontainer {
    width: 100vw;
    height: auto;

    .labelcontainer {
        width: 100vw;
        height: 60px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .labelname {
            padding-left: 20px;
            padding-right: 20px;
        }
    }
}
</style>