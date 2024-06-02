<script setup>
const prop = defineProps(['datalist'])
// 对获取的数据进行初步处理，防止异步请求的空值问题
// prop.datalist = [{
//     userId:'',
//     userNichname:'',
//     userAvatar:'',
//     userDesc:'',
//     myRelation:'',
// }]
</script>

<template>
    <div class="userliststyle">
        <div v-for="item, index in prop.datalist">
            <div class="one-user-overview">
                <div class="one-user-overview-img">
                    <img :src="'http://43.138.15.137:3000' + item.userAvatar" style="width: 100%;height:100%">
                </div>
                <div class="one-user-overview-textmsg">
                    <div>{{ item.userNickname }}</div>
                    <div>{{ item.userDesc }}</div>
                </div>
                <div class="one-user-overview-state">
                    {{ item.myRelation }}
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.userliststyle {
    height: 100%;
    width:100vw;
    overflow: scroll;
    background-color: black;
}

.one-user-overview {
    width: 100vw;
    height: 70px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-around;

    .one-user-overview-img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        overflow: hidden;
    }

    .one-user-overview-textmsg {
        width: 50vw;
    }

    .one-user-overview-state {
        width: 100px;
    }
}
</style>