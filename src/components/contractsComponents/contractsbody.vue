<script setup>
import { ref } from 'vue'
import { pinyin } from 'pinyin-pro'
const prop = defineProps(['data'])
console.log(prop.data)

// let result =  pinyin(prop.data[0].userDesc,{pattern:'first'})
// console.log(result[0],)

const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const resultIndex = letters
    .map(ele => ({ value: ele }))
    .map(item => prop.data
        .map(ele => pinyin(ele.userNickname, { pattern: 'frist' }))
        .map(ele => ele[0])
        .reduce((x, y, index) => x.concat(item.value == y ? [index] : []), [])
        .map(ele => ({ value: item.value, children: ele })))
    .filter(ele => ele.length > 0);
// 取出每个的字母
const litterlist = resultIndex.map(ele => ele[0]).map(ele => ele.value)
const toplitter1 = ref(0);
// 每个字母对应的高度
const scrolldivide = (event) => {
    let heightLength = []
    for (let i = 0; i < event.target.children.length; i++) {
        let height = event.target.children[i].offsetTop;
        heightLength.push(height)
    }
    let temresult = heightLength.findIndex(ele => ele > event.target.scrollTop);
    toplitter1.value = temresult;
}
</script>

<template>
    <div class="listcontainer" @scroll="scrolldivide($event)">
        <div v-for="item in resultIndex" class="oneitem">
            <div class="onelitterheader">
                {{ item[0].value }}
            </div>
            <div v-for="item1 in item" class="onelittercontent">
                <!-- {{ prop.data[item1.children].userNickname }} -->
                <div class="onelittercontentimg">
                    <img :src="'http://43.138.15.137:3000' + prop.data[item1.children].userAvatar" alt="">
                </div>
                <div class="onelittercontentintroduce">
                    <div>{{ prop.data[item1.children].userNickname }}</div>
                    <div style="color:grey">{{ prop.data[item1.children].userDesc }}</div>
                </div>
                <div class="onelittercontenttalk"></div>
            </div>
        </div>
    </div>
    <div class="rightlitterlight">
        <div v-for="item, index in litterlist" class="defaultlitter"
            :style="{ color: index + 1 == toplitter1 ? 'yellow' : '', }">
            {{ item }}
        </div>
    </div>
</template>

<style>
.listcontainer {
    height: calc(100vh - 100px);
    background-color: black;
    color: white;
    overflow: scroll;

    .onelitterheader {
        height: 30px;
        text-indent: 20px;
    }

    .onelittercontent {
        height: 70px;
        width: calc(100vw - 40px);
        margin: auto;
        display: flex;
        justify-content: space-around;
        align-items: center;

        .onelittercontentimg {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            overflow: hidden;

            img {
                width: 100%;
                height: 100%;
            }
        }

        .onelittercontentintroduce {
            width: calc(100% - 100px)
        }

        .onelittercontenttalk {
            width: 30px;
            height: 30px;
        }
    }
}

.rightlitterlight {
    position: absolute;
    width: 30px;
    right: 0;
    top: 50%;
    transform: translateY(-50%);

    .defaultlitter {
        width: 23px;
        height: 23px;
        text-align: center;
        color: white;
    }
}
</style>