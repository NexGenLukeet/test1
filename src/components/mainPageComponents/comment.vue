<script setup>

const emit = defineEmits(['changecomment'])

emit('changecomment')

</script>

<template>
    <div class="commentheader">三条评论 ×</div>
    <div class="commentbodycontainer" @click.stop>
    </div>
    <div class="commentfooter" @click.stop><input type="text"></div>
</template>

<style>
.commentheader {
    height: 30px;
    width: 100vw;
    background: rgba(22,24,35,0.98);
}

.commentbodycontainer {
    height: calc(50vh - 62px);
    background: rgba(22,24,35,0.98);
}

.commentfooter {
    height: 30px;
    width: 100vw;
    background: rgba(22,24,35,0.98);
}
</style>