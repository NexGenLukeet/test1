/**
 * 
 */
import { ref } from 'vue'

export function useMouseMove(element) {
  const x = ref(0)
  const y = ref(0)

  const t0 = ref(0);
  const t1 = ref(1);


  element.value.addEventListener('touchstart', function (event) {
    t0.value = window.performance.now();
  })
  element.value.addEventListener('touchend', function (event) {
    t1.value = window.performance.now();
    console.log(t1.value - t0.value);
  })
  
  return { x, y }
}