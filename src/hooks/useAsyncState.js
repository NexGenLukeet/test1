import { ref, watch, onMounted } from 'vue';

export default function (promise) {
    const responsedata = ref(null);
    const isdone = ref(false);

    promise.then(res => {
        responsedata.value = res;
        isdone.value = true;
    })

    return {
        responsedata,
        isdone,
    }
}