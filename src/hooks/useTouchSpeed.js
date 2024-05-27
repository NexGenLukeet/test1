/**
 * element:document element
 * 返回的高度是相对于元素的百分比
 */


import { ref, watch, onMounted } from 'vue';

export function useTouchSpeed(element) {
  const y0 = ref(0);
  const y1 = ref(0);

  const t0 = ref(0);
  const t1 = ref(1);

  const getinit = (event) => {
    y0.value = event.targetTouches[0].pageY;
    t0.value = window.performance.now();
  };

  const getmoving = (event) => {
    y1.value = event.targetTouches[0].pageY;
  }

  const getend = (event) => {
    y1.value = event.changedTouches[0].pageY;
    t1.value = window.performance.now();
    // 清空移动的初始值和结束值；
    ychange.value = 0;
  };


  const ychange = ref(0)
  watch(y1, (val) => {
    ychange.value = (y1.value - y0.value) / 567 * 100;
  })

  const timechange = ref(0);
  watch(t1, (val) => {
    timechange.value = t1.value - t0.value;
  })

  onMounted(() => {
    if (element.value) {
      element.value.addEventListener('touchstart', getinit);
      element.value.addEventListener('touchmove', getmoving);
      element.value.addEventListener('touchend', getend);
      // console.log( element.value.getComputedStyle())
      // console.log( window.getComputedStyle(element.value).getPropertyValue("height"))
      const heightWithPx = window.getComputedStyle(element.value).getPropertyValue("height");
      const height = parseFloat(heightWithPx);
      // console.log(height)
    }
  })
  return {
    ychange,
    timechange
  };
}
