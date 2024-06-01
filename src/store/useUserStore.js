import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

// 你可以任意命名 `defineStore()` 的返回值，但最好使用 store 的名字，同时以 `use` 开头且以 `Store` 结尾。
// (比如 `useUserStore`，`useCartStore`，`useProductStore`)
// 第一个参数是你的应用中 Store 的唯一 ID。
export const useUserStore = defineStore('user', () => {
    const createdAt = ref(0);
    const updatedAt = ref(0);

    const id = ref(0);
    const userId = ref(0);
    const userEmail = ref(0);
    const userPassword = ref(0);

    return { createdAt, updatedAt, id, userId, userEmail, userPassword };
})