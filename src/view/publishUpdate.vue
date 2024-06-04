<script setup>
import backheader from '../components/common/backheader.vue'


import { ref, reactive } from 'vue';
const showvideo = ref(false);
const video = ref(null);
const videoObj = reactive({
    realVideo: '',
    showurl: '',
    coverDataURL: ''
})
const filechange = function (event) {
    let file = event.target.files[0];
    videoObj.realVideo = file;

}
const preview = () => {
    showvideo.value = true;
    videoObj.showurl = URL.createObjectURL(videoObj.realVideo);


}
import { publishVideoAPI,publishCoverAPI,publishEndAPI } from '../API/publishVideoAPI.js';
const publishvideo = () => {
    // 上传视频；
    const theEndParams = {
        videoId:'',
        videoCover:'',
        videoPath:'',
        videoDesc:'damn'
    }
    let formData = new FormData();
    formData.append('videoPath', videoObj.realVideo)
    publishVideoAPI(formData).then(res => {
        // 首先上传视频，并获取返回后的视频id
        let temvideoid = res.data.filename
        const videoId = temvideoid.substr(0, temvideoid.indexOf('.'))
        theEndParams.videoId = videoId;
        theEndParams.videoPath = 'http://43.138.15.137:3000/assets/videoPath/'+ res.data.filename;
        return temvideoid
    }).then(res => {
        // 接受到返回的id，然后发送封面数据；
        let canvas = document.createElement('canvas');
        canvas.width = video.value.videoWidth;
        canvas.height = video.value.videoHeight;
        canvas.getContext('2d').drawImage(video.value, 0, 0, canvas.width, canvas.height);
        videoObj.coverDataURL = canvas.toDataURL();
        let formData1 = new FormData();
        formData1.append('videoId',res);
        formData1.append('videoCover',dataURItoBlob(videoObj.coverDataURL));
        return publishCoverAPI(formData1);
    }).then(res => {
        console.log(res);
        theEndParams.videoCover ='http://43.138.15.137:3000/assets/videoPath/'+ res.data.filename;
        return publishEndAPI(theEndParams,'0c34a42d-f0e1-4f13-ad18-c6cdf7ccc060')
    }).then(res => {
        console.log(res);
    });


}

function dataURItoBlob(dataURI) {
    var byteString = atob(dataURI.split(',')[1])
    var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]
    var ab = new ArrayBuffer(byteString.length)
    var ia = new Uint8Array(ab)
    for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i)
    }
    return new Blob([ab], { type: mimeString })
}
</script>
<template>
    <div>
        <div class="sendheadercontainer">
            <backheader title="发布动态" to="/home/message"></backheader>
        </div>
        <div class="videoshowcontainer">
            <div v-if="!showvideo">
                <input type="file" id="fileElem1" class="visually-hidden" @change="filechange" />
                <label for="fileElem1">点击上传或者在下方输入url，推荐使用url</label>
            </div>
            <div v-if="showvideo">
                <video :src="videoObj.showurl" ref="video" style="width: 100%;height: 100%;"></video>
            </div>
        </div>
        <div class="publishothercontainer">
            <div class="somevideoaddmorecontainer"></div>
            <div class="somevideoaddmorecontainer"></div>
            <div class="somevideoaddmorecontainer"></div>
            <div class="videoshowpubliccontainer">
                <button @click="preview">预览</button>
                <button @click='publishvideo'>发布</button>
            </div>
        </div>
    </div>
</template>

<style>
.sendheadercontainer {
    width: 100vw;
    height: 50px;
}

.videoshowcontainer {
    height: 330px;
    width: 100vw;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
}

.publishothercontainer {
    height: calc(100vh - 50px - 330px);
    background-color: #161622;
}

.somevideoaddmorecontainer {
    width: 100vw;
    height: 50px;
}

.videoshowpubliccontainer {
    width: 100vw;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-around;
}


.visually-hidden {
    position: absolute !important;
    height: 1px;
    width: 1px;
    overflow: hidden;
    clip: rect(1px, 1px, 1px, 1px);
}

input.visually-hidden:is(:focus, :focus-within)+label {
    outline: thin dotted;
}
</style>