<script setup>
import { watch } from 'vue';

const model = defineModel()


</script>

<template>
    <div>
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <path 
            :class="[model ? 'heartactive' : 'heartnormal', 'heart']" 
            :fill="model ? 'red' : 'white'" 
            d=
            "M 10,30 
             A 20,20 0,0,1 50,30
             A 20,20 0,0,1 90,30
             Q 90,60 50,90
             Q 10,60 10,30 z" 
             />
        </svg>
    </div>
</template>
<style>
.heart {
    transform-origin: center;
    transition: transform 0.5s;
}

.heartnormal {
    transform: scale(1);
}

.heartactive {
    animation: heartbeat 0.5s ;
}

@keyframes heartbeat {
    0% {
        transform: scale(1);
    }

    25% {
        transform: scale(0.2);
    }

    50% {
        transform: scale(0.1);
    }

    75% {
        transform: scale(0.2);
    }

    100% {
        transform: scale(1);
    }
}
</style>