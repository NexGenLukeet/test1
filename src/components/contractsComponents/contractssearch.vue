<script setup>
import svgsearch from '../svgicon/svgsearch.vue'
</script>

<template>
    <div class="searchinput">
        <div class="searchinput1">
            <svgsearch></svgsearch>
        </div>
        <div class="searchinput2"><input type="text"></div>
    </div>
</template>


<style>
.searchinput {
    width: 90%;
    height: 45px;
    background-color: #242630;
    display: flex;
    align-items: center;
    justify-content: space-around;

    .searchinput1 {
        width: 30px;
        height: 30px;
    }

    .searchinput2 {
        width: 300px;

        input {
            font-size: 14px;
            color: #e8e8e9;
            padding-left: 10px;
            background: none;
            caret-color: #face15;
            outline: none;
            border: none;
        }
    }

}
</style>