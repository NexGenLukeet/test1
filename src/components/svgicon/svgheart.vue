<script setup>
import { watch } from 'vue';

const model = defineModel()


</script>

<template>
    <div>
        <!-- <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" height="32px" width="32px">
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
             
        </svg> -->

        <svg t="1717051272528" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
            p-id="7337" width="32" height="32">
            <path 
            :class="[model ? 'heartactive' : 'heartnormal', 'heart']" 
            :fill="model ? 'red' : 'white'" 
                d="M512 901.746939c-13.583673 0-26.122449-4.179592-37.093878-13.061225-8.881633-7.314286-225.697959-175.020408-312.424489-311.379592C133.746939 532.37551 94.040816 471.24898 94.040816 384.522449c0-144.718367 108.146939-262.269388 240.326531-262.269388 67.395918 0 131.657143 30.82449 177.632653 84.636735 45.453061-54.334694 109.191837-84.636735 177.110204-84.636735 132.702041 0 240.326531 117.55102 240.326531 262.269388 0 85.159184-37.093878 143.673469-67.395919 191.216327l-1.044898 1.567346c-86.726531 136.359184-303.542857 304.587755-312.424489 311.379592-10.44898 8.359184-22.987755 13.061224-36.571429 13.061225z"
                 p-id="7338"></path>
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
    animation: heartbeat 0.5s;
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