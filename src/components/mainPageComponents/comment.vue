<script setup>

// const emit = defineEmits(['changecomment'])
// emit('changecomment')

const model = defineModel();


</script>

<template>
    <div class="commentheader" @click="model = false">
        三条评论
        <div class="commentclose">×</div>
    </div>
    <div class="commentbodycontainer" @click.stop>
        
    </div>
    <div class="commentfooter" @click.stop>
        <input type="text">
        <span>@</span>
    </div>
</template>

<style>
.commentheader {
    height: 30px;
    width: 100vw;
    background: rgba(22, 24, 35, 0.98);
    color: white;
    text-align: center;
    position: relative;

    .commentclose {
        position: absolute;
        right: 0;
        top: 0;
        height: 30px;
        font-size: 30px;
        line-height: 30px;
        color: white;
    }
}

.commentbodycontainer {
    height: calc(50vh - 62px);
    background: rgba(22, 24, 35, 0.98);
    overflow: scroll;
}

.commentfooter {
    height: 30px;
    width: 100vw;
    background: rgba(22, 24, 35, 0.98);
    color:white;
    text-indent: 2em;
    input{
        width:70vw;
    }
}
</style>