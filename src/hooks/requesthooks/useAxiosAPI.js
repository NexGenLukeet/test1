// fetch.js
import { ref } from 'vue'
import { postlogin } from '../../API/login.js';

export function useAxiosAPI(url) {
    const data = ref(null)
    const error = ref(null)

    postlogin(url)

    // fetch(url)
    //     .then((res) => res.json())
    //     .then((json) => (data.value = json))
    //     .catch((err) => (error.value = err))

    return { data, error }
}